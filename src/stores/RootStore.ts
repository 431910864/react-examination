import { createContext } from 'react';
import AppStore from './AppStore';
import PlayerStore from './PlayerStore';

class RootStore {
    appStore = new AppStore(this);
    playerStore = new PlayerStore(this);
}

export const RootStoreContext = createContext(new RootStore());
export default RootStore;