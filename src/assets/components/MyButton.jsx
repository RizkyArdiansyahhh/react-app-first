// eslint-disable-next-line react-refresh/only-export-components
import PropTypes from "prop-types";

function MyButton({ content, even, disabled }) {
  return (
    <button onClick={even} disabled={disabled}>
      {content}
    </button>
  );
}
MyButton.propTypes = {
  content: PropTypes.string.isRequired, // content harus berupa string dan wajib
  even: PropTypes.func.isRequired, // onClick harus berupa fungsi dan wajib
  disabled: PropTypes.bool, // disabled adalah boolean dan opsional
};

export default MyButton;
