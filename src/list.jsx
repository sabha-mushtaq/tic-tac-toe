import PropTypes from 'prop-types';

export const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// Define prop types for the List component
List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};



