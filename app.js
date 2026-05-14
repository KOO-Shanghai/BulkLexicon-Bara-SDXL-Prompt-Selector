import data from "./data/prompts-selected.js";

const STORAGE_KEY = "baraPromptGenerator.settings";
const DEFAULTS_STORAGE_KEY = "baraPromptGenerator.defaults";
const DEFAULT_WORKFLOW_VERSION = "new-api-workflow-2026-05-03";
const SETTINGS_LAYOUT_VERSION = "settings-model-nodes-2026-05-03";
const DEFAULT_POSITIVE_PROMPT = "best quality, highres,";
const DEFAULT_NEGATIVE_PROMPT = "bad quality, low resolution, blurry, girl, woman, female breasts, vagina,";
const SIZE_PRESETS = [
  { value: "1024x1024", label: "1024 x 1024", width: 1024, height: 1024 },
  { value: "832x1216", label: "832 x 1216", width: 832, height: 1216 },
  { value: "1216x832", label: "1216 x 832", width: 1216, height: 832 },
  { value: "768x1344", label: "768 x 1344", width: 768, height: 1344 },
  { value: "1344x768", label: "1344 x 768", width: 1344, height: 768 },
];

const state = {
  page: "keywords",
  keywordTab: "selector",
  settingsTab: "model",
  category: Object.keys(data)[0],
  subcategory: null,
  selected: new Set(),
  collapsedCategories: new Set(),
  defaults: {
    positive: DEFAULT_POSITIVE_PROMPT,
    negative: DEFAULT_NEGATIVE_PROMPT,
  },
  customPrompt: "",
  history: [],
  imageZoom: {
    scale: 1,
    startScale: 1,
    startDistance: 0,
  },
  generation: {
    batchSize: 1,
    total: 0,
    completed: 0,
    pending: 0,
    currentProgress: 0,
    active: false,
    stopped: false,
    interrupted: false,
  },
  settings: {
    comfyUrl: "http://192.168.101.43:8000",
    positiveNodeId: "6",
    negativeNodeId: "7",
    modelNodeId: "4",
    sizeNodeId: "5",
    modelName: "waiIllustriousSDXL_v160.safetensors",
    lora1NodeId: "11",
    lora1Name: "flat_style.safetensors",
    lora1Strength: "0.3",
    lora2NodeId: "12",
    lora2Name: "semi_realistic_style.safetensors",
    lora2Strength: "0.7",
    sizePreset: "1024x1024",
    imageWidth: "1024",
    imageHeight: "1024",
    workflowJson: "",
    workflowVersion: "",
    settingsLayoutVersion: SETTINGS_LAYOUT_VERSION,
  },
  resources: {
    models: [],
    loras: [],
  },
};

const els = {
  body: document.body,
  libraryCount: document.querySelector("#library-count"),
  categoryList: document.querySelector("#category-list"),
  subcategoryTabs: document.querySelector("#subcategory-tabs"),
  keywordGrid: document.querySelector("#keyword-grid"),
  customPrompt: document.querySelector("#custom-prompt"),
  defaultPositivePrompt: document.querySelector("#default-positive-prompt"),
  defaultNegativePrompt: document.querySelector("#default-negative-prompt"),
  clearSelected: document.querySelector("#clear-selected"),
  copySelected: document.querySelector("#copy-selected"),
  generateImage: document.querySelector("#generate-image"),
  stopAll: document.querySelector("#stop-all"),
  clearQueue: document.querySelector("#clear-queue"),
  queueGroup: document.querySelector(".queue-group"),
  queueProgress: document.querySelector("#queue-progress"),
  queuePending: document.querySelector("#queue-pending"),
  increaseBatch: document.querySelector("#increase-batch"),
  decreaseBatch: document.querySelector("#decrease-batch"),
  historyCount: document.querySelector("#history-count"),
  historyEmpty: document.querySelector("#history-empty"),
  historyGrid: document.querySelector("#history-grid"),
  appShell: document.querySelector(".app-shell"),
  comfyUrl: document.querySelector("#comfy-url"),
  positiveNodeId: document.querySelector("#positive-node-id"),
  negativeNodeId: document.querySelector("#negative-node-id"),
  modelNodeId: document.querySelector("#model-node-id"),
  sizeNodeId: document.querySelector("#size-node-id"),
  modelSelect: document.querySelector("#model-select"),
  lora1NodeId: document.querySelector("#lora-1-node-id"),
  lora1Select: document.querySelector("#lora-1-select"),
  lora1Strength: document.querySelector("#lora-1-strength"),
  lora2NodeId: document.querySelector("#lora-2-node-id"),
  lora2Select: document.querySelector("#lora-2-select"),
  lora2Strength: document.querySelector("#lora-2-strength"),
  sizePresetGrid: document.querySelector("#size-preset-grid"),
  imageWidth: document.querySelector("#image-width"),
  imageHeight: document.querySelector("#image-height"),
  refreshComfyResources: document.querySelector("#refresh-comfy-resources"),
  workflowJson: document.querySelector("#workflow-json"),
  testComfy: document.querySelector("#test-comfy"),
  loadDefaultWorkflow: document.querySelector("#load-default-workflow"),
  comfyStatus: document.querySelector("#comfy-status"),
  imageDialog: document.querySelector("#image-dialog"),
  imageDialogMedia: document.querySelector(".image-dialog-media"),
  imageDialogImg: document.querySelector("#image-dialog-img"),
  imageDialogTitle: document.querySelector("#image-dialog-title"),
  closeImageDialog: document.querySelector("#close-image-dialog"),
  saveImageLink: document.querySelector("#save-image-link"),
  imageDialogTime: document.querySelector("#image-dialog-time"),
  imageDialogPromptId: document.querySelector("#image-dialog-prompt-id"),
  imageDialogPositive: document.querySelector("#image-dialog-positive"),
  imageDialogNegative: document.querySelector("#image-dialog-negative"),
};

