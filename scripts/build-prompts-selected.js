import fs from "node:fs";
import seed from "../data/prompts-manual-seed.js";

const sourceFile = "/Users/paxton/Desktop/Last 360fecae952d8041a268fcddeb3d4d70.md";
const outputFile = new URL("../data/prompts-selected.js", import.meta.url);

const level1Names = new Set(Object.keys(seed));
const data = structuredClone(seed);
const seen = collectExistingPrompts(data);
const selected = parseSelectedPrompts(fs.readFileSync(sourceFile, "utf8"));

for (const item of selected) addPrompt(routePrompt(item), item.prompt);

fs.writeFileSync(outputFile, `const data = ${JSON.stringify(data, null, 2)};\n\nexport default data;\n`);

console.log(`selected=${selected.length}`);

function parseSelectedPrompts(markdown) {
  const items = [];
  let level1 = "基础锚点";
  let section = "";

  for (const line of markdown.split(/\r?\n/)) {
    const heading = line.match(/^#{2,4}\s+(.+?)\s*$/);
    if (heading) {
      const name = heading[1].trim();
      if (level1Names.has(name)) level1 = name;
      else section = name;
      continue;
    }

    if (!line.includes("！")) continue;
    const match = line.match(/`([^`]+)`/);
    if (!match) continue;
    items.push({
      prompt: match[1].trim(),
      level1,
      section,
    });
  }

  return items;
}

function addPrompt(path, prompt) {
  const key = prompt.toLowerCase();
  if (seen.has(key)) return;
  seen.add(key);
  const [level1, level2, level3] = path;
  data[level1][level2][level3].push(prompt);
}

function collectExistingPrompts(source) {
  const prompts = new Set();
  for (const level2Groups of Object.values(source)) {
    for (const level3Groups of Object.values(level2Groups)) {
      for (const group of Object.values(level3Groups)) {
        for (const item of group) prompts.add(normalizePrompt(item).toLowerCase());
      }
    }
  }
  return prompts;
}

function normalizePrompt(item) {
  return typeof item === "string" ? item : item.prompt;
}

function routePrompt(item) {
  const text = item.prompt.toLowerCase();

  if (/(1boy|2boys|3boys|multiple boys|male focus|male only|male\/male|faceless|featureless|out of view male|young adult)/.test(text)) {
    return ["基础锚点", "人数/性别", text.includes("young") ? "年龄感" : "性别"];
  }
  if (/\bbara\b/.test(text)) return ["基础锚点", "主题", "Bara"];
  if (/(nsfw|explicit|homoerotic|in heat|public use)/.test(text)) return ["基础锚点", "主题", "成人主题"];
  if (/\b(oral|anal|handjob|masturbation)\b|rough sex/.test(text)) {
    return ["基础锚点", "主题", "性行为主题"];
  }

  if (/(hitman|shaman|barbarian|gladiator|dilf)/.test(text)) return ["角色设定", "人类", "身份"];
  if (/(dominant|\bdom\b|\bsub\b|submissive|larger dom|large sub|small dom|manly)/.test(text)) return ["角色设定", "气质", "阳刚/强势"];
  if (/(bodybuilder|athletic|plump|toned|muscular|huge pectorals|large pectorals|plump pecs|narrow waist|muscular thighs)/.test(text)) {
    return ["角色设定", "体型", /(plump)/.test(text) ? "壮胖" : "肌肉"];
  }

  if (/(cowboy shot|close up|close view|head out of frame)/.test(text)) return ["身体细节", "画面部位", "画面范围"];
  if (/(bald|male pubic hair)/.test(text)) return ["身体细节", "头发", text.includes("pubic") ? "体毛" : "发型"];
  if (/(tongue|clenched teeth|sharp teeth|looking back at viewer|looking at each other|looking down|looking up|looking at viewer|facing viewer|glancing at viewer)/.test(text)) {
    if (/(tongue)/.test(text)) return ["身体细节", "面部特征", "嘴/舌头"];
    if (/(teeth)/.test(text)) return ["身体细节", "面部特征", "牙齿"];
    return ["摄影语言", "视角", "POV"];
  }
  if (/(drunk|blushing|orgasm face|orgasm|moaning|teasing)/.test(text)) return ["身体细节", "表情", /(orgasm|moaning)/.test(text) ? "色情/高潮" : "羞涩/紧张"];
  if (/(pectoral|pectorals|pec |pecs|chest|nipple|shoulder|torso|waist|back|arms|biceps|hand|finger)/.test(text)) {
    if (/(nipple)/.test(text)) return ["身体细节", "上半身", "胸肌/乳头"];
    if (/(waist|torso)/.test(text)) return ["身体细节", "上半身", "腹部/腰"];
    if (/(back|arms|biceps|hand|finger|shoulder)/.test(text)) return ["身体细节", "上半身", "背/肩/手臂"];
    return ["身体细节", "上半身", "胸肌/乳头"];
  }
  if (/(hips|butt|thigh|legs|feet|foot)/.test(text)) {
    if (/(feet|foot)/.test(text)) return ["身体细节", "下半身", "脚"];
    if (/(hips|butt)/.test(text)) return ["身体细节", "下半身", "臀部"];
    return ["身体细节", "下半身", "腿"];
  }
  if (/(penis|testicles|glans|anus|bodily fluids|cum|prostate|chastity cage)/.test(text)) {
    if (/(testicles)/.test(text)) return ["身体细节", "性器官", "睾丸"];
    if (/(glans)/.test(text)) return ["身体细节", "性器官", "阴茎"];
    if (/(anus)/.test(text)) return ["身体细节", "性器官", "肛门"];
    if (/(fluid|cum)/.test(text)) return ["身体细节", "性器官", "体液"];
    return ["身体细节", "性器官", "阴茎"];
  }
  if (/(transparent body)/.test(text)) return ["身体细节", "其他", "皮肤"];

  if (/(cowboy hat|hat|headscarf|sunglasses|earrings|necklace|no mask)/.test(text)) return ["服饰细节", "头部", /(sunglasses)/.test(text) ? "眼镜/面具" : "帽子/头饰"];
  if (/(shirt|harness|jacket|tank top|compression shirt|hawaiian shirt)/.test(text)) return ["服饰细节", "上半身", text.includes("harness") ? "胸带" : "上衣"];
  if (/(shorts|pants|boots|yoga pants|thighhighs|thigh strap)/.test(text)) return ["服饰细节", "下半身", /(boots|thighhighs)/.test(text) ? "鞋袜" : "裤子"];
  if (/(underwear|briefs|jockstrap|thong|bulge|boxer briefs)/.test(text)) return ["服饰细节", "内裤", text.includes("bulge") ? "凸起" : "款式"];
  if (/(open clothes|open pants|undressing|torn sleeves)/.test(text)) return ["服饰细节", "服饰状态", text.includes("torn") ? "破损" : "穿脱"];

  if (/(dildo|vibrator|riding machine|suction cup dildo)/.test(text)) return ["道具", "成人玩具", text.includes("vibrator") ? "刺激类" : "插入类"];
  if (/(collar|gag|chain|leash|rope|cuffs|shibari|frogtie|box tie|bondage|asphyxiation|nipple clamps|sword|riding crop)/.test(text)) return ["道具", "束缚与支配", /(collar|leash|gag)/.test(text) ? "支配道具" : "束缚"];

  if (/(cowgirl position|reverse cowgirl position|folded|relaxed pose|carrying|flexing|peace sign|legs|arms|back|holding|spread|bent|dynamic|action)/.test(text)) {
    if (/(legs|thigh straddling)/.test(text)) return ["姿势", "下半身", "腿部"];
    if (/(arms|biceps|hand|holding|peace sign)/.test(text)) return ["姿势", "上半身", "手部"];
    return ["姿势", "全身", "站坐躺"];
  }
  if (/(erect|bouncing penis|throbbing)/.test(text)) return ["姿势", "性器官", "勃起/露出"];

  if (/(autofellatio|masturbation|clothed masturbation|spread anus)/.test(text)) return ["性行为", "单人", "自慰"];
  if (/(missionary|penetration|69|anilingus|armpit sex|thigh sex|fellatio|handjob|deepthroat|oral|anal|glansjob|balljob|pecjob|dildo riding)/.test(text)) return ["性行为", "双人", "性互动"];
  if (/(holding hands|waist hug|deep kiss)/.test(text)) return ["性行为", "双人", "亲密互动"];
  if (/(triple|double penetration)/.test(text)) return ["性行为", "多人", "多人性行为"];

  if (/(backlighting|atmospheric perspective|from above|from below|front view|high angle|low angle|pov|side view|view from above|dutch angle|dynamic angle|from behind|from side|male pov)/.test(text)) {
    return ["摄影语言", "视角", text.includes("pov") ? "POV" : "机位"];
  }
  if (/(mirror selfie|selfie)/.test(text)) return ["摄影语言", "其他", "构图"];
  if (/(grainy texture)/.test(text)) return ["摄影语言", "其他", "色调"];

  return fallbackPath(item);
}

function fallbackPath(item) {
  if (item.level1 in data) return [item.level1, "待审", "待审"];
  return ["摄影语言", "待审", "待审"];
}
