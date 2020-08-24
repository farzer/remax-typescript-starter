import { observable, action, computed } from 'mobx';
import hotelStore from '@/services/storage';

const initUserInfo: UserInfo | null = hotelStore.get('USER_INFO') || null;

export class UserStore {
  @observable name?: string = initUserInfo ? initUserInfo.name : void 0;

  @action
  updateUserInfo(str: string) {
    if (this.name === void 0) {
      this.name = 'huaen';
    } else {
      this.name = str;
    }
    console.log(this.name);
  }

  @computed
  get test() {
    return `test${this.name}`;
  }
}
