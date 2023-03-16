export default class BrowserStorage {
  constructor(private _storage: Storage = window.localStorage) {}

  get<V>(key: string, defaultValue: V): V {
    const value = this._storage.getItem(key);
    if (value === null) {
      return defaultValue;
    }
    return JSON.parse(value) as V;
  }

  set<V>(key: string, value: V): void {
    this._storage.setItem(key, JSON.stringify(value));
  }

  delete(key: string): void {
    this._storage.removeItem(key);
  }
}