const allItems = flattenData(data);
const totalCount = allItems.length;

state.subcategory = Object.keys(data[state.category])[0];
els.libraryCount.textContent = `${totalCount} 个关键词 · 已选 0`;
loadSettings();
loadDefaultPrompts();

render();
bindEvents();
loadDefaultWorkflow();

function flattenData(source) {
  const items = [];
  for (const [category, groups] of Object.entries(source)) {
    for (const [subcategory, tertiaryGroups] of Object.entries(groups)) {
      for (const [tertiary, prompts] of Object.entries(tertiaryGroups)) {
        for (const item of prompts) items.push({ ...normalizePromptItem(item), category, subcategory, tertiary });
      }
    }
  }
  return items;
}

function normalizePromptItem(item) {
  if (typeof item === "string") return { prompt: item, zh: "" };
  return {
    prompt: item.prompt,
    zh: item.zh || "",
  };
}

function bindEvents() {
  document.querySelectorAll("[data-keyword-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.keywordTab = button.dataset.keywordTab;
      renderKeywordTabs();
    });
  });

  document.querySelectorAll("[data-settings-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.settingsTab = button.dataset.settingsTab;
      renderSettingsTabs();
    });
  });

  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => {
      showPage(button.dataset.page);
    });
  });

  els.clearSelected.addEventListener("click", () => {
    state.selected.clear();
    state.customPrompt = "";
    els.customPrompt.value = "";
    renderCategories();
    renderKeywords();
    updateCount();
  });

  els.copySelected.addEventListener("click", async () => {
    await copyText(composeSelectedAndCustomPrompt(), els.copySelected);
  });

  els.generateImage.addEventListener("click", async () => {
    await runGenerationQueue();
  });
  els.increaseBatch.addEventListener("click", () => updateBatchSize(1));
  els.decreaseBatch.addEventListener("click", () => updateBatchSize(-1));
  els.stopAll.addEventListener("click", stopAllGenerations);
  els.clearQueue.addEventListener("click", clearComfyQueue);

  document.querySelectorAll("[data-copy-default]").forEach((button) => {
    button.addEventListener("click", async () => {
      const mode = button.dataset.copyDefault;
      const text = mode === "positive" ? els.defaultPositivePrompt.value : els.defaultNegativePrompt.value;
      await copyText(text, button);
    });
  });

  els.defaultPositivePrompt.addEventListener("input", () => {
    state.defaults.positive = els.defaultPositivePrompt.value;
    saveDefaultPrompts();
  });
  els.defaultNegativePrompt.addEventListener("input", () => {
    state.defaults.negative = els.defaultNegativePrompt.value;
    saveDefaultPrompts();
  });
  els.customPrompt.addEventListener("input", () => {
    state.customPrompt = els.customPrompt.value;
  });

  els.comfyUrl.addEventListener("input", () => updateSetting("comfyUrl", els.comfyUrl.value));
  els.positiveNodeId.addEventListener("input", () => updateSetting("positiveNodeId", els.positiveNodeId.value));
  els.negativeNodeId.addEventListener("input", () => updateSetting("negativeNodeId", els.negativeNodeId.value));
  els.modelNodeId.addEventListener("input", () => updateSetting("modelNodeId", els.modelNodeId.value));
  els.sizeNodeId.addEventListener("input", () => updateSetting("sizeNodeId", els.sizeNodeId.value));
  els.modelSelect.addEventListener("change", () => updateSetting("modelName", els.modelSelect.value));
  els.lora1NodeId.addEventListener("input", () => updateSetting("lora1NodeId", els.lora1NodeId.value));
  els.lora1Select.addEventListener("change", () => updateSetting("lora1Name", els.lora1Select.value));
  els.lora1Strength.addEventListener("input", () => updateSetting("lora1Strength", els.lora1Strength.value));
  els.lora2NodeId.addEventListener("input", () => updateSetting("lora2NodeId", els.lora2NodeId.value));
  els.lora2Select.addEventListener("change", () => updateSetting("lora2Name", els.lora2Select.value));
  els.lora2Strength.addEventListener("input", () => updateSetting("lora2Strength", els.lora2Strength.value));
  els.imageWidth.addEventListener("input", () => updateCustomSize("imageWidth", els.imageWidth.value));
  els.imageHeight.addEventListener("input", () => updateCustomSize("imageHeight", els.imageHeight.value));
  els.workflowJson.addEventListener("input", () => updateSetting("workflowJson", els.workflowJson.value));
  els.testComfy.addEventListener("click", testComfyConnection);
  els.loadDefaultWorkflow.addEventListener("click", () => loadDefaultWorkflow({ force: true }));
  els.refreshComfyResources.addEventListener("click", refreshComfyResources);
  els.closeImageDialog.addEventListener("click", () => els.imageDialog.close());
  els.imageDialog.addEventListener("click", (event) => {
    if (event.target === els.imageDialog) els.imageDialog.close();
  });
  els.imageDialogMedia.addEventListener("touchstart", handleImageTouchStart, { passive: false });
  els.imageDialogMedia.addEventListener("touchmove", handleImageTouchMove, { passive: false });
  els.imageDialogMedia.addEventListener("touchend", handleImageTouchEnd);
  els.imageDialogMedia.addEventListener("touchcancel", handleImageTouchEnd);
}

