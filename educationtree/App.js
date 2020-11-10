import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import PagesNavigator from './navigation/PagesNavigator'
import * as Font from 'expo-font'
export default class App extends Component {
    constructor (props) {
      super(props)
  
      this.state = {
        loadingFont: true
      }
  
      this._loadingFont = this._loadingFont.bind(this)
    }
  
    componentDidMount () {
      this._loadingFont()
    }
  
    async _loadingFont () {
      await Font.loadAsync({
        kanitLight: require('./assets/fonts/Kanit-Light.ttf'),
        kanitBlackItalic: require('./assets/fonts/Kanit-BlackItalic.ttf'),
        kanitBold: require('./assets/fonts/Kanit-Bold.ttf'),
      }),
  
      this.setState({ loadingFont: true })
    }
  
    render () {
      const { loadingFont } = this.state
  
      if (loadingFont) {
        return <PagesNavigator />
      }
    }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#191927',
    alignItems: 'center',
    justifyContent: 'center'
  },
});