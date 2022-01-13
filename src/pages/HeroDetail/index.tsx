import React, { useEffect, useState } from 'react';
import { AtFab } from 'taro-ui';
import { Image, ScrollView, Swiper, SwiperItem, Text, Video, View } from '@tarojs/components';
import { getHeroDetail } from '@/api';
import { heroSpellVideoUrl, heroVideoUrl } from '@/api/urls';
import { LevelLine, Loading } from '@/components';
import { HeroItem, HeroDetailResponse, SpellProps, SkinItem } from '@/interfaces';
import { getStorage, useParams } from '@/utils';
import { RolesIconMap, SpellsMap } from '@/utils/constants';
import './index.scss';

/**
 * 视频通用配置
 */
const videoConf = {
  autoplay: true,
  controls: false,
  loop: true
};

const HeroDetail = () => {
  const [currentSkinIndex, setCurrentSkinIndex] = useState<number>(0);
  const [currentSpellIndex, setCurrentSpellIndex] = useState<number>(0); // 选中技能index
  const [hero, setHero] = useState<HeroItem>();
  const [loading, setLoading] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [showAtFab, setShowAtFab] = useState<boolean>(false);
  const [showBgImg, setShowBgImg] = useState<boolean>(false); // 视频错误，显示默认图片
  const [spells, setSpells] = useState<SpellProps[]>([]);
  const { id = '10001' } = useParams();
  const skins = id ? getStorage('skins').filter((el: SkinItem) => el.heroId === id) : [];
  const currentSkin = skins[currentSkinIndex] || {};

  useEffect(() => {
    setLoading(true);
    getHeroDetail(id)
      .then((data: HeroDetailResponse) => {
        setHero(data.hero || {});
        setSpells(data.spells || []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <ScrollView
      scrollY
      scrollWithAnimation
      className="hero-detail"
      scrollTop={scrollTop}
      onScroll={(e) => setShowAtFab(e.detail.scrollTop > 200)}
    >
      <AtFab className={showAtFab ? '' : 'hide'} size="small" onClick={() => setScrollTop(Math.random())}>
        <View className="at-fab__icon at-icon at-icon-chevron-up" />
      </AtFab>
      <View className="section info">
        {showBgImg ? (
          <Image className="bg-image" src={hero?.poster || ''} />
        ) : (
          <Video
            {...videoConf}
            className="video"
            src={heroVideoUrl(hero?.heroId || '')}
            onError={() => setShowBgImg(true)}
          />
        )}
        <View className="panel">
          <View className="names">
            <View className="name">{hero?.name}</View>
            <View className="full-name">{hero?.title}</View>
          </View>
          <View className="role-diff">
            <View className="role">
              {hero?.roles.map((r) => (
                <Image className="icon" key={r} src={RolesIconMap[r]} />
              ))}
              <View className="label">{hero?.roles.join(', ')}</View>
            </View>
            <View className="divider" />
            <View className="diff">
              <View className="row">
                <Text className="label">操作难度：</Text>
                <LevelLine level={hero?.difficultyL} />
              </View>
              <View className="row">
                <Text className="label">支援能力：</Text>
                <LevelLine backgroundColor="#548CFF" level={hero?.assistL} />
              </View>
              <View className="row">
                <Text className="label">伤害能力：</Text>
                <LevelLine backgroundColor="#D9534F" level={hero?.damage} />
              </View>
              <View className="row">
                <Text className="label">生存能力：</Text>
                <LevelLine backgroundColor="#95CD41" level={hero?.surviveL} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="section spells">
        <View className="title">
          <View className="decorate-line-horizontal">
            <View className="decorate-line" />
            <View className="border-line" />
          </View>
          <View className="label">技能介绍</View>
        </View>
        <Video {...videoConf} className="video" src={heroSpellVideoUrl(hero?.heroId || '', currentSpellIndex)} />
        <View className="spells-scroll">
          {spells.map((el, ind) => (
            <View
              className={`spell-item${ind === currentSpellIndex ? ' active' : ''}`}
              key={el.spellId}
              onClick={() => setCurrentSpellIndex(ind)}
            >
              <Image className="icon" src={el.abilityIconPath} />
            </View>
          ))}
        </View>
        <View className="spells-name">{`${SpellsMap[currentSpellIndex]}：${spells[currentSpellIndex]?.name}`}</View>
        <View className="spells-desc">{spells[currentSpellIndex]?.description}</View>
      </View>
      <View className="section skins">
        <View className="title">
          <View className="decorate-line-horizontal">
            <View className="decorate-line" />
            <View className="border-line" />
          </View>
          <View className="label">皮肤</View>
        </View>
        <Swiper className="skins-swiper" circular indicatorDots onChange={(e) => setCurrentSkinIndex(e.detail.current)}>
          {skins.map((el) => (
            <SwiperItem key={el.heroId}>
              <Image className="skins-img" src={el.poster} />
            </SwiperItem>
          ))}
        </Swiper>
        <View className="skins-name">
          名称：<Text className="text">{currentSkin.name}</Text>
        </View>
        <View className="skins-quality">品质：{currentSkin.quality}</View>
        <View className="skins-name">简介：</View>
        <ScrollView className="skins-desc" scrollY scrollWithAnimation>
          {currentSkin.description || '暂无简介'}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HeroDetail;