function render() {
  els.body.dataset.page = state.page;
  syncSettingsFields();
  renderKeywordTabs();
  renderSettingsTabs();
  renderCategories();
  renderSubcategories();
  renderKeywords();
  renderSizePresets();
  renderGenerationControls();
  renderHistory();
}

function renderKeywordTabs() {
  document.querySelectorAll("[data-keyword-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.keywordTab === state.keywordTab);
  });
  document.querySelectorAll(".keyword-tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `keyword-tab-${state.keywordTab}`);
  });
}

function renderSettingsTabs() {
  document.querySelectorAll("[data-settings-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsTab === state.settingsTab);
  });
  document.querySelectorAll(".settings-tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `settings-tab-${state.settingsTab}`);
  });
}

function showPage(pageName) {
  state.page = pageName;
  els.body.dataset.page = state.page;
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === state.page);
  });
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("page-active", page.id === `page-${state.page}`);
  });
}

function renderCategories() {
  els.categoryList.innerHTML = "";
  for (const category of Object.keys(data)) {
    const selectedItems = getSelectedItemsByCategory(category);
    const group = document.createElement("section");
    group.className = "category-group";

    const row = document.createElement("div");
    row.className = "category-row";
    row.classList.toggle("active", category === state.category);

    const button = document.createElement("button");
    button.className = "category-button";
    button.type = "button";
    button.innerHTML = `<span>${category}</span><span class="category-count">${selectedItems.length}</span>`;
    button.addEventListener("click", () => {
      state.category = category;
      state.subcategory = Object.keys(data[category])[0];
      renderCategories();
      renderSubcategories();
      renderKeywords();
    });

    const toggle = document.createElement("button");
    toggle.className = "category-toggle";
    toggle.type = "button";
    toggle.textContent = state.collapsedCategories.has(category) ? "▸" : "▾";
    toggle.addEventListener("click", () => {
      if (state.collapsedCategories.has(category)) state.collapsedCategories.delete(category);
      else state.collapsedCategories.add(category);
      renderCategories();
    });

    row.append(button, toggle);
    group.append(row);

    if (selectedItems.length && !state.collapsedCategories.has(category)) {
      const pills = document.createElement("div");
      pills.className = "category-selected-pills";
      for (const item of selectedItems) {
        const pill = document.createElement("button");
        pill.className = "category-pill";
        pill.type = "button";
        pill.innerHTML = `<span>${escapeHtml(item.zh)}</span><small>${escapeHtml(item.prompt)}</small><b aria-hidden="true">×</b>`;
        pill.addEventListener("click", () => {
          state.selected.delete(item.prompt);
          renderCategories();
          renderKeywords();
          updateCount();
        });
        pills.append(pill);
      }
      group.append(pills);
    }

    els.categoryList.append(group);
  }
}

function renderSubcategories() {
  els.subcategoryTabs.innerHTML = "";
  for (const subcategory of Object.keys(data[state.category])) {
    const count = countPromptsInSubcategory(state.category, subcategory);
    const button = document.createElement("button");
    button.className = "subcategory-button";
    button.classList.toggle("active", subcategory === state.subcategory);
    button.type = "button";
    button.textContent = `${subcategory} ${count}`;
    button.addEventListener("click", () => {
      state.subcategory = subcategory;
      renderSubcategories();
      renderKeywords();
    });
    els.subcategoryTabs.append(button);
  }
}

function renderKeywords() {
  const groups = data[state.category][state.subcategory];

  els.keywordGrid.innerHTML = "";
  if (!countPromptsInSubcategory(state.category, state.subcategory)) {
    const empty = document.createElement("div");
    empty.className = "keyword-card";
    empty.innerHTML = "<strong>没有找到关键词</strong><span>换一个搜索词试试</span>";
    els.keywordGrid.append(empty);
    return;
  }

  for (const [tertiary, prompts] of Object.entries(groups)) {
    if (!prompts.length) continue;
    const heading = document.createElement("div");
    heading.className = "keyword-section-heading";
    heading.innerHTML = `<span>${escapeHtml(tertiary)}</span><small>${prompts.length}</small>`;
    els.keywordGrid.append(heading);

    for (const rawItem of prompts) {
      const item = normalizePromptItem(rawItem);
      const button = document.createElement("button");
      const isSelected = state.selected.has(item.prompt);
      button.className = "keyword-card";
      button.classList.toggle("active-positive", isSelected);
      button.type = "button";
      button.innerHTML = `<strong>${escapeHtml(item.prompt)}</strong>${item.zh ? `<span>${escapeHtml(item.zh)}</span>` : ""}`;
      button.addEventListener("click", () => togglePrompt(item.prompt));
      els.keywordGrid.append(button);
    }
  }
}

