import { ActivityIndicator, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useQuery } from "react-query"

import Forecast from "@/components/Forecast"
import Forecasts from "@/components/Forecasts"
import Search from "@/components/Search"

import { fetchForecast } from "@/api/weather"

const Home = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: 'forecast',
    queryFn: fetchForecast
  })

  return (
    <View className='flex-1 justify-center items-center m-4'>
      {
        isLoading ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) :
          isError ? (
            <Text className="text-white font-extrabold">Something wrong...</Text>
          ) : (
            <Weather />
          )
      }
    </View>
  )
}

const Weather = () => (
  <SafeAreaView>
    <Search />
    <Forecast />
    <Forecasts />
  </SafeAreaView>
)

export default Home
