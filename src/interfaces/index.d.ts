/**
 * 英雄列表项
 */
export interface HeroListItem {
  alias: string;
  /** 支援能力 */
  assistL: string;
  avatar: string;
  card: string;
  /** 点券价格 */
  couponprice: string;
  /** 上海 */
  damage: string;
  /** 操作难度 */
  difficultyL: string;
  heroId: string;
  /** 精萃价格 */
  highlightprice: string;
  intro: string;
  /** 是否为周免英雄 */
  isWeekFree: string;
  lane: string;
  /** 简称 */
  name: string;
  poster: string;
  roles: string[];
  /** 生存能力 */
  surviveL: string;
  tags: string;
  /** 中文名称 */
  title: string;
}

/**
 * 英雄列表接口响应
 */
export interface HeroListResponse {
  fileTime: string;
  heroList: object;
  version: string;
}

/**
 * 英雄详情
 */
export interface HeroItem extends HeroListItem {
  armor: string;
  armorperlevel: string;
  attack: string;
  attackperlevel: string;
  attackspeed: string;
  attackspeedperlevel: string;
  crit: string;
  durability: string;
  growthfix1: string;
  growthfix2: string;
  growthfix3: string;
  growthfix4: string;
  growthfix5: string;
  growthfix6: string;
  growthfix7: string;
  growthfix8: string;
  growthfix9: string;
  growthfix10: string;
  growthfix11: string;
  growthfix12: string;
  growthfix13: string;
  growthfix14: string;
  growthfix15: string;
  hp: string;
  hpperlevel: string;
  hpregen: string;
  hpregenperlevel: string;
  magic: string;
  magicperlevel: string;
  mobility: string;
  mobilityperlevel: string;
  movespeed: string;
  mp: string;
  mpperlevel: string;
  mpregen: string;
  mpregenperlevel: string;
  spellblock: string;
  spellblockperlevel: string;
}

/**
 * 英雄详情响应接口
 */
export interface HeroDetailResponse {
  hero: HeroItem;
  spells: SpellProps[];
}

/**
 * 皮肤列表接口响应
 */
export interface SkinListResponse {
  fileTime: string;
  skinList: object;
  version: string;
}

/**
 * 皮肤属性
 */
export interface SkinItem {
  briefIntro: string;
  /** 皮肤card图片 */
  card: string;
  couponPrice: string;
  description: string;
  /** 皮肤icon */
  headIconPic: string;
  heroId: string;
  name: string;
  /** 皮肤海报 */
  poster: string;
  quality: string;
  qualityIcon: string;
  sExt1: string;
  sExt2: string;
  sExt3: string;
  sExt4: string;
  sExt5: string;
  /** 皮肤编号 */
  skinId: string;
  specialTitle: string;
  vedioPath: string;
}

/**
 * 英雄技能属性
 */
export interface SpellProps {
  /** 技能图标 */
  abilityIconPath: string;
  /** 技能视频 */
  abilityVideoPath: string;
  cdtime: string;
  costtype: string;
  costvalue: string;
  /** 技能描述 */
  description: string;
  detail: string[];
  heroId: string;
  /** 技能名称 */
  name: string;
  spellId: string;
  spellKey: string;
  variTypeNum: string;
}
