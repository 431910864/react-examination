import React from 'react';
import { RootStoreContext } from '../stores/RootStore';
import { observer } from 'mobx-react-lite';
import Select from 'react-select';
import { PlayersByIdSelectTypes } from '../stores/PlayerStoreTypes';
// @ts-ignore
import styles from './AddPlayerSelect.css';

type AddPlayerInputProps = {
};

const AddPlayerInput: React.FC<AddPlayerInputProps> = props => {
    const { playerStore } = React.useContext(RootStoreContext);

    const onChanged: (e: PlayersByIdSelectTypes) => void = (e: PlayersByIdSelectTypes) => {
        playerStore.setPlayersByIdSelectValue(e)
    };

    return <>
        {
            // @ts-ignore
            <Select className={styles.addPlayerSelect} value={playerStore.playersByIdSelectValue} onChange={onChanged} options={playerStore.playersByIdSelect}/>
        }
    </>
}

export default observer(AddPlayerInput);