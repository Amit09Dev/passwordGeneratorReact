import PropTypes from "prop-types";

const Toggle = ({ type, defaultChecked, onChangeFunc }) => {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          value=""
          className="sr-only peer"
          onChange={onChangeFunc}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {type}
        </span>
      </label>
    </>
  );
};

Toggle.propTypes = {
  type: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChangeFunc: PropTypes.func,
};
export default Toggle;