function togglePrompt(prompt) {
  if (state.selected.has(prompt)) {
    state.selected.delete(prompt);
  } else {
    state.selected.add(prompt);
  }

  renderCategories();
  renderKeywords();
  updateCount();
}

function updateCount() {
  els.libraryCount.textContent = `${totalCount} 个关键词 · 已选 ${state.selected.size}`;
}

async function copyText(text, button) {
  const original = button.textContent;
  const value = String(text || "");
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      copyTextFallback(value);
    }
  } catch {
    copyTextFallback(value);
  }
  button.textContent = value ? "已复制" : "没有关键词";
  window.setTimeout(() => {
    button.textContent = original;
  }, 900);
}

function copyTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.append(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("复制失败");
}

function composeGenerationRequest() {
  const selectedPrompt = Array.from(state.selected);
  const customPrompt = parsePromptText(state.customPrompt);
  const defaultPositive = parsePromptText(state.defaults.positive);
  const defaultNegative = parsePromptText(state.defaults.negative);
  const positive = uniquePrompts([...defaultPositive, ...selectedPrompt, ...customPrompt]);

  return {
    positive,
    negative: defaultNegative,
    positivePrompt: positive.join(", "),
    negativePrompt: defaultNegative.join(", "),
  };
}

function composeSelectedAndCustomPrompt() {
  const selectedPrompt = Array.from(state.selected);
  const customPrompt = parsePromptText(state.customPrompt);
  return uniquePrompts([...selectedPrompt, ...customPrompt]).join(", ");
}

async function testComfyConnection() {
  setComfyStatus("正在连接...", "pending");
  try {
    const response = await fetch(`${normalizeComfyUrl(state.settings.comfyUrl)}/system_stats`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    setComfyStatus("连接成功", "ok");
  } catch (error) {
    setComfyStatus(`连接失败：${error.message}`, "error");
  }
}

function prepareWorkflow(generation) {
  const workflow = toApiWorkflow(parseWorkflow(state.settings.workflowJson));
  applyPromptToWorkflow(workflow, state.settings.positiveNodeId, generation.positivePrompt, "正面");
  applyPromptToWorkflow(workflow, state.settings.negativeNodeId, generation.negativePrompt, "负面");
  applyModelToWorkflow(workflow);
  applyLorasToWorkflow(workflow);
  applyImageSizeToWorkflow(workflow);
  randomizeSamplerSeeds(workflow);
  return workflow;
}

async function runGenerationQueue() {
  if (state.generation.active) return;
  const generation = composeGenerationRequest();
  try {
    prepareWorkflow(generation);
  } catch (error) {
    setComfyStatus(error.message, "error");
    pulseButton(els.generateImage, "配置缺失");
    return;
  }

  state.generation = {
    ...state.generation,
    total: state.generation.batchSize,
    completed: 0,
    pending: state.generation.batchSize,
    currentProgress: 0,
    active: true,
    stopped: false,
    interrupted: false,
  };
  renderGenerationControls();

  for (let index = 0; index < state.generation.total; index += 1) {
    if (state.generation.stopped) break;
    await queueSingleComfyPrompt(generation, index + 1);
  }

  state.generation.active = false;
  state.generation.pending = Math.max(0, state.generation.total - state.generation.completed);
  renderGenerationControls();
  if (state.generation.stopped) setComfyStatus("已停止生成队列", "error");
  else if (state.generation.completed) setComfyStatus(`队列完成：${state.generation.completed} 张图片`, "ok");
}

async function queueSingleComfyPrompt(generation, index) {
  const payload = {
    prompt: prepareWorkflow(generation),
    client_id: `bara-prompt-generator-${Date.now()}-${index}`,
  };

  setComfyStatus(`正在提交 ${index}/${state.generation.total}...`, "pending");
  state.generation.currentProgress = 0;
  renderGenerationControls();
  try {
    const response = await fetch(`${normalizeComfyUrl(state.settings.comfyUrl)}/prompt`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error?.message || `HTTP ${response.status}`);
    if (!result.prompt_id) throw new Error("ComfyUI 没有返回 prompt_id");
    setComfyStatus(`生成中 ${index}/${state.generation.total}：${result.prompt_id}`, "pending");
    const images = await waitForComfyImages(result.prompt_id);
    if (state.generation.interrupted) return;
    if (!images.length) throw new Error(`任务完成，但没有找到图片：${result.prompt_id}`);
    addHistoryItems(images, {
      promptId: result.prompt_id,
      positivePrompt: generation.positivePrompt,
      negativePrompt: generation.negativePrompt,
    });
    state.generation.completed += 1;
    state.generation.currentProgress = 100;
    state.generation.pending = Math.max(0, state.generation.total - state.generation.completed);
    renderGenerationControls();
    pulseButton(els.generateImage, "完成");
  } catch (error) {
    state.generation.stopped = true;
    setComfyStatus(`提交失败：${error.message}`, "error");
    pulseButton(els.generateImage, "失败");
  }
}

async function waitForComfyImages(promptId) {
  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (state.generation.interrupted) return [];
    state.generation.currentProgress = Math.min(99, Math.round((attempt / 120) * 100));
    renderGenerationControls();
    const history = await fetchComfyHistory(promptId);
    const images = extractHistoryImages(history, promptId);
    if (images.length) {
      state.generation.currentProgress = 100;
      renderGenerationControls();
      return images;
    }
    await sleep(1500);
  }
  return [];
}

