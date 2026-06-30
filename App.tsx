import { ApolloProvider } from '@apollo/client/react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { client } from './src/graphql/client';
import Routes from './src/routes';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
enableScreens();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Provider store={store}>
          <Routes />
        </Provider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

export default App;
