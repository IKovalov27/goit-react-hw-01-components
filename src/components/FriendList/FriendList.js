import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css['friend-list']}>
            {friends.map(({ avatar, name, id, isOnline }) => (
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id}
                />
            ))}
        </ul>
    );
  };