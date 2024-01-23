import { Friend } from "../types/friend";
import { useState } from "react";

type Props = {
  selectedFriend: Friend;
  onSplitBill: (value: number) => void;
};

const SplitBillForm = ({ selectedFriend, onSplitBill }: Props) => {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser)

  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with <span className="name">{selectedFriend.name}</span></h2>

      <label>💸 Bill Total Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💰 Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}
      />

      <label>🧾 {selectedFriend.name}'s Expense</label>
      <input
        type="text"
        disabled
        value={paidByFriend}
      />

      <label>💲 Who is paying the bill</label>
      <select>
        <option
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(Number(e.target.value))}
        >
          You
        </option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Split Bill</button>
    </form>
  );
};

export default SplitBillForm;