async function fetchComfyHistory(promptId) {
  const response = await fetch(`${normalizeComfyUrl(state.settings.comfyUrl)}/history/${encodeURIComponent(promptId)}`);
  if (!response.ok) throw new Error(`读取结果失败：HTTP ${response.status}`);
  return response.json();
}

function extractHistoryImages(history, promptId) {
  const item = history?.[promptId] || Object.values(history || {})[0];
  const outputs = item?.outputs || {};
  const images = [];
  for (const output of Object.values(outputs)) {
    for (const image of output.images || []) {
      images.push({
        filename: image.filename,
        subfolder: image.subfolder || "",
        type: image.type || "output",
      });
    }
  }
  return images.filter((image) => image.filename);
}

function addHistoryItems(images, meta) {
  const createdAt = new Date();
  const entries = images.map((image) => ({
    id: `${meta.promptId}-${image.filename}-${Math.random().toString(36).slice(2)}`,
    promptId: meta.promptId,
    positivePrompt: meta.positivePrompt,
    negativePrompt: meta.negativePrompt,
    imageUrl: buildComfyImageUrl(image),
    filename: image.filename,
    createdAt,
  }));
  state.history = [...entries, ...state.history];
  renderHistory();
}

function buildComfyImageUrl(image) {
  const params = new URLSearchParams({
    filename: image.filename,
    subfolder: image.subfolder,
    type: image.type,
  });
  return `${normalizeComfyUrl(state.settings.comfyUrl)}/view?${params.toString()}`;
}

function renderHistory() {
  els.historyCount.textContent = state.history.length ? `${state.history.length} 张图片` : "暂无图片";
  els.historyEmpty.hidden = Boolean(state.history.length);
  els.historyGrid.innerHTML = "";
  for (const item of state.history) {
    const card = document.createElement("button");
    card.className = "history-card";
    card.type = "button";
    card.addEventListener("click", () => openImageDetails(item));

    const image = document.createElement("img");
    image.src = item.imageUrl;
    image.alt = item.filename;
    image.loading = "lazy";

    card.append(image);
    els.historyGrid.append(card);
  }
}

function renderGenerationControls() {
  els.generateImage.textContent = `生成${state.generation.batchSize}`;
  const progress = state.generation.active ? state.generation.currentProgress : 0;
  els.queueProgress.style.setProperty("--progress", progress);
  els.queuePending.textContent = `待生成 ${state.generation.pending}`;
  els.queueGroup.classList.toggle("queue-active", state.generation.active);
  els.stopAll.disabled = !state.generation.active;
  els.clearQueue.disabled = !state.generation.active;
  els.generateImage.disabled = state.generation.active;
}

function updateBatchSize(delta) {
  if (state.generation.active) return;
  state.generation.batchSize = Math.min(20, Math.max(1, state.generation.batchSize + delta));
  renderGenerationControls();
}

async function stopAllGenerations() {
  state.generation.stopped = true;
  state.generation.interrupted = true;
  state.generation.pending = 0;
  renderGenerationControls();
  try {
    await fetch(`${normalizeComfyUrl(state.settings.comfyUrl)}/interrupt`, { method: "POST" });
  } catch {
    // The local queue still stops even if ComfyUI ignores interrupt.
  }
}

async function clearComfyQueue() {
  state.generation.stopped = true;
  state.generation.pending = state.generation.active ? 1 : 0;
  renderGenerationControls();
  setComfyStatus("已停止后续生成，当前图片会继续等待完成", "ok");
}

function openImageDetails(item) {
  els.imageDialogImg.src = item.imageUrl;
  els.imageDialogImg.alt = item.filename;
  resetImageZoom();
  els.imageDialogTitle.textContent = item.filename;
  els.saveImageLink.href = item.imageUrl;
  els.saveImageLink.download = item.filename;
  els.imageDialogTime.textContent = formatHistoryTime(item.createdAt);
  els.imageDialogPromptId.textContent = item.promptId;
  els.imageDialogPositive.textContent = item.positivePrompt || "无";
  els.imageDialogNegative.textContent = item.negativePrompt || "无";
  els.imageDialog.showModal();
}

function resetImageZoom() {
  state.imageZoom.scale = 1;
  state.imageZoom.startScale = 1;
  state.imageZoom.startDistance = 0;
  applyImageZoom();
}

function handleImageTouchStart(event) {
  if (event.touches.length !== 2) return;
  event.preventDefault();
  state.imageZoom.startDistance = getTouchDistance(event.touches);
  state.imageZoom.startScale = state.imageZoom.scale;
}

function handleImageTouchMove(event) {
  if (event.touches.length !== 2 || !state.imageZoom.startDistance) return;
  event.preventDefault();
  const distance = getTouchDistance(event.touches);
  const nextScale = state.imageZoom.startScale * (distance / state.imageZoom.startDistance);
  state.imageZoom.scale = Math.min(5, Math.max(1, nextScale));
  applyImageZoom();
}

function handleImageTouchEnd(event) {
  if (event.touches.length >= 2) return;
  state.imageZoom.startDistance = 0;
  state.imageZoom.startScale = state.imageZoom.scale;
}

function applyImageZoom() {
  els.imageDialogImg.style.transform = `scale(${state.imageZoom.scale})`;
}

function getTouchDistance(touches) {
  const [first, second] = touches;
  return Math.hypot(first.clientX - second.clientX, first.clientY - second.clientY);
}

