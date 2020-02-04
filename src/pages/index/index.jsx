import Taro from '@tarojs/taro'
import { AtForm, AtRadio, AtButton, AtCard, AtTextarea } from 'taro-ui'
import { View, Text, Picker } from "@tarojs/components";

export default class Index extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      value: '',
      selectorChecked: '领外卖',
      selector: ['领外卖','取快递','其它']
  }
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  onSubmit(event) {
    console.log(event)
  }

  onReset(event) {
    console.log(event)
  }

  render() {
    return (
        <View style={{position: 'absolute', height: '800PX',background: 'linear-gradient(blue, 10%, pink)'}}>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
          customStyle={{ backgroundColort: 'transparent', height: '100%', marginTop: "80PX"}}
        >
          <AtCard
            title='填写需求'
            customStyle={{height: '100%',background: 'linear-gradient(blue, 10%, pink)'}}
          >
          <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
            <View className='picker'>
              我要：<Text style={{color: "red"}}>{this.state.selectorChecked}</Text>
            </View>
          </Picker>
            <Text>填写详细信息</Text>
            <AtTextarea value='' placeholder='请填写完整的相关信息' />
            <AtButton customStyle={{marginTop: '20PX'}} formType='submit'>提交</AtButton>
          </AtCard>

        </AtForm>
        </View>
    )
  }
}