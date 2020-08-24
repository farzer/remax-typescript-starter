import React from 'react';
import { View } from 'remax/wechat';
import { TStore } from '@/hooks/useStores';
import { injectStore } from '@/services/inject-store';

interface TestWrapProp {
  test: string;
  userStore: TStore['userStore'];
}

class TestWrap extends React.Component<TestWrapProp> {
  render() {
    return (
      <View>
        hahahah {this.props.test} {this.props.userStore.name}
      </View>
    );
  }
}

export default injectStore('userStore', TestWrap);
