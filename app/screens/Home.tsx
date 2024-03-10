import { ActivityIndicator, Text, View } from "react-native"
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
    <>
      {
        isLoading ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) :
          isError ? (
            <Text className="text-white font-extrabold">Something wrong...</Text>
          ) : <Weather />
      }
    </>
  )
}

const Weather = () => (
  <View className="flex-1 px-4">
    <Search />
    <Forecast />
    <Forecasts />
  </View>
)

export default Home
