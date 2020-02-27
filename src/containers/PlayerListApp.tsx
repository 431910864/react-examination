import React from 'react';
import { observer } from 'mobx-react-lite';
import { PlayerList, AddPlayerInput, AddPlayerSelect } from '../components/index';

type PlayerListAppProps = {
};

const PlayerListApp: React.FC<PlayerListAppProps> = props => {
    return <>
        <AddPlayerInput />
        <AddPlayerSelect />
        <PlayerList />
    </>
}

export default observer(PlayerListApp);