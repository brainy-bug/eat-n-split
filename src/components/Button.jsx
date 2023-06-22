const Button = ({ handleClick, children }) => {
  return (
    <button className='button' onClick={handleClick}>
      {children}
    </button>
  );
};
export default Button;
