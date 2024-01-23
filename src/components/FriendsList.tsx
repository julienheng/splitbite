import Friend from "./Friend";
import { Friend as FriendType } from "../types/friend";

type Props = {
  friends: FriendType[];
  onSelection: (friend: FriendType) => void;
  selectedFriend: FriendType | null;
}

const FriendsList = ({ friends, onSelection, selectedFriend } : Props) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
};

export default FriendsList;
