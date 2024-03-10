import React from 'react'
import { Image, Text, View } from 'react-native'
import { IMAGES } from '@/constants/weather'

function Forecast() {
  return (
    <View className='flex-1 justify-around items-center'>
      {/* City, Country */}
      <View className='flex-row'>
        <Text className='text-white font-extrabold'>Mel, </Text>
        <Text className='text-white'>Au</Text>
      </View>

      {/* Image | Degree Celsius | Status */}
      <Image source={IMAGES.Cloudy} className='size-64' style={{ resizeMode: 'contain' }} />
      <Text className='text-white text-8xl font-extrabold'>32 &#176;</Text>
      <Text className='text-white text-2xl font-light'>Cloudy</Text>

      {/* Horizontal Info */}
      <View className='flex flex-row justify-between w-full'>
        <View className='flex-row items-center gap-2'>
          <Image source={require('assets/icons/wind.png')} className='size-6' />
          <Text className='text-white text-xl'>31km</Text>
        </View>
        <View className='flex-row items-center gap-2'>
          <Image source={require('assets/icons/drop.png')} className='size-6' />
          <Text className='text-white text-xl'>31km</Text>
        </View>
        <View className='flex-row items-center gap-2'>
          <Image source={require('assets/icons/sun.png')} className='size-6' />
          <Text className='text-white text-xl'>31km</Text>
        </View>
      </View>
    </View>
  )
}

export default Forecast