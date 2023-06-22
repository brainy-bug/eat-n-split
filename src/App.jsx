import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import Friends from "./components/Friends";
import FormSplitBill from "./components/FormSplitBill";

import { initialFriends } from "./data";

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelection = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setIsAddFormOpen(false);
  };

  const handleAddForm = () => {
    setIsAddFormOpen((prev) => !prev);
    setSelectedFriend(null);
  };

  const handleBillForm = (value) => {
    friends.map((friend) => {
      if (friend === selectedFriend) friend.balance += Number(value);
    });

    setSelectedFriend(null);
  };

  return (
    <div className='app'>
      <div className='sidebar'>
        <Friends
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {isAddFormOpen && <FormAddFriend setFriends={setFriends} />}

        <Button handleClick={handleAddForm}>
          {`${isAddFormOpen ? "close" : "add friend"}`}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleBillForm={handleBillForm}
        />
      )}
    </div>
  );
};

export default App;
