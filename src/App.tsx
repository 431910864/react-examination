// @ts-ignore
import * as styles from './App.css';
import React from 'react';
import { observer } from 'mobx-react-lite';
import {RootStoreContext} from './stores/RootStore';
import PlayerListApp from "./containers/PlayerListApp";

const App: React.FC = () => {
    const { appStore } = React.useContext(RootStoreContext);
    return (
        <div>
            <header className={styles.playerListApp}>{appStore.title}</header>
            <PlayerListApp />
        </div>
    );
};

export default observer(App);
