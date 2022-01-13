import { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { getHeros, getSkins } from '@/api';
import './app.scss';

/**
 * 更新所有英雄以及皮肤, 存储到本地
 */
async function updHerosSkins() {
  Promise.all([getHeros(), getSkins()]).then(([heros, skins]) => {
    if (heros.length) {
      Taro.setStorageSync('heros', JSON.stringify(heros || []));
    }
    if (skins.length) {
      Taro.setStorageSync('skins', JSON.stringify(skins || []));
    }
  });
}

declare type AppProps = Readonly<{}> & Readonly<{ children?: React.ReactNode }>;

const App = (props: AppProps) => {
  useEffect(() => {
    updHerosSkins();
  }, []);
  return props.children;
};

export default App;
