import {
  getStorageSync,
  setStorageSync,
  removeStorageSync,
  clearStorageSync,
  getStorageInfoSync,
} from 'remax/wechat';

export class Storage<T extends StoreMap> {
  redisMap: Map<keyof T, number> = new Map();

  get<K extends keyof T>(key: K, defaultValue?: T[K]): T[K] {
    const val = getStorageSync(key as string);
    if (val === void 0 && defaultValue !== void 0) {
      return defaultValue;
    }
    return val;
  }

  set<K extends keyof T, V extends T[K]>(
    key: K,
    value: V,
    expireTime?: number
  ): void {
    if (expireTime !== void 0) {
      const now = new Date().getTime();
      this.redisMap.set(key, now + expireTime);
    } else if (this.redisMap.get(key) !== void 0) {
      this.redisMap.delete(key);
    }
    return setStorageSync(key as string, value);
  }

  remove(key: keyof T): void {
    removeStorageSync(key as string);
  }

  all(): T {
    const { keys } = getStorageInfoSync();
    const store: T = {} as T;
    keys.forEach((key) => {
      store[key as keyof T] = this.get(key as keyof T);
    });
    return store;
  }

  clearAll(): void {
    clearStorageSync();
  }
}

const hotelStore = new Storage();

export default hotelStore;
