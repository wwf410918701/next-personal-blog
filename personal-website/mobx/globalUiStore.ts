import { makeAutoObservable } from "mobx";
import RootStore from "./rootStore";

class globalUiStore {
  openDrawer = false
  upLoadingImg = false
  rootStore: RootStore | null = null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false }, { autoBind: true })
    this.rootStore = rootStore
  }
}

export default globalUiStore;