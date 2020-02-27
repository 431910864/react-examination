import React, { MouseEventHandler } from 'react';
import { RootStoreContext } from '../stores/RootStore';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
// @ts-ignore
import styles from "./PlayerListItem.css";
import { PlayersByIdTypes } from '../stores/PlayerStoreTypes';

const PlayerListItem: React.FC<PlayersByIdTypes> = props => {
    const { playerStore } = React.useContext(RootStoreContext);
    const onSetStarClick: MouseEventHandler<HTMLButtonElement> = e => {
        playerStore.starPlayer(props.id)
    };
    const onDeleteClick: MouseEventHandler<HTMLButtonElement> = e => {
        playerStore.deletePlayer(props.id)
    };
    return <>
        <li className={styles.playerListItem}>
            <div className={styles.playerInfos}>
                <div>
                    <span>{props.name}</span>
                </div>
                <div>
                    <small>
                        {props.team} · {props.position}
                    </small>
                </div>
            </div>
            <div className={styles.playerActions}>
                <button
                    className={`btn btn-default ${styles.btnAction}`}
                    onClick={onSetStarClick}
                >
                    <i
                        className={classnames('fa', {
                            'fa-star': props.starred,
                            'fa-star-o': !props.starred,
                        })}
                    />
                </button>
                <button
                    className={`btn btn-default ${styles.btnAction}`}
                    onClick={onDeleteClick}
                >
                    <i className="fa fa-trash" />
                </button>
            </div>
        </li>
    </>
}

export default observer(PlayerListItem);