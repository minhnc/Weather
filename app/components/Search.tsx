import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Search() {
  const [showSearch, toggleSearch] = useState(false);
  const bg = showSearch ? 'bg-slate-900 opacity-90' : 'transparent'
  const icon = showSearch ? 'close' : 'search1'

  return (
    <View className='relative h-16 mx-2'>
      <View className={`flex-row w-full p-2 justify-end items-center rounded-full ${bg}`}>
        <TouchableOpacity
          onPress={() => toggleSearch(prev => !prev)}
          className='rounded-full p-2 bg-slate-500 opacity-90'
        >
          <AntDesign name={`${icon}`} size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Search