function formatHistoryTime(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function parseWorkflow(text) {
  if (!text.trim()) throw new Error("请先在设置页粘贴 Workflow API JSON");
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Workflow JSON 解析失败，请检查格式");
  }
}

function applyPromptToWorkflow(workflow, nodeId, text, label) {
  const id = String(nodeId || "").trim();
  if (!id) throw new Error(`请填写${label}提示词节点 ID`);
  if (!workflow[id]) throw new Error(`Workflow 中找不到${label}节点 ${id}，当前节点有：${listWorkflowNodeIds(workflow)}`);
  if (!workflow[id].inputs) workflow[id].inputs = {};
  workflow[id].inputs.text = text;
}

function toApiWorkflow(workflow) {
  if (!Array.isArray(workflow.nodes)) return workflow;

  const links = new Map((workflow.links || []).map((link) => [link[0], link]));
  const api = {};

  for (const node of workflow.nodes) {
    const id = String(node.id);
    const inputs = {};

    for (const input of node.inputs || []) {
      if (input.link == null) continue;
      const link = links.get(input.link);
      if (!link) continue;
      inputs[input.name] = [String(link[1]), link[2]];
    }

    Object.assign(inputs, getWidgetInputs(node));

    api[id] = {
      inputs,
      class_type: node.type,
      _meta: {
        title: node.properties?.["Node name for S&R"] || node.type,
      },
    };
  }

  return api;
}

function getWidgetInputs(node) {
  const values = node.widgets_values || [];

  switch (node.type) {
    case "CLIPTextEncode":
      return { text: values[0] || "" };
    case "CheckpointLoaderSimple":
      return { ckpt_name: values[0] || "" };
    case "EmptyLatentImage":
      return {
        width: values[0] ?? 512,
        height: values[1] ?? 512,
        batch_size: values[2] ?? 1,
      };
    case "KSampler":
      return {
        seed: values[0] ?? 0,
        control_after_generate: values[1] || "randomize",
        steps: values[2] ?? 20,
        cfg: values[3] ?? 8,
        sampler_name: values[4] || "euler",
        scheduler: values[5] || "normal",
        denoise: values[6] ?? 1,
      };
    case "SaveImage":
      return { filename_prefix: values[0] || "ComfyUI" };
    default:
      return {};
  }
}

function normalizeComfyUrl(url) {
  const value = String(url || "").trim().replace(/\/+$/, "");
  if (!value) return "http://192.168.101.43:8000";
  if (/^https?:\/\//i.test(value)) return value;
  return `http://${value}`;
}

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    state.settings = { ...state.settings, ...saved };
    migrateLegacyLoraSettings(saved);
    migrateSettingsLayoutDefaults(saved);
  } catch {
    state.settings = { ...state.settings };
  }
}

function loadDefaultPrompts() {
  try {
    const saved = JSON.parse(localStorage.getItem(DEFAULTS_STORAGE_KEY) || "{}");
    state.defaults = {
      positive: typeof saved.positive === "string" ? saved.positive : DEFAULT_POSITIVE_PROMPT,
      negative: typeof saved.negative === "string" ? saved.negative : DEFAULT_NEGATIVE_PROMPT,
    };
  } catch {
    state.defaults = {
      positive: DEFAULT_POSITIVE_PROMPT,
      negative: DEFAULT_NEGATIVE_PROMPT,
    };
  }
}

function saveDefaultPrompts() {
  localStorage.setItem(DEFAULTS_STORAGE_KEY, JSON.stringify(state.defaults));
}

function migrateSettingsLayoutDefaults(saved) {
  if (saved?.settingsLayoutVersion === SETTINGS_LAYOUT_VERSION) return;
  state.settings.modelName = state.settings.modelName || "waiIllustriousSDXL_v160.safetensors";
  state.settings.lora1Name = "flat_style.safetensors";
  state.settings.lora1Strength = "0.3";
  state.settings.lora2Name = "semi_realistic_style.safetensors";
  state.settings.lora2Strength = "0.7";
  state.settings.sizeNodeId = state.settings.sizeNodeId || "5";
  state.settings.sizePreset = "1024x1024";
  state.settings.imageWidth = "1024";
  state.settings.imageHeight = "1024";
  state.settings.settingsLayoutVersion = SETTINGS_LAYOUT_VERSION;
  saveSettings();
}

