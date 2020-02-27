import React, { MouseEventHandler } from 'react';
import { RootStoreContext } from '../stores/RootStore';
import { observer } from 'mobx-react-lite';
import PlayerListItem from "./PlayerListItem";

type PlayerListProps = {
};

const PlayerList: React.FC<PlayerListProps> = props => {
    const { playerStore } = React.useContext(RootStoreContext);
    const onLoadMoreClick: MouseEventHandler<HTMLButtonElement> = e => {
        playerStore.loadMore();
    };

    return <>
        {
            playerStore.playersByIdList.map((player, index) => {
                return (<PlayerListItem
                    key={index}
                    id={index}
                    name={player.name}
                    team={player.team}
                    position={player.position}
                    starred={player.starred}
                />);
            })
        }
        <div>
            { !playerStore.isMaxSize ? <button onClick={onLoadMoreClick}>点击加载更多</button> : null }
        </div>
    </>
}

export default observer(PlayerList);