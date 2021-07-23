import { useEffect } from 'react';
import Taro from "@tarojs/taro";
import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
import { AtButton, AtTabBar } from 'taro-ui';
import { useStores } from '../../hooks/use-stores';

import './index.scss'

const My = observer(() => {

  const { tabStore, counterStore } = useStores();
  const { counter } = counterStore;
  const { tabIndex } = tabStore;

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const handleClick = (value) => {
    if (value === 1) return;
    Taro.switchTab({
      url: "/pages/home/index"
    });
    tabStore.changeTab(value);
  }

  return (
    <View className='index'>
        <View>个人</View>
        <AtButton type='primary' onClick={() => counterStore.increment()}>自增</AtButton>
        <AtButton type='primary' onClick={() => counterStore.decrement()}>自减</AtButton>
        <AtButton type='primary' onClick={() => counterStore.incrementAsync()}>Add Async</AtButton>
        <Text>{counter}</Text>
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

export default My