async function loadDefaultWorkflow(options = {}) {
  const force = Boolean(options.force);
  const shouldUseCachedWorkflow = state.settings.workflowJson.trim() && !force && state.settings.workflowVersion === DEFAULT_WORKFLOW_VERSION;
  if (shouldUseCachedWorkflow) {
    setComfyStatus(
      `已有 workflow：正面节点 ${state.settings.positiveNodeId || "未填"}，负面节点 ${state.settings.negativeNodeId || "未填"}`,
      "ok",
    );
    return;
  }

  setComfyStatus("正在载入默认 workflow...", "pending");
  try {
    const response = await fetch("./data/default-workflow.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const workflow = await response.json();
    state.settings.workflowJson = JSON.stringify(workflow, null, 2);
    state.settings.positiveNodeId = "6";
    state.settings.negativeNodeId = "7";
    state.settings.modelNodeId = "4";
    state.settings.sizeNodeId = "5";
    state.settings.modelName = state.settings.modelName || "waiIllustriousSDXL_v160.safetensors";
    state.settings.lora1NodeId = "11";
    state.settings.lora2NodeId = "12";
    state.settings.lora1Name = state.settings.lora1Name || "flat_style.safetensors";
    state.settings.lora2Name = state.settings.lora2Name || "semi_realistic_style.safetensors";
    state.settings.lora1Strength = state.settings.lora1Strength || "0.3";
    state.settings.lora2Strength = state.settings.lora2Strength || "0.7";
    state.settings.sizePreset = state.settings.sizePreset || "1024x1024";
    state.settings.imageWidth = state.settings.imageWidth || "1024";
    state.settings.imageHeight = state.settings.imageHeight || "1024";
    state.settings.workflowVersion = DEFAULT_WORKFLOW_VERSION;
    state.settings.settingsLayoutVersion = SETTINGS_LAYOUT_VERSION;
    saveSettings();
    syncSettingsFields();
    setComfyStatus("已载入默认 workflow：正面 6，负面 7，LoRA 11/12", "ok");
  } catch (error) {
    setComfyStatus(`默认 workflow 载入失败：${error.message}`, "error");
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.settings));
}

function syncSettingsFields() {
  els.defaultPositivePrompt.value = state.defaults.positive;
  els.defaultNegativePrompt.value = state.defaults.negative;
  els.comfyUrl.value = state.settings.comfyUrl;
  els.positiveNodeId.value = state.settings.positiveNodeId;
  els.negativeNodeId.value = state.settings.negativeNodeId;
  els.modelNodeId.value = state.settings.modelNodeId;
  els.sizeNodeId.value = state.settings.sizeNodeId;
  els.lora1NodeId.value = state.settings.lora1NodeId;
  els.lora1Strength.value = state.settings.lora1Strength;
  els.lora2NodeId.value = state.settings.lora2NodeId;
  els.lora2Strength.value = state.settings.lora2Strength;
  els.imageWidth.value = state.settings.imageWidth;
  els.imageHeight.value = state.settings.imageHeight;
  els.workflowJson.value = state.settings.workflowJson;
  renderSelectOptions(els.modelSelect, state.resources.models, state.settings.modelName, "默认 wai", "wai");
  renderSelectOptions(els.lora1Select, state.resources.loras, state.settings.lora1Name, "默认 flat_style", "flat_style");
  renderSelectOptions(els.lora2Select, state.resources.loras, state.settings.lora2Name, "默认 semi", "semi_realistic");
}

function updateSetting(key, value) {
  state.settings[key] = value;
  saveSettings();
}

function setComfyStatus(message, tone) {
  els.comfyStatus.textContent = message;
  els.comfyStatus.dataset.tone = tone;
}

function pulseButton(button, text) {
  const original = button.textContent;
  button.textContent = text;
  window.setTimeout(() => {
    button.textContent = original;
  }, 900);
}

async function refreshComfyResources() {
  setComfyStatus("正在读取模型和 LoRA 列表...", "pending");
  try {
    const [checkpointInfo, loraInfo] = await Promise.all([
      fetchObjectInfo("CheckpointLoaderSimple"),
      fetchObjectInfo("LoraLoaderModelOnly").catch(() => fetchObjectInfo("LoraLoader")),
    ]);

    state.resources.models = extractInputOptions(checkpointInfo, "ckpt_name");
    state.resources.loras = extractInputOptions(loraInfo, "lora_name");
    syncSettingsFields();
    setComfyStatus(`已读取：模型 ${state.resources.models.length} 个，LoRA ${state.resources.loras.length} 个`, "ok");
  } catch (error) {
    setComfyStatus(`资源读取失败：${error.message}`, "error");
  }
}

async function fetchObjectInfo(classType) {
  const response = await fetch(`${normalizeComfyUrl(state.settings.comfyUrl)}/object_info/${classType}`);
  if (!response.ok) throw new Error(`${classType} HTTP ${response.status}`);
  return response.json();
}

function extractInputOptions(info, inputName) {
  const classInfo = Object.values(info || {})[0];
  const input = classInfo?.input?.required?.[inputName] || classInfo?.input?.optional?.[inputName];
  return Array.isArray(input?.[0]) ? input[0] : [];
}

function renderSelectOptions(select, options, selected, placeholder, preferredText = "") {
  const preferred = findPreferredOption(options, selected || preferredText);
  const current = options.includes(selected) ? selected : preferred;
  select.innerHTML = "";
  select.append(new Option(placeholder, ""));
  for (const option of options) select.append(new Option(option, option));
  select.value = current || "";
  if (current && current !== selected) {
    if (select === els.modelSelect) state.settings.modelName = current;
    if (select === els.lora1Select) state.settings.lora1Name = current;
    if (select === els.lora2Select) state.settings.lora2Name = current;
    saveSettings();
  }
}

function renderSizePresets() {
  els.sizePresetGrid.innerHTML = "";
  for (const preset of SIZE_PRESETS) {
    const button = document.createElement("button");
    button.className = "size-preset-button";
    button.classList.toggle("active", state.settings.sizePreset === preset.value);
    button.type = "button";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(state.settings.sizePreset === preset.value));
    button.addEventListener("click", () => updateSizePreset(preset.value));

    const preview = document.createElement("span");
    preview.className = "size-preview";
    preview.style.setProperty("--ratio-width", String(preset.width));
    preview.style.setProperty("--ratio-height", String(preset.height));

    const label = document.createElement("span");
    label.className = "size-label";
    label.textContent = preset.label;

    button.append(preview, label);
    els.sizePresetGrid.append(button);
  }
}

