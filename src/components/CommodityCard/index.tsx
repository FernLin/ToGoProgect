import { useEffect } from 'react';
import Taro from "@tarojs/taro";
import { View, Image } from '@tarojs/components'
import { observer } from 'mobx-react'
import { AtButton, AtTabBar } from 'taro-ui';
import { useStores } from '../../hooks/use-stores';

import './index.scss'

const CommodityCard = observer(() => {


	return (
		<View className='container'>
      <Image
        style='width: 300px;height: 100px;background: #fff;'
        src='nerv_logo.png'
      />
			<View>
        <View></View>
        <View></View>
        <View></View>
      </View>
		</View>
	)
})

export default CommodityCard
