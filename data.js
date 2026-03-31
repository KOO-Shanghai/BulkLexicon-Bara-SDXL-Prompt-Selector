const data = {
  "角色与体型特征": {
    "身份标签": [
      {
        "keyword": "1boy",
        "comment": "单人(男)",
        "remark": "SDXL识别男性的核心基底Tag"
      },
      {
        "keyword": "2boys",
        "comment": "双人(男)",
        "remark": "双男主互动也是核心基底Tag"
      },
      {
        "keyword": "multiple boys",
        "comment": "两男以上",
        "remark": "群像触发次"
      },
      {
        "keyword": "mature male",
        "comment": "成熟男性",
        "remark": "强化大叔或熟男属性"
      },
      {
        "keyword": "bara",
        "comment": "壮熊/男同",
        "remark": "整体趋向于粗犷男同的画风风格词"
      }
    ],
    "体型与肌肉": [
      {
        "keyword": "muscular",
        "comment": "肌肉发达",
        "remark": "常规肌肉男"
      },
      {
        "keyword": "hyper muscle",
        "comment": "超量肌肉",
        "remark": "极其夸张、超越极限的肌肉量"
      },
      {
        "keyword": "muscle gut",
        "comment": "脂包肌",
        "remark": "有肚子也有肌肉的壮熊体型(极受SDXL欢迎)"
      },
      {
        "keyword": "huge pecs",
        "comment": "巨胸",
        "remark": "巨大的男性胸大肌"
      },
      {
        "keyword": "thick thighs",
        "comment": "粗大腿",
        "remark": "大腿极其粗壮"
      },
      {
        "keyword": "size difference",
        "comment": "体型差异",
        "remark": "两人有着明显的大小体型差"
      },
      {
        "keyword": "tall and short",
        "comment": "高矮对比",
        "remark": "身高差异"
      },
      {
        "keyword": "giant",
        "comment": "巨人化",
        "remark": "巨大化标签"
      }
    ],
    "性体征": [
      {
        "keyword": "penis",
        "comment": "阴茎",
        "remark": "男性生殖器，性行为的常见焦点"
      },
      {
        "keyword": "foreskin",
        "comment": "包皮",
        "remark": "覆盖阴茎头部的皮肤，可滑动或固定"
      },
      {
        "keyword": "phimosis",
        "comment": "包茎",
        "remark": "包皮无法完全翻开，覆盖阴茎头部"
      },
      {
        "keyword": "testicles",
        "comment": "睾丸",
        "remark": "男性生殖腺，位于阴囊内"
      },
      {
        "keyword": "dark penis",
        "comment": "深色阴茎",
        "remark": "阴茎肤色较深，强调视觉对比"
      },
      {
        "keyword": "flaccid",
        "comment": "松弛",
        "remark": "阴茎未勃起时的柔软状态"
      },
      {
        "keyword": "half-erect",
        "comment": "半勃起",
        "remark": "阴茎处于部分勃起状态"
      },
      {
        "keyword": "girthy penis",
        "comment": "粗大阴茎",
        "remark": "阴茎周长较粗，强调体积感"
      },
      {
        "keyword": "glowing penis",
        "comment": "发光阴茎",
        "remark": "阴茎发出光芒，常见于幻想或科幻场景"
      },
      {
        "keyword": "knotted penis",
        "comment": "结节阴茎",
        "remark": "阴茎带有类似动物结节的结构"
      },
      {
        "keyword": "mole on penis",
        "comment": "阴茎痣",
        "remark": "阴茎表面有痣，增加个性化特征"
      },
      {
        "keyword": "penis piercing",
        "comment": "阴茎穿刺",
        "remark": "阴茎上带有穿刺装饰，如环或钉"
      },
      {
        "keyword": "penis tentacle",
        "comment": "触手阴茎",
        "remark": "阴茎形似触手，具灵活性，幻想元素"
      },
      {
        "keyword": "small penis",
        "comment": "小阴茎",
        "remark": "阴茎尺寸较小，强调紧实或娇小"
      },
      {
        "keyword": "large penis",
        "comment": "大阴茎",
        "remark": "阴茎尺寸较大，突出显著体积"
      },
      {
        "keyword": "huge penis",
        "comment": "巨大阴茎",
        "remark": "阴茎尺寸超常，强调夸张比例"
      },
      {
        "keyword": "gigantic penis",
        "comment": "超大阴茎",
        "remark": "阴茎尺寸极端巨大，常用于幻想场景"
      },
      {
        "keyword": "spiked penis",
        "comment": "尖刺阴茎",
        "remark": "阴茎表面有尖刺状突起，幻想特征"
      },
      {
        "keyword": "veiny penis",
        "comment": "血管阴茎",
        "remark": "阴茎表面血管突出，强调视觉纹理"
      },
      {
        "keyword": "bouncing penis",
        "comment": "弹跳阴茎",
        "remark": "阴茎因动作上下弹动，增加视觉刺激"
      },
      {
        "keyword": "extra penises",
        "comment": "多阴茎",
        "remark": "身体拥有多于一个阴茎，常见于幻想设定"
      },
      {
        "keyword": "invisible penis",
        "comment": "隐形阴茎",
        "remark": "阴茎不可见但存在，强调神秘或幻想效果"
      },
      {
        "keyword": "disembodied penis",
        "comment": "独立阴茎",
        "remark": "阴茎脱离身体的幻想形象，常见于超现实场景"
      },
      {
        "keyword": "condom on penis",
        "comment": "阴茎套避孕套",
        "remark": "阴茎上佩戴避孕套，强调安全性或视觉效果"
      },
      {
        "keyword": "towel on penis",
        "comment": "毛巾盖阴茎",
        "remark": "毛巾覆盖阴茎，通常用于遮挡或挑逗"
      },
      {
        "keyword": "penis shadow",
        "comment": "阴茎阴影",
        "remark": "阴茎在光线下投射的阴影，强调视觉效果"
      },
      {
        "keyword": "small penis humiliation",
        "comment": "小阴茎羞辱",
        "remark": "通过言语或行为嘲笑小阴茎以增加羞辱感"
      },
      {
        "keyword": "penis hot dog",
        "comment": "阴茎热狗",
        "remark": "阴茎被夹在身体部位间，类似热狗夹在面包中"
      },
      {
        "keyword": "small testicles",
        "comment": "小睾丸",
        "remark": "睾丸体积较小，强调紧实或娇小特征"
      },
      {
        "keyword": "large testicles",
        "comment": "大睾丸",
        "remark": "睾丸体积较大，突出显著的尺寸"
      },
      {
        "keyword": "huge testicles",
        "comment": "巨大睾丸",
        "remark": "睾丸尺寸超常，强调夸张的比例"
      },
      {
        "keyword": "gigantic testicles",
        "comment": "超大睾丸",
        "remark": "睾丸尺寸极端巨大，常用于幻想场景"
      },
      {
        "keyword": "sagging testicles",
        "comment": "下垂睾丸",
        "remark": "睾丸因重力或松弛而明显下垂"
      },
      {
        "keyword": "veiny testicles",
        "comment": "血管睾丸",
        "remark": "睾丸表面血管突出，强调视觉纹理"
      }
    ],
    "毛发与面貌": [
      {
        "keyword": "body hair",
        "comment": "体毛",
        "remark": "泛指全身旺盛体毛"
      },
      {
        "keyword": "hairy chest",
        "comment": "胸毛",
        "remark": "覆盖在胸部的毛发"
      },
      {
        "keyword": "happy trail",
        "comment": "腹毛线",
        "remark": "从肚脐延伸到下方的腹毛线"
      },
      {
        "keyword": "stubble",
        "comment": "胡茬",
        "remark": "未剃干净的粗糙胡渣"
      },
      {
        "keyword": "full beard",
        "comment": "络腮胡",
        "remark": "浓密的络腮大胡子"
      }
    ],
    "福瑞": [
      {
        "keyword": "furry",
        "comment": "福瑞/兽人",
        "remark": "经典的兽人形态"
      },
      {
        "keyword": "muscular furry",
        "comment": "壮硕兽人",
        "remark": "肌肉块面分明的福瑞"
      },
      {
        "keyword": "anthro",
        "comment": "拟人化动物",
        "remark": "类似furry，偏向二次元动物拟人"
      },
      {
        "keyword": "animal ears",
        "comment": "兽耳",
        "remark": "人形态加上动物耳朵"
      },
      {
        "keyword": "tail",
        "comment": "尾巴",
        "remark": "自带尾巴"
      }
    ],
    "职业与角色": [
      {
        "keyword": "samurai",
        "comment": "武士",
        "remark": "遵循武士道精神的日本剑士，擅长刀术，常身着传统铠甲"
      },
      {
        "keyword": "ninja",
        "comment": "忍者",
        "remark": "精通潜行、暗杀和间谍活动的日本战士，常穿黑色蒙面装"
      },
      {
        "keyword": "monk warrior",
        "comment": "武僧",
        "remark": "修炼武艺的僧侣，擅长徒手格斗或棍术，具宗教信仰"
      },
      {
        "keyword": "barbarian",
        "comment": "野蛮人",
        "remark": "力量强大的战士，挥舞巨斧或战锤，具狂野气质"
      },
      {
        "keyword": "chieftain",
        "comment": "部落酋长",
        "remark": "部落的领袖，兼具战斗力和领导力，常佩戴象征性饰品"
      },
      {
        "keyword": "shaman warrior",
        "comment": "萨满战士",
        "remark": "结合战斗与神秘仪式能力的部落成员，擅长自然魔法"
      },
      {
        "keyword": "gladiator",
        "comment": "角斗士",
        "remark": "在竞技场中战斗的奴隶或战士，精通多种武器"
      },
      {
        "keyword": "viking",
        "comment": "维京战士",
        "remark": "北欧海盗战士，挥舞战斧，擅长海上掠夺和近战"
      },
      {
        "keyword": "mercenary",
        "comment": "雇佣兵",
        "remark": "受雇作战的职业战士，忠诚于金钱而非国家"
      },
      {
        "keyword": "swat officer",
        "comment": "特警",
        "remark": "处理高危情况的武装警察，装备防弹衣和突击武器"
      },
      {
        "keyword": "sniper",
        "comment": "狙击手",
        "remark": "擅长远程精准射击的士兵，隐蔽性强"
      },
      {
        "keyword": "commando",
        "comment": "突击队员",
        "remark": "执行快速突袭任务的精锐战士，适应多种环境"
      },
      {
        "keyword": "security guard",
        "comment": "安保人员",
        "remark": "保护特定目标的武装人员，注重防御和警惕"
      },
      {
        "keyword": "hitman",
        "comment": "杀手",
        "remark": "受雇执行暗杀任务的职业刺客，冷酷高效"
      },
      {
        "keyword": "knight",
        "comment": "骑士",
        "remark": "身着铠甲的中世纪战士，骑马作战，信奉骑士精神"
      },
      {
        "keyword": "paladin",
        "comment": "圣骑士",
        "remark": "结合武力和神圣魔法的战士，致力于正义事业"
      },
      {
        "keyword": "pirate",
        "comment": "海盗",
        "remark": "海上冒险者，擅长剑术和航海，追求自由与财富"
      },
      {
        "keyword": "ranger",
        "comment": "游侠",
        "remark": "精通野外生存的战士，擅长弓箭和隐匿行动"
      },
      {
        "keyword": "demon hunter",
        "comment": "猎魔人",
        "remark": "追捕恶魔的战士，装备神秘武器和符咒"
      }
    ]
  },
  "特殊体貌与异种": {
    "异种": [
      {
        "keyword": "tentacles",
        "comment": "触手",
        "remark": "环境或身上的黏滑触手(常见异种tag)"
      },
      {
        "keyword": "slime",
        "comment": "史莱姆",
        "remark": "由黏液组成的生物或包裹物"
      },
      {
        "keyword": "tentacle sex",
        "comment": "触手交",
        "remark": "使用触手进行性行为"
      },
      {
        "keyword": "tentaclejob",
        "comment": "触手刺激",
        "remark": "使用触手对生殖器进行刺激"
      },
      {
        "keyword": "consensual tentacles",
        "comment": "自愿触手",
        "remark": "自愿参与的触手性行为"
      },
      {
        "keyword": "mechanical tentacles",
        "comment": "机械触手",
        "remark": "使用机械触手进行性刺激"
      },
      {
        "keyword": "tentacle pit",
        "comment": "触手坑",
        "remark": "身体被困于触手坑中进行刺激"
      }
    ],
    "服装与配饰": [
      {
        "keyword": "jockstrap",
        "comment": "提臀内裤",
        "remark": "Bara图包的经典服装"
      },
      {
        "keyword": "harness",
        "comment": "绑带",
        "remark": "胸前的皮革或尼龙绑带"
      },
      {
        "keyword": "dog collar",
        "comment": "项圈",
        "remark": "戴在脖子上的项圈"
      },
      {
        "keyword": "loincloth",
        "comment": "缠腰布",
        "remark": "野兽派常见的原始胯部布片"
      },
      {
        "keyword": "naked",
        "comment": "全裸",
        "remark": "没有任何衣物遮挡"
      },
      {
        "keyword": "compression shirt",
        "comment": "紧身上衣",
        "remark": "紧贴身体的衬衫，突出肌肉线条或性感轮廓"
      },
      {
        "keyword": "corset",
        "comment": "紧身胸衣",
        "remark": "收紧腰部的服装，强调身体曲线，常见于性感场景"
      },
      {
        "keyword": "crop top",
        "comment": "露脐上衣",
        "remark": "短款上衣暴露腹部，增加挑逗效果"
      },
      {
        "keyword": "tank top",
        "comment": "背心",
        "remark": "无袖紧身上衣，突出肩部和胸部线条"
      },
      {
        "keyword": "see-through clothes",
        "comment": "透视装",
        "remark": "半透明衣物，隐约露出身体，增加性感诱惑"
      },
      {
        "keyword": "taut shirt",
        "comment": "紧绷衬衫",
        "remark": "过紧的衬衫，凸显身体轮廓，强调性感"
      },
      {
        "keyword": "torn clothes",
        "comment": "破损衣物",
        "remark": "故意撕裂的衣物，暴露身体部分，增加挑逗感"
      },
      {
        "keyword": "clothing cutout",
        "comment": "服装镂空",
        "remark": "衣物上的裁剪开口，暴露特定部位，突出性感"
      },
      {
        "keyword": "shorts",
        "comment": "短裤",
        "remark": "短款裤子，暴露大腿，常见于性感装扮"
      },
      {
        "keyword": "short shorts",
        "comment": "超短裤",
        "remark": "极短的裤子，突出臀部和大腿线条"
      },
      {
        "keyword": "yoga pants",
        "comment": "瑜伽裤",
        "remark": "紧身弹性裤，凸显臀部和腿部曲线"
      },
      {
        "keyword": "leggings",
        "comment": "紧身裤",
        "remark": "贴合腿部的紧身裤，强调腿部线条"
      },
      {
        "keyword": "thighhighs",
        "comment": "过膝袜",
        "remark": "覆盖至大腿的袜子，突出腿部性感区域"
      },
      {
        "keyword": "garter belt",
        "comment": "吊袜带",
        "remark": "固定长袜的腰带，强调性感内衣风格"
      },
      {
        "keyword": "thigh strap",
        "comment": "大腿带",
        "remark": "装饰性大腿束带，增加挑逗效果"
      },
      {
        "keyword": "choker",
        "comment": "颈环",
        "remark": "紧贴颈部的装饰带，常见于性感或支配场景"
      },
      {
        "keyword": "collar",
        "comment": "项圈",
        "remark": "环绕颈部的装饰，暗示支配或角色扮演"
      },
      {
        "keyword": "necklace",
        "comment": "项链",
        "remark": "颈部装饰，突出精致或性感气质"
      },
      {
        "keyword": "bracelet",
        "comment": "手镯",
        "remark": "腕部装饰，增加性感细节"
      },
      {
        "keyword": "anklet",
        "comment": "脚链",
        "remark": "脚踝装饰，强调腿部性感"
      },
      {
        "keyword": "hairband",
        "comment": "发箍",
        "remark": "固定头发的箍状饰品，突出俏皮或性感风格"
      },
      {
        "keyword": "headband",
        "comment": "头带",
        "remark": "环绕额头的装饰带，常用于性感角色扮演"
      },
      {
        "keyword": "headscarf",
        "comment": "头巾",
        "remark": "覆盖头部的轻薄布料，增加神秘或诱惑感"
      },
      {
        "keyword": "veil",
        "comment": "面纱",
        "remark": "半透明面纱，强调隐秘性感或仪式感"
      },
      {
        "keyword": "circlet",
        "comment": "头环",
        "remark": "环状头饰，常用于幻想或性感装扮"
      },
      {
        "keyword": "earrings",
        "comment": "耳环",
        "remark": "耳部装饰，突出精致或挑逗效果"
      },
      {
        "keyword": "mask",
        "comment": "面具",
        "remark": "遮盖脸部的装饰，增加神秘或角色扮演感"
      }
    ],
    "情趣道具": [
      {
        "keyword": "anal beads",
        "comment": "肛珠",
        "remark": "串联珠子，用于肛门插入和拔出刺激"
      },
      {
        "keyword": "anal tail",
        "comment": "肛尾",
        "remark": "带有尾巴装饰的肛门插入玩具，常用于角色扮演"
      },
      {
        "keyword": "butt plug",
        "comment": "臀塞",
        "remark": "插入肛门的锥形玩具，保持扩张或刺激"
      },
      {
        "keyword": "aneros",
        "comment": "前列腺按摩器",
        "remark": "专门设计用于刺激前列腺的肛门玩具"
      },
      {
        "keyword": "strap-on",
        "comment": "绑带假阳具",
        "remark": "通过束带固定的假阳具，用于插入性行为"
      },
      {
        "keyword": "suction cup dildo",
        "comment": "吸盘假阳具",
        "remark": "底部带吸盘的假阳具，可固定在平面上"
      },
      {
        "keyword": "dildo riding",
        "comment": "骑乘假阳具",
        "remark": "跨坐并上下移动于假阳具的行为"
      },
      {
        "keyword": "sounding",
        "comment": "尿道探针",
        "remark": "插入尿道的细长工具，用于刺激尿道"
      },
      {
        "keyword": "urethral beads",
        "comment": "尿道珠",
        "remark": "串联珠子插入尿道，增加刺激感"
      },
      {
        "keyword": "cock ring",
        "comment": "阴茎环",
        "remark": "套在阴茎或睾丸上的环状物，延长勃起或增强快感"
      },
      {
        "keyword": "vibrator",
        "comment": "振动器",
        "remark": "通过振动刺激身体部位的电动玩具"
      },
      {
        "keyword": "vibrator on penis",
        "comment": "阴茎振动器",
        "remark": "振动器置于阴茎上，增强性快感"
      },
      {
        "keyword": "sybian",
        "comment": "希比安骑乘机",
        "remark": "骑乘式振动机器，提供强烈外部刺激"
      },
      {
        "keyword": "riding machine",
        "comment": "骑乘机器",
        "remark": "类似 sybian 的骑乘式性玩具，强调振动"
      }
    ],
    "束缚与支配": [
      {
        "keyword": "anal hook",
        "comment": "肛钩",
        "remark": "插入肛门的钩状工具，常与绳子结合用于束缚"
      },
      {
        "keyword": "blindfold",
        "comment": "眼罩",
        "remark": "遮盖眼睛的布条，增加感官控制"
      },
      {
        "keyword": "bondage outfit",
        "comment": "束缚装",
        "remark": "专为束缚设计的服装，强调支配与顺从"
      },
      {
        "keyword": "chain",
        "comment": "链条",
        "remark": "用于束缚或连接身体部位的金属链"
      },
      {
        "keyword": "chastity cage",
        "comment": "贞操笼",
        "remark": "锁住阴茎的装置，限制勃起或性行为"
      },
      {
        "keyword": "cuffs",
        "comment": "手铐",
        "remark": "束缚手腕或脚踝的金属或皮革装置"
      },
      {
        "keyword": "handcuffs",
        "comment": "手铐",
        "remark": "专门束缚手腕的金属工具"
      },
      {
        "keyword": "hobble",
        "comment": "脚镣",
        "remark": "限制腿部移动的束缚工具"
      },
      {
        "keyword": "shackles",
        "comment": "镣铐",
        "remark": "束缚手脚的大型金属装置"
      },
      {
        "keyword": "gag",
        "comment": "口塞",
        "remark": "置于口中限制说话的工具，增加支配感"
      },
      {
        "keyword": "ball gag",
        "comment": "球形口塞",
        "remark": "带有圆球的口塞，限制言语"
      },
      {
        "keyword": "bit gag",
        "comment": "咬棒口塞",
        "remark": "类似马嚼子的口塞，适合角色扮演"
      },
      {
        "keyword": "ring gag",
        "comment": "环形口塞",
        "remark": "保持嘴部张开的环状口塞"
      },
      {
        "keyword": "leash",
        "comment": "牵绳",
        "remark": "连接项圈的绳子，用于引导或控制"
      },
      {
        "keyword": "leash on penis",
        "comment": "阴茎牵绳",
        "remark": "绳子绑在阴茎上，用于支配玩法"
      },
      {
        "keyword": "rope",
        "comment": "绳子",
        "remark": "用于绑缚身体的绳索，常见于绳艺"
      },
      {
        "keyword": "crotch rope",
        "comment": "胯部绳缚",
        "remark": "绳子穿过胯部，增加刺激和束缚感"
      },
      {
        "keyword": "spreader bar",
        "comment": "分离棒",
        "remark": "保持腿部或手臂分开的金属或木棒"
      },
      {
        "keyword": "whip",
        "comment": "鞭子",
        "remark": "用于轻击身体的工具，增加支配快感"
      },
      {
        "keyword": "riding crop",
        "comment": "马鞭",
        "remark": "短柄鞭子，用于精准轻击，常见于BDSM"
      },
      {
        "keyword": "wooden horse",
        "comment": "木马",
        "remark": "尖顶木制装置，骑坐时刺激胯部"
      },
      {
        "keyword": "aphrodisiac",
        "comment": "催情剂",
        "remark": "激发性欲的药物或液体，用于增强快感"
      },
      {
        "keyword": "enema",
        "comment": "灌肠",
        "remark": "通过肛门注入液体，清洁或增加刺激"
      },
      {
        "keyword": "lotion",
        "comment": "润肤乳",
        "remark": "涂抹于身体的润滑液体，增加滑腻感"
      },
      {
        "keyword": "lotion bottle",
        "comment": "润肤乳瓶",
        "remark": "装有润肤乳的瓶子，常用于性行为准备"
      },
      {
        "keyword": "lube",
        "comment": "润滑剂",
        "remark": "减少摩擦的液体，广泛用于性行为"
      },
      {
        "keyword": "bondage",
        "comment": "束缚",
        "remark": "使用绳子或其他工具限制行动"
      },
      {
        "keyword": "predicament bondage",
        "comment": "困境束缚",
        "remark": "设计使被束缚者处于两难境地的束缚"
      },
      {
        "keyword": "public bondage",
        "comment": "公开束缚",
        "remark": "在公共场合进行束缚"
      },
      {
        "keyword": "self bondage",
        "comment": "自我束缚",
        "remark": "自己对自己进行束缚"
      },
      {
        "keyword": "shared bondage",
        "comment": "共享束缚",
        "remark": "多人共同被束缚"
      },
      {
        "keyword": "shibari",
        "comment": "日式绳缚",
        "remark": "日本风格的艺术化绳子束缚"
      },
      {
        "keyword": "shibari over clothes",
        "comment": "着衣绳缚",
        "remark": "在衣服外进行日式绳缚"
      },
      {
        "keyword": "shibari under clothes",
        "comment": "内衣绳缚",
        "remark": "在衣服下进行日式绳缚"
      }
    ],
    "BDSM与支配": [
      {
        "keyword": "humiliation",
        "comment": "羞辱",
        "remark": "通过羞辱获得性快感"
      },
      {
        "keyword": "public use",
        "comment": "公共使用",
        "remark": "身体在公共场合被多人使用"
      },
      {
        "keyword": "tally",
        "comment": "标记",
        "remark": "在身体上标记性行为次数"
      },
      {
        "keyword": "slave",
        "comment": "奴隶",
        "remark": "扮演奴隶角色进行性行为"
      },
      {
        "keyword": "spanked",
        "comment": "打屁股",
        "remark": "通过拍打臀部进行性刺激"
      },
      {
        "keyword": "torture",
        "comment": "折磨",
        "remark": "通过轻微疼痛增加性快感"
      },
      {
        "keyword": "nipple torture",
        "comment": "乳头折磨",
        "remark": "通过刺激乳头造成轻微疼痛"
      },
      {
        "keyword": "nipple clamps",
        "comment": "乳头夹",
        "remark": "使用夹子刺激乳头"
      },
      {
        "keyword": "nipple pull",
        "comment": "拉乳头",
        "remark": "拉扯乳头以增加刺激"
      },
      {
        "keyword": "ball busting",
        "comment": "睾丸打击",
        "remark": "轻击睾丸以增加性快感"
      },
      {
        "keyword": "tickle torture",
        "comment": "挠痒折磨",
        "remark": "通过挠痒造成刺激"
      },
      {
        "keyword": "wax play",
        "comment": "蜡烛玩法",
        "remark": "使用热蜡滴在皮肤上增加刺激"
      },
      {
        "keyword": "asphyxiation",
        "comment": "窒息",
        "remark": "通过限制呼吸增加性快感"
      },
      {
        "keyword": "strangling",
        "comment": "勒颈",
        "remark": "通过勒紧颈部进行性刺激"
      }
    ],
    "非自愿类": [
      {
        "keyword": "rape",
        "comment": "强奸",
        "remark": "非自愿的性行为"
      },
      {
        "keyword": "molestation",
        "comment": "猥亵",
        "remark": "非自愿的性骚扰行为"
      },
      {
        "keyword": "chikan",
        "comment": "痴汉",
        "remark": "在公共场合进行的性骚扰"
      }
    ]
  },
  "姿势动作与性行为": {
    "单人姿势": [
      {
        "keyword": "lying",
        "comment": "躺姿",
        "remark": "身体平躺，可能暴露身体部位，常见于亲密场景"
      },
      {
        "keyword": "on back",
        "comment": "仰卧",
        "remark": "仰面躺下，适合亲密接触或性行为准备"
      },
      {
        "keyword": "on stomach",
        "comment": "俯卧",
        "remark": "面朝下躺，臀部或背部暴露，具挑逗性"
      },
      {
        "keyword": "kneeling",
        "comment": "跪姿",
        "remark": "双膝着地，常见于顺从或亲密场景"
      },
      {
        "keyword": "on one knee",
        "comment": "单膝跪",
        "remark": "单膝跪地，具奉献或亲密暗示"
      },
      {
        "keyword": "squatting",
        "comment": "蹲姿",
        "remark": "双腿弯曲蹲下，胯部暴露，具挑逗意味"
      },
      {
        "keyword": "spread legs",
        "comment": "双腿分开",
        "remark": "双腿张开，暴露胯部，具挑逗性"
      },
      {
        "keyword": "leg up",
        "comment": "抬腿",
        "remark": "一腿抬高，暴露腿部或胯部，增加性感"
      },
      {
        "keyword": "leaning forward",
        "comment": "前倾",
        "remark": "身体向前倾斜，适合亲密靠近"
      },
      {
        "keyword": "leaning back",
        "comment": "后仰",
        "remark": "身体向后倾斜，暴露胸腹，增加性感"
      },
      {
        "keyword": "arched back",
        "comment": "拱背",
        "remark": "脊柱向前推，突出胸部或臀部曲线"
      },
      {
        "keyword": "spread arms",
        "comment": "双臂展开",
        "remark": "双臂张开，身体呈开放状，具邀请意味"
      },
      {
        "keyword": "arms behind back",
        "comment": "双手背后",
        "remark": "双手置于背后，强调顺从或性感姿态"
      },
      {
        "keyword": "arms behind head",
        "comment": "双手枕头",
        "remark": "双手置于脑后，暴露腋下和胸部，具挑逗性"
      },
      {
        "keyword": "arms up",
        "comment": "双臂举起",
        "remark": "双臂高举，身体伸展，突出性感线条"
      },
      {
        "keyword": "on all fours",
        "comment": "四肢着地",
        "remark": "趴在地上"
      },
      {
        "keyword": "spreading legs",
        "comment": "张开双腿",
        "remark": "极为暴露与挑逗的姿势"
      }
    ],
    "双人互动姿势": [
      {
        "keyword": "pinned down",
        "comment": "被压倒",
        "remark": "一人将另一人按倒在身下"
      },
      {
        "keyword": "carrying",
        "comment": "抱起/举起",
        "remark": "强大的力量感展现"
      },
      {
        "keyword": "straddling",
        "comment": "跨坐",
        "remark": "跨坐在另一个人身上"
      },
      {
        "keyword": "boy on top",
        "comment": "男上位",
        "remark": "男性在上方主导插入的体位"
      },
      {
        "keyword": "sitting on lap",
        "comment": "坐大腿",
        "remark": "一人坐在另一人大腿上，强调亲密接触"
      },
      {
        "keyword": "sitting on head",
        "comment": "坐头部",
        "remark": "一人将臀部靠近另一人头部，具支配意味"
      },
      {
        "keyword": "thigh straddling",
        "comment": "跨大腿",
        "remark": "跨坐在对方大腿上，突出亲密和挑逗"
      },
      {
        "keyword": "piggyback",
        "comment": "背人",
        "remark": "一人背负另一人，增加亲密互动"
      },
      {
        "keyword": "princess carry",
        "comment": "公主抱",
        "remark": "横抱对方，象征浪漫或支配"
      },
      {
        "keyword": "hug",
        "comment": "拥抱",
        "remark": "两人或多人贴身拥抱，强调亲密感"
      },
      {
        "keyword": "hug from behind",
        "comment": "背后拥抱",
        "remark": "从背后环抱对方，增加亲密和保护感"
      },
      {
        "keyword": "waist hug",
        "comment": "搂腰",
        "remark": "双手环绕对方腰部，突出亲密接触"
      },
      {
        "keyword": "holding hands",
        "comment": "牵手",
        "remark": "两人手拉手，象征亲密关系"
      },
      {
        "keyword": "face-to-face",
        "comment": "面对面",
        "remark": "两人面对面站立或靠近，适合亲密互动"
      },
      {
        "keyword": "forehead-to-forehead",
        "comment": "额头相抵",
        "remark": "两人额头贴合，强调深情或性感氛围"
      },
      {
        "keyword": "head on chest",
        "comment": "头靠胸",
        "remark": "一人将头靠在对方胸前，增加亲密感"
      },
      {
        "keyword": "shoulder-to-shoulder",
        "comment": "肩并肩",
        "remark": "两人肩部贴近，适合亲密站姿"
      }
    ],
    "性交体位": [
      {
        "keyword": "missionary",
        "comment": "传教士式",
        "remark": "接受方仰卧，插入方在上方面对面进入"
      },
      {
        "keyword": "doggy style",
        "comment": "后入式",
        "remark": "从后方进行的经典体位"
      },
      {
        "keyword": "bent over",
        "comment": "弯腰式",
        "remark": "接受方弯腰，通常站立或靠物体，由后方插入"
      },
      {
        "keyword": "prone bone",
        "comment": "俯卧式",
        "remark": "接受方俯卧，插入方从上方进入"
      },
      {
        "keyword": "top-down bottom-up",
        "comment": "上下对位",
        "remark": "插入方在上方，接受方在下方，强调垂直角度"
      },
      {
        "keyword": "spooning",
        "comment": "汤匙式",
        "remark": "双方侧卧，插入方从背后进入，类似拥抱"
      },
      {
        "keyword": "on side",
        "comment": "侧卧式",
        "remark": "双方侧卧，插入方从侧面或后方进入"
      },
      {
        "keyword": "anvil position",
        "comment": "铁砧式",
        "remark": "接受方仰卧，双腿抬高靠向胸部，插入方在上"
      },
      {
        "keyword": "folded",
        "comment": "折叠式",
        "remark": "接受方双腿被折叠至胸部或头部，暴露胯部"
      },
      {
        "keyword": "mating press",
        "comment": "交配压迫式",
        "remark": "接受方仰卧，双腿被压向胸部，插入方深压进入"
      },
      {
        "keyword": "suspended congress",
        "comment": "悬空交合",
        "remark": "接受方被插入方抱起或悬空，站立插入"
      },
      {
        "keyword": "reverse suspended congress",
        "comment": "反向悬空交合",
        "remark": "接受方背对插入方被抱起，悬空插入"
      },
      {
        "keyword": "full nelson",
        "comment": "全尼尔森式",
        "remark": "插入方从背后锁住接受方双臂，双腿抬高插入"
      },
      {
        "keyword": "piledriver",
        "comment": "打桩机式",
        "remark": "接受方倒立或仰卧臀部抬高，插入方从上方进入"
      },
      {
        "keyword": "amazon position",
        "comment": "亚马逊式",
        "remark": "接受方仰卧，插入方被压在下方，双腿抬高"
      },
      {
        "keyword": "cowgirl position",
        "comment": "骑乘式",
        "remark": "插入方仰卧，接受方在上方骑乘，可性别中立"
      },
      {
        "keyword": "reverse cowgirl position",
        "comment": "反向骑乘式",
        "remark": "接受方背对插入方骑乘，方向相反"
      },
      {
        "keyword": "reverse upright straddle",
        "comment": "反向直立跨坐",
        "remark": "接受方背对插入方，站立或跨坐在上方"
      },
      {
        "keyword": "upright straddle",
        "comment": "直立跨坐",
        "remark": "接受方面对插入方，站立或跨坐在上方"
      },
      {
        "keyword": "mounting",
        "comment": "骑跨",
        "remark": "一方跨坐在另一方身上主导性行为"
      },
      {
        "keyword": "missionary pose",
        "comment": "传教士",
        "remark": "基础的姿势体位"
      },
      {
        "keyword": "doggystyle",
        "comment": "后入式",
        "remark": "一方从背后插入，接受方四肢支撑或跪姿"
      }
    ],
    "骑乘与主导": [
      {
        "keyword": "69",
        "comment": "六九式",
        "remark": "双方同时进行口交的体位，头部相对对方胯部"
      },
      {
        "keyword": "reverse spitroast",
        "comment": "反向双头交",
        "remark": "一人同时接受口交和插入的逆向形式"
      },
      {
        "keyword": "spitroast",
        "comment": "双头交",
        "remark": "一人同时接受口交和插入"
      },
      {
        "keyword": "oral sandwich",
        "comment": "口交夹心",
        "remark": "一人同时接受多人口交"
      },
      {
        "keyword": "daisy chain",
        "comment": "环形性交",
        "remark": "多人依次进行口交或性交形成环状"
      },
      {
        "keyword": "threesome",
        "comment": "三人行",
        "remark": "三人参与的性行为"
      },
      {
        "keyword": "double penetration",
        "comment": "双重插入",
        "remark": "同时插入两个身体部位"
      },
      {
        "keyword": "triple penetration",
        "comment": "三重插入",
        "remark": "同时插入三个身体部位"
      },
      {
        "keyword": "penises touching",
        "comment": "阴茎接触",
        "remark": "两根阴茎直接接触"
      },
      {
        "keyword": "testicles touching",
        "comment": "睾丸接触",
        "remark": "两对睾丸直接接触"
      }
    ],
    "束缚体位": [
      {
        "keyword": "bound arms",
        "comment": "手臂束缚",
        "remark": "手臂被绳子或其他工具绑缚"
      },
      {
        "keyword": "bound fingers",
        "comment": "手指束缚",
        "remark": "手指被单独绑缚限制活动"
      },
      {
        "keyword": "bound wrists",
        "comment": "手腕束缚",
        "remark": "手腕被绳子或手铐绑缚"
      },
      {
        "keyword": "bound legs",
        "comment": "腿部束缚",
        "remark": "腿部整体被绑缚限制移动"
      },
      {
        "keyword": "bound calves",
        "comment": "小腿束缚",
        "remark": "小腿部分被单独绑缚"
      },
      {
        "keyword": "bound feet",
        "comment": "脚部束缚",
        "remark": "脚部被绑缚限制活动"
      },
      {
        "keyword": "bound knees",
        "comment": "膝盖束缚",
        "remark": "膝盖被绑缚迫使腿部弯曲"
      },
      {
        "keyword": "bound thighs",
        "comment": "大腿束缚",
        "remark": "大腿被绑缚限制腿部张开"
      },
      {
        "keyword": "bound toes",
        "comment": "脚趾束缚",
        "remark": "脚趾被单独绑缚限制活动"
      },
      {
        "keyword": "bound penis",
        "comment": "阴茎束缚",
        "remark": "阴茎被绳子或其他工具绑缚"
      },
      {
        "keyword": "bound tail",
        "comment": "尾部束缚",
        "remark": "尾巴被绑缚，常见于幻想角色"
      },
      {
        "keyword": "bound torso",
        "comment": "躯干束缚",
        "remark": "躯干被绳子绑缚限制上身活动"
      },
      {
        "keyword": "box tie",
        "comment": "箱式束缚",
        "remark": "手臂在背后交叉绑缚，形似箱形"
      },
      {
        "keyword": "frogtie",
        "comment": "蛙式束缚",
        "remark": "腿部弯曲，小腿和大腿绑在一起，形似青蛙"
      },
      {
        "keyword": "hogtie",
        "comment": "猪缚式",
        "remark": "手腕和脚踝在背后绑在一起，身体呈弓形"
      },
      {
        "keyword": "separated arms",
        "comment": "手臂分开束缚",
        "remark": "手臂被分开并固定在不同位置"
      },
      {
        "keyword": "separated legs",
        "comment": "腿部分开束缚",
        "remark": "腿部被分开并固定在不同位置"
      },
      {
        "keyword": "separated wrists",
        "comment": "手腕分开束缚",
        "remark": "手腕被分开绑缚在不同点"
      },
      {
        "keyword": "shrimp tie",
        "comment": "虾式束缚",
        "remark": "身体被绑成蜷缩状，头部靠近膝盖"
      },
      {
        "keyword": "strappado",
        "comment": "反弓束缚",
        "remark": "手臂在背后高举绑缚，身体前倾"
      },
      {
        "keyword": "suspension",
        "comment": "悬吊",
        "remark": "身体被绳子悬挂在空中"
      },
      {
        "keyword": "cuffs-to-collar",
        "comment": "手铐连颈圈",
        "remark": "手腕通过手铐连接到颈部项圈"
      },
      {
        "keyword": "knees to chest",
        "comment": "膝盖贴胸",
        "remark": "接受方双腿弯曲，膝盖被压至胸部"
      },
      {
        "keyword": "legs over head",
        "comment": "腿过头顶",
        "remark": "接受方双腿被抬高超过头部，身体折叠"
      },
      {
        "keyword": "legs up",
        "comment": "双腿上举",
        "remark": "接受方双腿抬高，通常仰卧或悬空"
      }
    ],
    "手部与抚摸": [
      {
        "keyword": "groping",
        "comment": "抚摸",
        "remark": "对身体部位的非特定抚摸"
      },
      {
        "keyword": "ass grab",
        "comment": "抓臀",
        "remark": "抓住臀部"
      },
      {
        "keyword": "pectoral grab",
        "comment": "抓胸肌",
        "remark": "抓住胸肌部位"
      },
      {
        "keyword": "guided pectoral grab",
        "comment": "引导抓胸肌",
        "remark": "引导他人抓住胸肌"
      },
      {
        "keyword": "nipple tweak",
        "comment": "捏乳头",
        "remark": "轻捏或扭转乳头"
      },
      {
        "keyword": "crotch grab",
        "comment": "抓胯部",
        "remark": "抓住胯部区域"
      },
      {
        "keyword": "guided crotch grab",
        "comment": "引导抓胯",
        "remark": "引导他人抓住胯部"
      },
      {
        "keyword": "torso grab",
        "comment": "抓躯干",
        "remark": "抓住躯干部位"
      }
    ],
    "手交类": [
      {
        "keyword": "handjob",
        "comment": "手交",
        "remark": "使用手的互动"
      },
      {
        "keyword": "double handjob",
        "comment": "双手交",
        "remark": "两人同时用手进行刺激"
      },
      {
        "keyword": "cooperative handjob",
        "comment": "协作手交",
        "remark": "多人协作用手进行刺激"
      },
      {
        "keyword": "cuddling handjob",
        "comment": "拥抱手交",
        "remark": "在拥抱中进行手交"
      },
      {
        "keyword": "reach-around",
        "comment": "背后手交",
        "remark": "从背后用手进行刺激"
      },
      {
        "keyword": "two-handed handjob",
        "comment": "双手手交",
        "remark": "一人使用双手进行刺激"
      },
      {
        "keyword": "caressing testicles",
        "comment": "抚摸睾丸",
        "remark": "轻柔抚摸或按摩睾丸"
      }
    ],
    "足部类": [
      {
        "keyword": "footjob",
        "comment": "足交",
        "remark": "使用脚对男性生殖器进行刺激的行为"
      },
      {
        "keyword": "feet",
        "comment": "脚部",
        "remark": "专注于脚部的性行为或迷恋"
      },
      {
        "keyword": "licking foot",
        "comment": "舔脚",
        "remark": "对脚部进行舔舐的行为"
      },
      {
        "keyword": "foot worship",
        "comment": "足部崇拜",
        "remark": "对脚部的迷恋或崇拜行为"
      },
      {
        "keyword": "smelling feet",
        "comment": "闻脚",
        "remark": "嗅闻脚部的气味"
      }
    ],
    "摩擦类": [
      {
        "keyword": "armpit sex",
        "comment": "腋交",
        "remark": "使用腋下进行性刺激"
      },
      {
        "keyword": "grinding",
        "comment": "摩擦",
        "remark": "身体部位间的非插入式摩擦"
      },
      {
        "keyword": "buttjob",
        "comment": "臀交",
        "remark": "使用臀部进行非插入式刺激"
      },
      {
        "keyword": "pecjob",
        "comment": "胸肌交",
        "remark": "使用男性胸肌进行刺激"
      },
      {
        "keyword": "thigh sex",
        "comment": "腿交",
        "remark": "使用大腿进行非插入式刺激"
      },
      {
        "keyword": "tailjob",
        "comment": "尾交",
        "remark": "使用尾巴进行性刺激"
      }
    ],
    "自慰": [
      {
        "keyword": "masturbation",
        "comment": "自慰",
        "remark": "自我性刺激行为"
      },
      {
        "keyword": "clothed masturbation",
        "comment": "着衣自慰",
        "remark": "穿着衣服进行自慰"
      },
      {
        "keyword": "crotch rub",
        "comment": "胯部摩擦",
        "remark": "通过摩擦胯部进行刺激"
      },
      {
        "keyword": "mutual masturbation",
        "comment": "相互自慰",
        "remark": "多人同时进行自慰"
      },
      {
        "keyword": "tail masturbation",
        "comment": "尾部自慰",
        "remark": "使用尾巴进行自我刺激"
      }
    ],
    "口交类": [
      {
        "keyword": "oral",
        "comment": "口交",
        "remark": "使用口腔进行性刺激"
      },
      {
        "keyword": "anilingus",
        "comment": "舔肛",
        "remark": "对肛门进行舔舐"
      },
      {
        "keyword": "autofellatio",
        "comment": "自我口交",
        "remark": "自己对自己进行口交"
      },
      {
        "keyword": "cum swap",
        "comment": "精液交换",
        "remark": "通过口腔传递精液的行为"
      },
      {
        "keyword": "deepthroat",
        "comment": "深喉",
        "remark": "深度的口交"
      },
      {
        "keyword": "cooperative fellatio",
        "comment": "协作口交",
        "remark": "多人协作进行口交"
      },
      {
        "keyword": "multiple penis fellatio",
        "comment": "多阴茎口交",
        "remark": "同时对多个阴茎进行口交"
      },
      {
        "keyword": "hug and suck",
        "comment": "拥抱口交",
        "remark": "在拥抱中进行口交"
      },
      {
        "keyword": "licking testicle",
        "comment": "舔睾丸",
        "remark": "对睾丸进行舔舐"
      },
      {
        "keyword": "sitting on face",
        "comment": "脸坐",
        "remark": "将臀部或胯部置于对方脸上进行刺激"
      },
      {
        "keyword": "testicle sucking",
        "comment": "吸吮睾丸",
        "remark": "对睾丸进行吸吮"
      }
    ],
    "插入类": [
      {
        "keyword": "anal",
        "comment": "肛交",
        "remark": "通过肛门进行的性交"
      },
      {
        "keyword": "double anal",
        "comment": "双重肛交",
        "remark": "同时进行两次肛门插入"
      },
      {
        "keyword": "triple anal",
        "comment": "三重肛交",
        "remark": "同时进行三次肛门插入"
      },
      {
        "keyword": "deep penetration",
        "comment": "深入插入",
        "remark": "插入深度较深的行为"
      },
      {
        "keyword": "multiple insertions",
        "comment": "多重插入",
        "remark": "同时插入多个物体或部位"
      },
      {
        "keyword": "anal object insertion",
        "comment": "肛门物体插入",
        "remark": "向肛门插入非生殖器物体"
      },
      {
        "keyword": "urethral insertion",
        "comment": "尿道插入",
        "remark": "向尿道插入物体"
      },
      {
        "keyword": "anal fingering",
        "comment": "肛门指交",
        "remark": "使用手指刺激肛门"
      },
      {
        "keyword": "prostate milking",
        "comment": "前列腺按摩",
        "remark": "通过肛门刺激前列腺"
      },
      {
        "keyword": "glansjob",
        "comment": "龟头刺激",
        "remark": "专注于龟头的刺激行为"
      },
      {
        "keyword": "cloth glansjob",
        "comment": "布料龟头刺激",
        "remark": "通过布料对龟头进行刺激"
      },
      {
        "keyword": "tail insertion",
        "comment": "尾部插入",
        "remark": "尾巴用于插入行为"
      }
    ],
    "体液与射精": [
      {
        "keyword": "erection",
        "comment": "勃起",
        "remark": "直接描述下体状态"
      },
      {
        "keyword": "precum",
        "comment": "前列腺液",
        "remark": "早期的体液特效"
      },
      {
        "keyword": "cum",
        "comment": "精液",
        "remark": "涉及精液的性行为"
      },
      {
        "keyword": "messy cum",
        "comment": "大量精液",
        "remark": "使得画面非常凌乱的喷射"
      },
      {
        "keyword": "cum on body",
        "comment": "射在身上",
        "remark": "精液射在身体表面"
      },
      {
        "keyword": "cum on armpits",
        "comment": "射在腋下",
        "remark": "精液射在腋下"
      },
      {
        "keyword": "cum on ass",
        "comment": "射在臀部",
        "remark": "精液射在臀部表面"
      },
      {
        "keyword": "cum on back",
        "comment": "射在背上",
        "remark": "精液射在背部"
      },
      {
        "keyword": "cum on chest",
        "comment": "射在胸部",
        "remark": "精液射在胸部表面"
      },
      {
        "keyword": "cum on pectorals",
        "comment": "射在胸肌",
        "remark": "精液射在胸肌上"
      },
      {
        "keyword": "cum in navel",
        "comment": "射在肚脐",
        "remark": "精液射在肚脐内"
      },
      {
        "keyword": "cum in ass",
        "comment": "射在臀内",
        "remark": "精液射入肛门内"
      },
      {
        "keyword": "cum in clothes",
        "comment": "射在衣服上",
        "remark": "精液射在衣物上"
      },
      {
        "keyword": "cum in cup",
        "comment": "射在杯中",
        "remark": "精液射入容器中"
      },
      {
        "keyword": "cum in mouth",
        "comment": "射在口中",
        "remark": "精液射入口腔"
      },
      {
        "keyword": "cum in throat",
        "comment": "射在喉咙",
        "remark": "精液直接射入喉咙"
      },
      {
        "keyword": "cum on eyewear",
        "comment": "射在眼镜",
        "remark": "精液射在眼镜上"
      },
      {
        "keyword": "cum on food",
        "comment": "射在食物",
        "remark": "精液射在食物上"
      },
      {
        "keyword": "cumdump",
        "comment": "精液容器",
        "remark": "身体被用作接收大量精液"
      },
      {
        "keyword": "cum bath",
        "comment": "精液浴",
        "remark": "身体被大量精液覆盖"
      },
      {
        "keyword": "cumdrip",
        "comment": "精液滴落",
        "remark": "精液从身体滴落的情景"
      },
      {
        "keyword": "bukkake",
        "comment": "颜射",
        "remark": "多人将精液射在一人身上"
      },
      {
        "keyword": "ejaculating while penetrated",
        "comment": "被插入时射精",
        "remark": "在被插入时发生射精"
      },
      {
        "keyword": "facial",
        "comment": "面部射精",
        "remark": "精液射在脸上"
      },
      {
        "keyword": "autofacial",
        "comment": "自我面部射精",
        "remark": "自己射精在自己脸上"
      },
      {
        "keyword": "felching",
        "comment": "吸精",
        "remark": "从体内吸出精液的行为"
      }
    ],
    "阴茎互动": [
      {
        "keyword": "licking penis",
        "comment": "舔阴茎",
        "remark": "用舌头舔舐阴茎以增加快感"
      },
      {
        "keyword": "kissing penis",
        "comment": "亲吻阴茎",
        "remark": "用嘴唇轻吻阴茎，强调亲密感"
      },
      {
        "keyword": "looking at penis",
        "comment": "凝视阴茎",
        "remark": "专注观察阴茎，增加心理刺激"
      },
      {
        "keyword": "penis on ass",
        "comment": "阴茎贴臀",
        "remark": "阴茎放置或摩擦臀部表面"
      },
      {
        "keyword": "penis on face",
        "comment": "阴茎贴脸",
        "remark": "阴茎放置或贴近对方脸部，强调支配"
      },
      {
        "keyword": "penis over eyes",
        "comment": "阴茎盖眼",
        "remark": "阴茎覆盖对方双眼，增加感官刺激"
      },
      {
        "keyword": "penis over one eye",
        "comment": "阴茎盖单眼",
        "remark": "阴茎覆盖对方一只眼睛，强调视觉效果"
      },
      {
        "keyword": "penis on head",
        "comment": "阴茎贴头",
        "remark": "阴茎放置或摩擦对方头部"
      },
      {
        "keyword": "penis on shoulder",
        "comment": "阴茎贴肩",
        "remark": "阴茎放置或靠在对方肩膀上"
      },
      {
        "keyword": "penis on stomach",
        "comment": "阴茎贴腹",
        "remark": "阴茎放置或摩擦对方腹部"
      },
      {
        "keyword": "penis grab",
        "comment": "抓阴茎",
        "remark": "用手抓住阴茎，通常伴随轻柔动作"
      },
      {
        "keyword": "penis measuring",
        "comment": "测量阴茎",
        "remark": "用工具或手测量阴茎的尺寸"
      },
      {
        "keyword": "penis milking",
        "comment": "阴茎挤奶",
        "remark": "通过持续刺激阴茎诱导射精，类似挤奶动作"
      },
      {
        "keyword": "poking with penis",
        "comment": "用阴茎戳",
        "remark": "用阴茎轻戳身体其他部位，增加挑逗感"
      },
      {
        "keyword": "slapping with penis",
        "comment": "用阴茎拍打",
        "remark": "用阴茎轻拍身体部位，如脸或臀部"
      }
    ],
    "睾丸互动": [
      {
        "keyword": "biting testicles",
        "comment": "咬睾丸",
        "remark": "轻咬睾丸以产生刺激，通常需小心控制力度"
      },
      {
        "keyword": "bouncing testicles",
        "comment": "弹跳睾丸",
        "remark": "通过动作使睾丸上下弹动，增加视觉或触觉刺激"
      },
      {
        "keyword": "balljob",
        "comment": "睾丸刺激",
        "remark": "专注于睾丸的非插入式性刺激，类似手交"
      },
      {
        "keyword": "squeezing testicles",
        "comment": "挤压睾丸",
        "remark": "轻度挤压睾丸以产生刺激，需谨慎操作"
      },
      {
        "keyword": "testicle lift",
        "comment": "提拉睾丸",
        "remark": "轻提或抬高睾丸以产生拉伸感"
      },
      {
        "keyword": "penis and testicles touching",
        "comment": "阴茎与睾丸接触",
        "remark": "阴茎与睾丸之间的直接接触，通常涉及多人"
      },
      {
        "keyword": "testicles on face",
        "comment": "睾丸置脸",
        "remark": "睾丸放置或贴近对方脸部，强调支配或亲密"
      },
      {
        "keyword": "testicles press",
        "comment": "睾丸压迫",
        "remark": "睾丸被轻压在身体或其他表面，增加感官刺激"
      }
    ],
    "下体遮盖": [
      {
        "keyword": "bulge",
        "comment": "凸起",
        "remark": "阴茎在衣物下形成的明显隆起"
      },
      {
        "keyword": "bulges touching",
        "comment": "凸起接触",
        "remark": "两人衣物下的阴茎凸起相互接触"
      },
      {
        "keyword": "covered penis",
        "comment": "遮盖阴茎",
        "remark": "阴茎被衣物或其他物体部分遮盖"
      },
      {
        "keyword": "penis sheath",
        "comment": "阴茎套",
        "remark": "阴茎被专门设计的套子包裹"
      }
    ]
  },
  "构图与镜头视角": {
    "视角方向": [
      {
        "keyword": "pov",
        "comment": "第一人称视角",
        "remark": "SDXL常用于代入感极强的构图"
      },
      {
        "keyword": "pov hands",
        "comment": "第一人称视角(带手)",
        "remark": "视角中伸出观察者的手"
      },
      {
        "keyword": "from below",
        "comment": "仰视",
        "remark": "使角色显得高大威猛"
      },
      {
        "keyword": "from above",
        "comment": "俯视",
        "remark": "俯拍视角"
      },
      {
        "keyword": "from behind",
        "comment": "背部视角",
        "remark": "从角色背后看过去的视角"
      }
    ],
    "画幅与景深": [
      {
        "keyword": "close-up",
        "comment": "特写",
        "remark": "针对脸部或关键部位的特写"
      },
      {
        "keyword": "cowboy shot",
        "comment": "过膝镜头",
        "remark": "经典的半身以上构图"
      },
      {
        "keyword": "full body",
        "comment": "全身像",
        "remark": "展示角色的完整体型"
      },
      {
        "keyword": "foreshortening",
        "comment": "透视缩短",
        "remark": "肢体夸张地伸向镜头，极具冲击力(SDXL强关联词)"
      },
      {
        "keyword": "dynamic angle",
        "comment": "动态视角",
        "remark": "极具动感的扭曲或倾斜镜头"
      },
      {
        "keyword": "dutch angle",
        "comment": "倾斜镜头",
        "remark": "画面发生一定角度的倾斜"
      }
    ]
  },
  "漫画与特效符号": {
    "漫画技法": [
      {
        "keyword": "comic panel",
        "comment": "多格漫画",
        "remark": "将画面分割为几个格子(SDXL十分有效)"
      },
      {
        "keyword": "action lines",
        "comment": "动作/冲击线",
        "remark": "角色身后带有集中线或速度线"
      },
      {
        "keyword": "speed lines",
        "comment": "速度线",
        "remark": "表现高速运动的线条特效"
      }
    ],
    "表情与状态": [
      {
        "keyword": "blushing",
        "comment": "脸红",
        "remark": "脸庞带有红晕"
      },
      {
        "keyword": "ahegao",
        "comment": "阿嘿颜",
        "remark": "极端情欲下的夸张表情"
      },
      {
        "keyword": "heavy breathing",
        "comment": "大口喘气",
        "remark": "呼吸急促的状态"
      },
      {
        "keyword": "saliva",
        "comment": "流口水",
        "remark": "嘴部拉丝或流出口水"
      },
      {
        "keyword": "sweat",
        "comment": "流汗",
        "remark": "基础的汗水表现"
      },
      {
        "keyword": "sweat drops",
        "comment": "大汗滴",
        "remark": "二次元夸张的大颗汗滴"
      },
      {
        "keyword": "shiny skin",
        "comment": "光泽皮肤",
        "remark": "皮肤表面泛着油光或水光"
      }
    ]
  }
};
