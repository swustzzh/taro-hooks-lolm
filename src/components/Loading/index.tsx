import React from 'react';
import { View, Image } from '@tarojs/components';
import url from '@/assets/loading.gif';
import './index.scss';

const Loading = () => (
  <View className="loading">
    <Image src={url} className="img" />
  </View>
);

export default Loading;
