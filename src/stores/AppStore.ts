import { computed } from 'mobx';
import RootStore from './RootStore';

export default class AppStore {
    @computed get title(): string {
        return 'NBA Players';
    }
    constructor(private rootStore: RootStore) { }
}