import * as React from 'react';
import { Observer } from 'mobx-react-lite';
import { View, Text } from 'remax/wechat';
import { withStore } from '@/services/with-store';
import { TStore } from '@/hooks/useStores';
import styles from './index.css';

interface IndexPageProps {
  store: TStore;
}

class IndexPage extends React.Component<IndexPageProps> {
  updateUserInfo = () => {
    const hel = `${Math.random() * 1000}`;
    this.props.store.userStore.updateUserInfo(hel);
  };

  render() {
    console.log(this.props.store.userStore.name);
    return (
      <Observer>
        {() => {
          return (
            <View className={styles.app}>
              <View className={styles.header}>
                <Text>
                  {this.props.store.userStore.name
                    ? this.props.store.userStore.name
                    : 'null'}
                </Text>
                <View>br</View>
                <Text onClick={this.updateUserInfo}>测试</Text>
              </View>
            </View>
          );
        }}
      </Observer>
    );
  }
}

export default withStore(IndexPage);
