import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ setFriends }) => {
  const [formData, setFormData] = useState({
    friendName: "",
    image: "https://i.pravatar.cc/48",
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * (10000 - 500 + 1)) + 500;
    const name = formData.friendName;
    const image = `https://i.pravatar.cc/48?u=${id}`;
    const newFriend = { ...formData, id, name, image, balance: 0 };

    if (!name) {
      alert("All fields is required");
      return;
    }
    setFriends((friends) => [...friends, newFriend]);

    // reset
    setFormData({
      friendName: "",
      image: "https://i.pravatar.cc/48",
    });
  };

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>👨🏿‍🤝‍👨🏼Friend Name</label>
      <input
        type='text'
        name='friendName'
        value={formData.friendName}
        onChange={handleChange}
      />
      <label>🖼 Image URL</label>
      <input
        type='text'
        name='image'
        value={formData.image}
        onChange={handleChange}
      />

      <Button>add</Button>
    </form>
  );
};
export default FormAddFriend;
