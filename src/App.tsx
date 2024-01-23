import "./App.css";
import { useState } from "react";
import { Friend } from "./types/friend";

// COMPONENTS
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import SplitBillForm from "./components/SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Dennis",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Kassie",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Fai",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  // ADD FRIEND FUNCTION
  const handleAddFriend = (friend: Friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  // SELECT FRIEND FUNCTION
  const handleSelection = (friend: Friend) => {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  };

  const handleSplitBill = (value: number) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <main>
      <h1 className="title">
        Split<span className="">Bite</span>
      </h1>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />
          {showAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}
          <button
            onClick={() => setShowAddFriend((show) => !show)}
            className="button"
          >
            {showAddFriend ? "Close" : "Add Friend"}
          </button>
        </div>

        {selectedFriend && (
          <SplitBillForm
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </main>
  );
}

export default App;