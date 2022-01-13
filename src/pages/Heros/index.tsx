import React, { useState } from 'react';
import { AtGrid, AtSearchBar, AtTabs } from 'taro-ui';
import { ScrollView, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { HeroItem, HeroListItem } from '@/interfaces';
import { getStorage } from '@/utils';
import { DiffTabList, RolesMap, RolesTabList } from '@/utils/constants';
import './index.scss';

const Heros = () => {
  const [currentDiff, setCurrentDiff] = useState<number>(0);
  const [currentRole, setCurrentRole] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const heros: HeroItem[] = getStorage('heros', true);

  /**
   * 点击英雄
   * @param item 英雄详情
   */
  const onItemClick = (item: HeroListItem) => {
    Taro.navigateTo({ url: `/pages/HeroDetail/index?id=${item.heroId}` });
  };

  return (
    <View className="heros">
      <AtSearchBar
        value={search}
        placeholder="支持中英文名称搜索"
        onChange={(v) => {
          console.log('onChange', v);
          setSearch(v);
        }}
      />
      <AtTabs className="tabs-roles" current={currentRole} scroll tabList={RolesTabList} onClick={setCurrentRole} />
      <AtTabs className="tabs-diff" current={currentDiff} scroll tabList={DiffTabList} onClick={setCurrentDiff} />
      <ScrollView className="scroll-view" enableBackToTop scrollY scrollWithAnimation>
        <AtGrid
          className="heros-list"
          columnNum={4}
          hasBorder={false}
          data={heros
            .filter((el) => [el.alias, el.name, el.title].some((n) => n.includes(search)))
            .filter((el) => (currentRole === 0 ? true : el.roles.includes(RolesMap[currentRole])))
            .filter((el) => (currentDiff === 0 ? true : el.difficultyL === String(currentDiff)))
            .map((el) => ({ image: el.avatar, value: el.name, ...el }))}
          onClick={onItemClick}
        />
      </ScrollView>
    </View>
  );
};

export default Heros;
