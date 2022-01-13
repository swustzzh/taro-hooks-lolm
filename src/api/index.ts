import Taro from '@tarojs/taro';
import { HeroListItem, HeroListResponse, SkinItem, SkinListResponse } from '@/interfaces';
import { obj2arr, getStorage, setStorage } from '@/utils';
import * as urls from './urls';

/**
 * Taro get请求
 * @param url 请求地址
 * @param options 其他配置
 */
export function TaroGet(url: string, options?: Partial<Taro.request.Option>) {
  return new Promise((resolve, reject) => {
    Taro.request({
      url,
      success: (res) => resolve(res.data),
      fail: (err) => {
        Taro.showToast({ icon: 'error', title: err.errMsg || '未知错误' });
        reject(err.errMsg);
      },
      ...options
    });
  });
}

/**
 * 获取所有英雄
 */
export function getHeros(): Promise<HeroListItem[]> {
  // NOTE: heroList对象转化成了数组
  return new Promise((resolve, reject) => {
    TaroGet(urls.herosList)
      .then((res: HeroListResponse) => {
        if (res.fileTime !== getStorage('heros_fileTime')) {
          const heros = obj2arr(res.heroList || {}) as HeroListItem[];
          setStorage('heros_fileTime', res.fileTime);
          setStorage('heros', heros);
          resolve(heros);
        } else {
          resolve([]);
        }
      })
      .catch(() => reject([]));
  });
}

/**
 * 获取英雄详情
 */
export function getHeroDetail(id: React.Key) {
  return TaroGet(urls.heroDetail(id));
}

/**
 * 获取所有皮肤
 */
export function getSkins(): Promise<SkinItem[]> {
  // NOTE: skinList对象转化成了数组
  return new Promise((resolve, reject) => {
    TaroGet(urls.skins)
      .then((res: SkinListResponse) => {
        if (res.fileTime !== getStorage('skins_fileTime')) {
          const skins = obj2arr(res.skinList) as SkinItem[];
          setStorage('skins_fileTime', res.fileTime);
          setStorage('skins', skins);
          resolve(skins);
        } else {
          resolve([]);
        }
      })
      .catch(() => reject([]));
  });
}
