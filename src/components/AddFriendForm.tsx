import { useState } from "react";
import { Friend } from "../types/friend";
import Button from "./Button";

type Props = {
  onAddFriend: (friend: Friend) => void;
};

const AddFriendForm = ({ onAddFriend }: Props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !image) return;
    const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧍🏻‍♂️Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌉 Image URL</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />

      <Button>Add</Button>
    </form>
  );
};

export default AddFriendForm;
