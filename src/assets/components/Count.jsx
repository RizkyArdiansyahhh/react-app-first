import PropTypes from "prop-types";
function Count({ number }) {
  return <span>{number}</span>;
}

Count.propTypes = {
  number: PropTypes.number.isRequired,
};
export default Count;
