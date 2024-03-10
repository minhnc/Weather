import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

  const selectLocation = (location: LOCATION) => {
    toggleSearch(false)
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
    <View className='h-16 z-50'>
      <View className={`flex-row w-full p-2 justify-end items-center rounded-full ${bg}`}>
        <TextInput
          className={`flex-1 h-12 p-4 text-pretty text-white ${searchStyle}`}
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
        <View className='relative flex-1'>
          <ScrollView className='absolute flex-1 w-full h-fit max-h-[340px] top-2 rounded-3xl bg-gray-300' showsVerticalScrollIndicator={false}>
            {locations.map((location, index) => {
              const border = index === locations.length - 1 ? '' : 'border-b-2'
              return (
                <TouchableOpacity key={location.id} className={`p-4 pb-2 ${border}`} onPress={() => selectLocation(location)}>
                  <Text className=''>{location.name}, {location.country}</Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
      )}
    </View>
  )
}

export default Search