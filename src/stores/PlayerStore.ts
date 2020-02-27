import { computed, observable, action } from 'mobx';
import RootStore from './RootStore';
import { PlayersByIdTypes, PlayersByIdSelectTypes } from './PlayerStoreTypes';

export default class PlayerStore {
    @observable name: string | undefined = undefined;
    @observable pageSize: number = 5;
    @observable pageIndex: number = 1;
    @observable playersByIdSelectValue: PlayersByIdSelectTypes = {
        label: 'All',
        value: 'All',
    };
    @observable playersByIdSelect: Array<PlayersByIdSelectTypes> = [ this.playersByIdSelectValue, {
        label: 'SF',
        value: 'SF',
    }, {
        label: 'PG',
        value: 'PG',
    }];
    @observable playersById: Array<PlayersByIdTypes> = [
        {
            name: 'LeBron James',
            team: 'LOS ANGELES LAKERS',
            position: 'SF',
            starred: true,
        },
        {
            name: 'Kevin Duran',
            team: 'GOLDEN STATE WARRIORS',
            position: 'SF',
            starred: false,
        },
        {
            name: 'Anthony Davis',
            team: 'NEW ORLEANS PELICANS',
            position: 'PF',
            starred: false,
        },
        {
            name: 'Stephen Curry',
            team: 'GOLDEN STATE WARRIORS',
            position: 'PG',
            starred: false,
        },
        {
            name: 'James Harden',
            team: 'HOUSTON ROCKETS',
            position: 'SG',
            starred: false,
        },
        {
            name: 'Kawhi Leonard',
            team: 'TORONTO RAPTORS',
            position: 'SF',
            starred: false,
        },
    ];
    constructor(private rootStore: RootStore) { }
    @computed get isMaxSize() {
        return this.playersFilterList.length < this.size;
    }
    @computed get size() {
        return this.pageSize * this.pageIndex;
    }
    @computed get playersFilterList() {
        const { value } = this.playersByIdSelectValue;
        return this.playersById.filter((item, index) => {
            return (item.position === value || value === 'All');
        });
    }
    @computed get playersByIdList() {
        return this.playersFilterList.filter((item, index) => {
            return index < this.size;
        })
    }
    @action addPlayer(name: string | undefined) {
        const playersByIdItem: PlayersByIdTypes = {
            name: name ? name.trim() : name,
            team: 'LOS ANGELES LAKERS',
            position: 'SF',
            starred: false,
        };
        this.playersById.push(playersByIdItem);
    }
    @action deletePlayer(id?: number) {
        if (!id) return;
        this.playersById.splice(id, 1);
    }
    @action starPlayer(id?: number) {
        if (typeof id !== 'number') return;
        const playersById: PlayersByIdTypes = this.playersById[id];
        this.playersById.splice(id, 1, {
            ...playersById,
            starred: !playersById.starred,
        });
    }
    @action loadMore() {
        if (this.isMaxSize) return;
        this.pageIndex += 1;
    }
    @action setPlayersByIdSelectValue(value: PlayersByIdSelectTypes) {
        this.pageIndex = 1;
        this.playersByIdSelectValue = value;
    }
}