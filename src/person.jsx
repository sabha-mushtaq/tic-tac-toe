import PropTypes from 'prop-types';

function Person({ name, age }) {
  return (
    <p>
      {name} is {age} years old.
    </p>
  );
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const display = () => {
  alert("button clicked");
};

// Define prop types
Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Named exports for Person, Button, and display
export { Person, Button, display };





