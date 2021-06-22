import React, { useEffect } from 'react'
import Taro from "@tarojs/taro";
import { View } from '@tarojs/components'
import { observer } from 'mobx-react'
import { AtTabBar } from 'taro-ui'
import { useStores } from '../../hooks/use-stores'

import './index.scss'

export const My = observer(() => {

  const { tabStore } = useStores()

  useEffect(() => {}, []);

  const handleClick = (value) => {
    if (value === 1) return;
    Taro.switchTab({
      url: "/pages/home/index"
    });
    tabStore.changeTab(value);
  }

  const { tabIndex } = tabStore

  return (
    <View className='homeContainer'>
      <View>我的页面</View>
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

export default My
