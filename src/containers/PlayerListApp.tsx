import React from 'react';
import { observer } from 'mobx-react-lite';
import { PlayerList, AddPlayerInput, AddPlayerSelect } from '../components/index';
// @ts-ignore
import styles from './PlayerListApp.css';

type PlayerListAppProps = {
};

const PlayerListApp: React.FC<PlayerListAppProps> = props => {
    return <>
        <div className={styles.header}>
            <AddPlayerInput />
            <AddPlayerSelect />
        </div>
        <PlayerList />
    </>
}

export default observer(PlayerListApp);