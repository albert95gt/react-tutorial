import { FriendListItem } from './FriendListItem';

export function FriendList(friends) {
  return (
    <ul className="friend-list">
      <FriendListItem
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
      />
    </ul>
  );
}
