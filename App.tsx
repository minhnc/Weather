import { Image, SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from '@/screens/Home';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View className='flex-1 relative'>
        <StatusBar style="light" />
        <Image
          className="absolute w-full h-full"
          blurRadius={50}
          source={require('assets/images/bg.png')}
        />
        <View className="flex-1 justify-center items-center">
          <Home />
        </View>
      </View>
    </QueryClientProvider>
  );
}

