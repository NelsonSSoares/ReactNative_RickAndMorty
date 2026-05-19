import { ApolloProvider } from '@apollo/client/react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { client } from './src/graphql/client';
import Routes from './src/routes';
import { enableScreens } from 'react-native-screens';
enableScreens();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Routes />
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

export default App;
