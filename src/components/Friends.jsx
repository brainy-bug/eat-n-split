import SingleFriend from "./SingleFriend";

const Friends = ({ friends, onSelection, selectedFriend }) => {
  return (
    <>
      <ul>
        {friends.map((friend) => {
          return (
            <SingleFriend
              friend={friend}
              key={friend.id}
              handleSelection={onSelection}
              selectedFriend={selectedFriend}
            />
          );
        })}
      </ul>
    </>
  );
};
export default Friends;
