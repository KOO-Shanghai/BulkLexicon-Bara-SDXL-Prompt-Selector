# Bara Prompt Generator

一个面向 iPad 横竖屏和 Mac 桌面使用的本地提示词选择工具。它把整理好的 Stable Diffusion / ComfyUI 提示词按多级分类展示，支持选择关键词、添加自定义关键词、维护默认正负面提示词，并把组合后的提示词发送到本地 ComfyUI 进行生成。

## 主要功能

- 生成页：按分类选择提示词，已选词会显示在每个分类下方。
- 自定义关键词：可手动输入额外提示词，用英文逗号分隔。
- 默认正负面提示词：每次生成都会自动加入。
- 批量生成：支持调整一次生成的数量，并显示当前任务状态。
- 图像历史：生成完成的图片会显示在历史页，点击图片可查看详情和保存。
- 设置页：配置模型、LoRA、图片尺寸、ComfyUI 地址、节点 ID 和 workflow JSON。
- iPad 预览：页面布局针对 iPad 和 Mac 做了宽度与高度自适应，不考虑手机小屏。

开始使用([https://koo-shanghai.github.io/BulkLexicon-Bara-SDXL-Prompt-Selector/])

## 本地运行

在项目目录下启动一个静态服务器：

```bash
python3 -m http.server 5173
```

本机访问：

```text
http://localhost:5173/
```

iPad 访问时，需要让 iPad 和电脑连接同一个局域网，然后使用电脑的局域网 IP，例如：

```text
http://192.168.101.134:5173/
```

如果 iPad 无法打开，优先检查：

- 电脑和 iPad 是否在同一个 Wi-Fi。
- 静态服务器是否还在运行。
- macOS 防火墙是否拦截了本地端口。
- 电脑的局域网 IP 是否变化。

## ComfyUI 连接

默认 ComfyUI 地址：

```text
http://192.168.101.43:8000
```

ComfyUI 需要允许局域网访问和跨域请求。启动参数中应包含类似：

```bash
--listen 0.0.0.0 --port 8000 --enable-cors-header "*"
```

页面会通过 ComfyUI API 提交 workflow。当前默认节点配置为：

- 正面提示词节点：`6`
- 负面提示词节点：`7`
- 模型节点：`4`
- 图片尺寸节点：`5`
- LoRA 1 节点：`11`
- LoRA 2 节点：`12`

默认模型与 LoRA：

- 模型：`waiIllustriousSDXL_v160.safetensors`
- LoRA 1：`flat_style.safetensors`，强度 `0.3`
- LoRA 2：`semi_realistic_style.safetensors`，强度 `0.7`
- 默认尺寸：`1024 x 1024`

如果更换 workflow，需要在「设置 / 节点与链接」里更新对应节点 ID，并粘贴新的 API workflow JSON。

## 词库文件

当前页面实际使用：

```text
data/prompts-selected.js
```

这个文件是最终展示用词库，结构为：

```js
{
  "一级分类": {
    "二级分类": {
      "三级分类": [
        { prompt: "english tag", zh: "中文含义" }
      ]
    }
  }
}
```

保留的辅助文件：

- `data/prompts.js`：旧版原始词库备份。
- `data/prompts-manual-seed.js`：新版手动分类种子。
- `scripts/build-prompts-selected.js`：从旧版 Markdown 标记词合并到新版种子。
- `scripts/polish-prompts-selected.js`：补齐中文翻译、清理“待审”分类。

## 维护词库的建议流程

1. 优先编辑或审查 `data/prompts-selected.js`。
2. 每个词条保留英文 prompt 和中文含义即可，不需要释义字段。
3. 中文翻译尽量写成“这个 tag 在图像生成里想表达什么”，不要机械直译。
4. 不确定分类的词先不要放进最终词库，等确认后再归类。
5. 分类尽量保持三层：一级用于大领域，二级用于功能区，三级用于具体部位、姿势、服装或场景。

## 默认提示词

默认正面提示词：

```text
best quality, highres,
```

默认负面提示词：

```text
bad quality, low resolution, blurry, girl, woman, female breasts, vagina,
```

复制关键词时，只复制「已选择关键词 + 自定义关键词」，不会包含默认正负面提示词。

生成时，会组合：

```text
默认正面提示词 + 已选择关键词 + 自定义关键词
```

负面提示词则使用默认负面提示词。

## 当前项目结构

```text
.
├── index.html
├── styles.css
├── app.js
├── data
│   ├── default-workflow.json
│   ├── prompts.js
│   ├── prompts-manual-seed.js
│   └── prompts-selected.js
└── scripts
    ├── build-prompts-selected.js
    └── polish-prompts-selected.js
```

## 注意事项

- Safari 切到后台后，网页 JavaScript 可能会被系统暂停，因此批量生成时建议保持页面在前台。
- 历史图片保存在当前浏览器页面状态中，刷新页面后不会作为永久图库保存。
- 如果 ComfyUI 能生成但页面看不到图片，通常需要检查 ComfyUI 输出节点、图片 URL 获取逻辑和浏览器跨域设置。
- 页面禁用了普通双击放大和双指缩放；历史图片详情里的图片仍支持双指缩放。
