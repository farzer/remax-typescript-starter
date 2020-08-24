import React from 'react';
import { View } from 'remax/wechat';
import { TStore } from '@/hooks/useStores';
import { Observer, observer } from 'mobx-react-lite';
import { withStore } from '@/services/with-store';
import { injectStore } from '@/services/inject-store';
import TestWrap from '@/components/TextWrap';

interface MyPageProps {
  userStore: TStore['userStore'];
}

class MyPage extends React.Component<MyPageProps> {
  changeName = () => {
    const hel = `${Math.random() * 1000}`;
    this.props.userStore.updateUserInfo(hel);
  };

  render() {
    return (
      <Observer>
        {() => {
          return (
            <View>
              <View>
                {this.props.userStore.name ? this.props.userStore.name : '位置'}
              </View>
              <View>测试</View>
              <View>test:{this.props.userStore.test}</View>
              <View onClick={this.changeName}>dianji</View>
              <TestWrap test="222" />
            </View>
          );
        }}
      </Observer>
    );
  }
}

export default injectStore('userStore', MyPage);
