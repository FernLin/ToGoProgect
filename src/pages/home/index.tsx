import React from 'react';
import Taro from "@tarojs/taro";
import { View } from '@tarojs/components';
import { observer } from 'mobx-react';
import { AtButton, AtTabBar } from 'taro-ui';
import { useStores } from '../../hooks/use-stores';
import api from '../../services/api';

import './index.scss'

export const Home = observer(() => {

  const { tabStore, productStore } = useStores();
  const { tabIndex } = tabStore;

  const handleClick = (value) => {
    if (value === 0) return;
    Taro.switchTab({
      url: "/pages/my/index"
    });
    tabStore.changeTab(value);
  }

  const getData = () => {
    api.get('products').then((res) => {
      productStore.productList = [...productStore.productList, ...res.data];
    })
  };

  return (
    <View className='homeContainer'>
      <View>我是首页</View>
      <AtButton type='primary' onClick={getData}>获取数据</AtButton>
      <View>获取的数据在这：{JSON.stringify(productStore.productList)}</View>
      <AtTabBar
        fixed
        tabList={[
          { title: '首页', iconType: 'home' },
          { title: '我的', iconType: 'user' }
        ]}
        onClick={handleClick}
        current={tabIndex}
      />
    </View>
  )
})

export default Home
