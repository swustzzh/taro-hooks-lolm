import React from 'react';
import { View } from '@tarojs/components';
import './index.scss';

interface LevelLineProps {
  /** 难度系数 */
  level?: string;
  /** 线条颜色 */
  backgroundColor?: string;
}

/** 可视化组件，展示操作难度，支援能力 */
const LevelLine = ({ level = '1', backgroundColor = '#fff' }: LevelLineProps) => (
  <View className="line">
    {[0, 1, 2].map((ind) => (
      <View className={`cd-bg${ind < Number(level) ? ' on' : ''}`} key={ind}>
        <View className="cd-inner" style={{ backgroundColor }} />
      </View>
    ))}
  </View>
);

export default LevelLine;