function findPreferredOption(options, value) {
  const target = String(value || "").toLowerCase();
  if (!target) return "";
  return options.find((option) => option.toLowerCase() === target) || options.find((option) => option.toLowerCase().includes(target)) || "";
}

function applyModelToWorkflow(workflow) {
  const id = String(state.settings.modelNodeId || "").trim();
  const name = String(state.settings.modelName || "").trim();
  if (!id || !name) return;
  if (!workflow[id]) throw new Error(`Workflow 中找不到模型节点 ${id}，当前节点有：${listWorkflowNodeIds(workflow)}`);
  if (!workflow[id].inputs) workflow[id].inputs = {};
  workflow[id].inputs.ckpt_name = name;
}

function applyLorasToWorkflow(workflow) {
  applySingleLoraToWorkflow(workflow, {
    id: state.settings.lora1NodeId,
    name: state.settings.lora1Name,
    strength: state.settings.lora1Strength,
    label: "LoRA 1",
  });
  applySingleLoraToWorkflow(workflow, {
    id: state.settings.lora2NodeId,
    name: state.settings.lora2Name,
    strength: state.settings.lora2Strength,
    label: "LoRA 2",
  });
}

function applyImageSizeToWorkflow(workflow) {
  const id = String(state.settings.sizeNodeId || "").trim();
  const width = Number(state.settings.imageWidth || 1024);
  const height = Number(state.settings.imageHeight || 1024);
  if (!id) throw new Error("请填写尺寸节点 ID");
  if (!workflow[id]) throw new Error(`Workflow 中找不到尺寸节点 ${id}，当前节点有：${listWorkflowNodeIds(workflow)}`);
  if (!workflow[id].inputs) workflow[id].inputs = {};
  workflow[id].inputs.width = clampImageSide(width);
  workflow[id].inputs.height = clampImageSide(height);
}

function randomizeSamplerSeeds(workflow) {
  for (const node of Object.values(workflow || {})) {
    if (node?.class_type !== "KSampler") continue;
    if (!node.inputs) node.inputs = {};
    node.inputs.seed = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }
}

function clampImageSide(value) {
  if (!Number.isFinite(value)) return 1024;
  return Math.min(4096, Math.max(64, Math.round(value / 8) * 8));
}

function updateSizePreset(value) {
  state.settings.sizePreset = value;
  if (value !== "custom") {
    const [width, height] = value.split("x");
    state.settings.imageWidth = width || "1024";
    state.settings.imageHeight = height || "1024";
  }
  saveSettings();
  syncSettingsFields();
  renderSizePresets();
}

function updateCustomSize(key, value) {
  state.settings[key] = value;
  state.settings.sizePreset = "custom";
  saveSettings();
  syncSettingsFields();
  renderSizePresets();
}

function applySingleLoraToWorkflow(workflow, config) {
  const id = String(config.id || "").trim();
  const name = String(config.name || "").trim();
  if (!name) return;
  if (!id) throw new Error(`请选择 ${config.label} 后，需要填写节点 ID`);
  if (!workflow[id]) throw new Error(`Workflow 中找不到 ${config.label} 节点 ${id}，当前节点有：${listWorkflowNodeIds(workflow)}`);
  const strength = Number(config.strength || 1);
  const safeStrength = Number.isFinite(strength) ? strength : 1;
  if (!workflow[id].inputs) workflow[id].inputs = {};
  workflow[id].inputs.lora_name = name;
  workflow[id].inputs.strength_model = safeStrength;
  if ("strength_clip" in workflow[id].inputs) workflow[id].inputs.strength_clip = safeStrength;
}

function listWorkflowNodeIds(workflow) {
  return Object.keys(workflow || {}).join(", ") || "无";
}

function migrateLegacyLoraSettings(saved) {
  if (!saved || typeof saved !== "object") return;
  const legacyIds = String(saved.loraNodeIds || "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
  if (!state.settings.lora1NodeId && legacyIds[0]) state.settings.lora1NodeId = legacyIds[0];
  if (!state.settings.lora2NodeId && legacyIds[1]) state.settings.lora2NodeId = legacyIds[1];
  if (!state.settings.lora1Name && saved.loraName) state.settings.lora1Name = saved.loraName;
  if (!state.settings.lora2Name && saved.loraName) state.settings.lora2Name = saved.loraName;
  if (!state.settings.lora1Strength && saved.loraStrength) state.settings.lora1Strength = saved.loraStrength;
  if (!state.settings.lora2Strength && saved.loraStrength) state.settings.lora2Strength = saved.loraStrength;
}

function findPromptItem(prompt) {
  return allItems.find((item) => item.prompt === prompt);
}

function getSelectedItemsByCategory(category) {
  return allItems.filter((item) => item.category === category && state.selected.has(item.prompt));
}

function countPromptsInSubcategory(category, subcategory) {
  return Object.values(data[category][subcategory]).reduce((sum, prompts) => sum + prompts.length, 0);
}

function parsePromptText(text) {
  return String(text || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function uniquePrompts(items) {
  return Array.from(new Set(items));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
