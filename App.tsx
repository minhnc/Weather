import "./assets/global.css"

import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useReactQueryDevTools } from '@dev-plugins/react-query';

import Home from '@/screens/Home';

const queryClient = new QueryClient()

export default function App() {
  useReactQueryDevTools(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Image
          className="absolute w-full h-full"
          blurRadius={50}
          source={require('assets/images/bg.png')}
        />
        <Home />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

