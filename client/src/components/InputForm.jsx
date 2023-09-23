import { memo } from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ label }) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor="phone" className='text-sm'>{label}</label>
      <input type="text" id="phone" className="outline-none bg-[#e8f0fe] p-2 rounded-md" />
    </div>
  )
}

InputForm.propTypes = {
  label: PropTypes.string,
}

const MemoizedInputForm = memo(InputForm);

export default MemoizedInputForm