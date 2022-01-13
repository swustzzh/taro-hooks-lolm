import Taro from '@tarojs/taro';

/**
 * 参数对象转化为路由字符串
 * @param obj 路由参数对象
 * @returns a=1&b=2
 */
export const obj2str = (obj: any) =>
  Object.entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');

/**
 * 参数对象转化为数组
 */
export const obj2arr = (obj: any) => Object.entries(obj || {}).map(([, v]) => v);

/**
 * 跳转到指定页面
 * @param url
 */
export const pageJump = (url: string) => Taro.navigateTo({ url });

/**
 * 获取路由参数对象
 * @returns 路由参数对象
 */
export const useParams = () => Taro.getCurrentInstance().router?.params || {};

/**
 * 同步获取storage内容
 * @param key 存储的key
 * @param parse 是否解析
 */
export const getStorage = (key: string, parse?: boolean) => {
  const item = Taro.getStorageSync(key);
  return parse ? JSON.parse(item) : item;
};

/**
 * 同步存储storage
 * @param key 存储的key
 * @param data 存储内容
 */
export const setStorage = (key: string, data: any) => Taro.setStorageSync(key, data);
