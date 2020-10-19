//Navigation from https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ
// (Files are App, AppNavigator, parts of home(I adapted some of it) and global)
import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home'
import { AppLoading } from "expo";
import AppNavigator from './routes/AppNavigator';


const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
  '04b_19': require('./assets/fonts/FB.ttf')
});



function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded) {
    return <AppNavigator />;
  }
  else {
    return (
      <AppLoading
        startAsync = {getFonts}
        onFinish = {() => setFontsLoaded(true)}
      />
    )
  }
}

export default App;