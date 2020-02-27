import React, { ChangeEventHandler, KeyboardEventHandler } from 'react';
import { RootStoreContext } from '../stores/RootStore';
import { observer } from 'mobx-react-lite';
import classnames from "classnames";
// @ts-ignore
import styles from "./AddPlayerInput.css";

type AddPlayerInputProps = {
};

const AddPlayerInput: React.FC<AddPlayerInputProps> = props => {
    const { playerStore } = React.useContext(RootStoreContext);
    const [name, setName] = React.useState(playerStore.name);

    const onNameChanged: ChangeEventHandler<HTMLInputElement> = e => setName(e.target.value);
    const onNameKeyboard: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.which === 13) {
            playerStore.addPlayer(name);
            setName('');
        }
    };

    return <>
        <input
            type="text"
            autoFocus={true}
            className={classnames('form-control', styles.addPlayerInput)}
            placeholder="Type the name of a player"
            value={name}
            onChange={onNameChanged}
            onKeyDown={onNameKeyboard}
        />
    </>
}

export default observer(AddPlayerInput);