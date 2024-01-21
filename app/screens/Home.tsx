import { ActivityIndicator, Text } from "react-native"
import { useQuery } from "react-query"

import { fetchForecast } from "@/api/weather"

import Forecast from "@/components/Forecast"
import Forecasts from "@/components/Forecasts"
import Search from "@/components/Search"

const Home = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: 'forecast',
    queryFn: fetchForecast
  })

  return (
    <>
      {isLoading ?
        <ActivityIndicator size={'large'} color={'white'} />
        :
        isError ? <Text>Something wrong...</Text> : <Weather />
      }
    </>
  )
}

const Weather = () => (
  <>
    <Search />
    <Forecast />
    <Forecasts />
  </>
)

export default Home
