import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { IMAGES } from '@/constants/weather'

function renderForeCast() {
  return (
    <View className='flex justify-between items-center bg-violet-700 rounded-3xl p-4 opacity-80'>
      <Image source={IMAGES.Sunny} className='size-8' style={{ resizeMode: 'contain' }} />
      <Text className='text-white'>Monday</Text>
      <Text className='text-white font-bold'>28 &#176;</Text>
    </View>
  )
}

function Forecasts() {
  return (
    <View className='flex h-40 gap-4'>
      {/* Title */}
      <View className='flex-row gap-4'>
        <AntDesign name='calendar' size={20} color="white" />
        <Text className='text-white font-extrabold'>Daily Forecast</Text>
      </View>

      {/* forecast list */}
      <FlatList
        contentContainerClassName='flex gap-4'
        data={[
          {
            id: 1
          },
          {
            id: 2
          },
          {
            id: 3
          },
          {
            id: 4
          },
          {
            id: 5
          },
          {
            id: 6
          },
        ]}
        horizontal
        renderItem={() => (
          renderForeCast()
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Forecasts