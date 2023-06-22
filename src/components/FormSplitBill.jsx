import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, handleBillForm }) => {
  const [formData, setFormData] = useState({
    bill: "",
    paidByUser: "",
    whoIsPaying: "user",
  });
  const paidByFriend = formData.bill ? formData.bill - formData.paidByUser : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedValue =
        name === "paidByUser" && Number(value) > Number(prevData.bill)
          ? prevData.paidByUser
          : value;

      return { ...prevData, [name]: updatedValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.bill || !formData.paidByUser) {
      alert("All fields is required");
      return;
    }

    handleBillForm(
      formData.whoIsPaying === "user" ? paidByFriend : -formData.paidByUser
    );

    setFormData({
      bill: "",
      paidByUser: "",
      whoIsPaying: "user",
    });
  };

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type='number'
        name='bill'
        value={formData.bill}
        onChange={handleChange}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type='number'
        name='paidByUser'
        value={formData.paidByUser}
        onChange={handleChange}
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type='text' value={paidByFriend} disabled />

      <label>🤑 Who is paying the bill</label>
      <select
        name='whoIsPaying'
        value={formData.whoIsPaying}
        onChange={handleChange}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};
export default FormSplitBill;
