
import { ApolloProvider } from '@apollo/client/react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import { client } from './src/graphql/client';
import Home from './src/screens/Home';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar
            barStyle={
              isDarkMode
                ? 'light-content'
                : 'dark-content'
            }
          />
          <Home/>
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}


export default App;
