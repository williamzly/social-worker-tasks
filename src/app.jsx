import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'

import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
        'pages/class/classpage'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      custom: false,
      color: "#9b9b9b",
      selectedColor: "#34b0b0",
      backgroundColor: "white",
      borderStyle: 'white',
      list: [{
        pagePath: "pages/index/index",
        iconPath: "./assets/ico_tabar_home_normal.png",
        selectedIconPath: "./assets/ico_tabar_home_pressed.png",
        text: "发布需求",
      }, {
        pagePath: "pages/class/classpage",
        iconPath: "./assets/ico_tabar_class_normal.png",
        selectedIconPath: "./assets/ico_tabar_class_pressed.png",
        text: "解决需求",
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
