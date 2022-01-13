/** 基础url */
export const baseUrl = 'https://game.gtimg.cn/images/lgamem';

export const videoUrl = `${baseUrl}/video`;

/** 英雄列表 */
export const herosList = `${baseUrl}/act/lrlib/js/heroList/hero_list.js`;

/**
 * 英雄详情
 * @param id 英雄id
 */
export const heroDetail = (id: React.Key) => `${baseUrl}/act/lrlib/js/hero/${id}.js`;

/**
 * 英雄背景视频
 * @param id 英雄id
 */
export const heroVideoUrl = (id: React.Key) => `${videoUrl}/background/${id}.mp4`;

/**
 * 获取英雄技能视频地址
 * @param id 英雄id
 * @param spellId 技能id
 * @returns 英雄技能视频地址
 */
export const heroSpellVideoUrl = (id: React.Key, spellId: React.Key) =>
  `${videoUrl}/skill/${id}_${spellId === 4 ? 'R' : spellId}.mp4`;

/**
 * 皮肤
 * @param id 英雄id
 */
export const skins = `${baseUrl}/act/lrlib/js/skins/skins.js`;
