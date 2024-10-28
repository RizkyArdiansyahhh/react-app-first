// eslint-disable-next-line react-refresh/only-export-components
import PropTypes from "prop-types";
function Count({ number }) {
  return <span>{number}</span>;
}

Count.propTypes = {
  number: PropTypes.number.isRequired,
};
export default Count;
