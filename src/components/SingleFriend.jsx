import Button from "./Button";

const SingleFriend = ({ friend, handleSelection, selectedFriend }) => {
  const { image, name, balance } = friend;
  let isSelected = selectedFriend?.id === friend.id;


  return (
    <li className={`${isSelected ? "selected" : ""}`}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance < 0 && (
        <p className='red'>
          You owe {name} {Math.abs(balance)}€
        </p>
      )}
      {balance > 0 && (
        <p className='green'>
          {name} owes you {Math.abs(balance)}€
        </p>
      )}

      {balance === 0 && <p>You and {name} are even</p>}

      <Button handleClick={() => handleSelection(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
};
export default SingleFriend;
