import 坦克 from '@/assets/坦克.png';
import 刺客 from '@/assets/刺客.png';
import 战士 from '@/assets/战士.png';
import 法师 from '@/assets/法师.png';
import 射手 from '@/assets/射手.png';
import 辅助 from '@/assets/辅助.png';

/**
 * 英雄定位
 */
export const RolesTabList = [
  { title: '定位不限', key: 'ALL' },
  { title: '坦克', key: 'TANK' },
  { title: '刺客', key: 'ASSASSIN' },
  { title: '战士', key: 'FIGHTER' },
  { title: '法师', key: 'MAGE' },
  { title: '射手', key: 'MARKSMAN' },
  { title: '辅助', key: 'SUPPORT' }
];

/**
 * 英雄定位map
 */
export const RolesMap = {
  0: '定位不限',
  1: '坦克',
  2: '刺客',
  3: '战士',
  4: '法师',
  5: '射手',
  6: '辅助'
};

/**
 * 英雄定位icon图
 */
export const RolesIconMap = {
  坦克,
  刺客,
  战士,
  法师,
  射手,
  辅助
};

/**
 * 上手难度
 */
export const DiffTabList = [{ title: '难度不限' }, { title: '简单' }, { title: '中等' }, { title: '困难' }];

/**
 * 上手难度map
 */
export const DiffMap = {
  1: '简单',
  2: '中等',
  3: '困难'
};

/**
 * 技能名称
 */
export const SpellsMap = {
  0: '被动',
  1: '1技能(Q)',
  2: '2技能(W)',
  3: '3技能(E)',
  4: '4技能(R)'
};
