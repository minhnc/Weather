import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDebounce } from "@uidotdev/usehooks";
import { fetchLocations } from '@/api/weather';
import { LOCATION } from '@/types/weather';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [locations, setLocations] = useState<Array<LOCATION>>([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<TextInput>(null)

  const bg = showSearch ? 'bg-slate-900 opacity-90' : 'transparent'
  const icon = showSearch ? 'close' : 'search1'
  const searchStyle = showSearch ? 'opacity-100' : 'opacity-0'

  const toggleSearch = (isSearching?: boolean) => {
    searchRef.current?.clear()

    if (isSearching === undefined) {
      isSearching = !showSearch
    } else {
      setLocations([])
    }

    setShowSearch(isSearching)

    setTimeout(() => {
      isSearching ? searchRef.current?.focus() : searchRef.current?.blur()
    }, 5)
  }

  useEffect(() => {
    const doSearch = async () => {
      if ((debouncedSearchTerm ?? '').length < 2) return

      const locations = await fetchLocations(debouncedSearchTerm)
      setLocations(locations)
    }

    doSearch()
  }, [debouncedSearchTerm]);

  return (
    <View className='relative h-16 mx-2'>
      <View className={`flex-1 flex-row w-full p-2 justify-end items-center rounded-full ${bg}`}>
        <TextInput
          className={`flex-1 h-16 p-4 text-pretty text-white ${searchStyle}`}
          editable={showSearch}
          placeholder='Search city'
          placeholderTextColor={'gray'}
          ref={searchRef}
          textAlignVertical='center'
          onBlur={() => toggleSearch(false)}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity
          onPress={() => toggleSearch()}
          className='rounded-full p-2 bg-slate-500 opacity-90'
        >
          <AntDesign name={`${icon}`} size={25} color="white" />
        </TouchableOpacity>
      </View>
      {showSearch && locations.length > 0 && (
        <FlatList
          className='absolute w-full max-h-[50%] top-16 rounded-3xl bg-gray-300'
          data={locations}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, index }) => {
            const border = index === locations.length - 1 ? '' : 'border-b-2'
            return (
              <TouchableOpacity className={`p-4 pb-2 ${border}`}>
                <Text className=''>{item.name}, {item.country}</Text>
              </TouchableOpacity>
            )
          }}
        />
      )}
    </View>
  )
}

export default Search