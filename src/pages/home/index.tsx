import { useEffect } from 'react';
import Taro from "@tarojs/taro";
import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
import { AtButton, AtTabBar } from 'taro-ui';
import { useStores } from '../../hooks/use-stores';
import CommodityCard from '../../components/CommodityCard';

import './index.scss'
import api from '../../services/api';

const Home = observer(() => {

  const { tabStore, counterStore } = useStores();
  const { counter } = counterStore;
  const { tabIndex } = tabStore;

  useEffect(() => {
    // api.get('getCommodityList').then(({ data }) => {
    //   console.log('商品列表信息 =》', data)
    // })
  }, [counter]);

  const handleClick = (value) => {
    if (value === 0) return;
    Taro.switchTab({
      url: "/pages/my/index"
    });
    tabStore.changeTab(value);
  }

  return (
    <View className='index'>
      <View>首页</View>
      <CommodityCard />
      <AtTabBar
        fixed
        tabList={[
          { title: '首页', iconType: 'home' },
          { title: '个人', iconType: 'user' }
        ]}
        onClick={handleClick}
        current={tabIndex}
      />
    </View>
  )
})

export default Home
