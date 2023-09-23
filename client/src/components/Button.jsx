import { memo } from 'react';
import PropTypes from 'prop-types';

function Button({ text, textColor, bgColor, IcAfter, onClick, fullWidth }) {
  console.log('re-render')
  return (
    <button
      onClick={onClick}
      className={`p-2 ${fullWidth && 'w-full'} ${textColor} ${bgColor} outline-none rounded-md hover:underline flex  justify-center items-center gap-1`}
    >
      <span> {text}</span>
      <span> {IcAfter && <IcAfter />}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  IcAfter: PropTypes.any,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
};

const MemoizedButton = memo(Button);

export default MemoizedButton;
