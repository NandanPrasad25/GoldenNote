const InputClasses = "rounded-md appearance-none relative block w-full px-3 py-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:border-500 focus:z-10 sm:text-sm"

const Input = (handleChange, value, labelText, labelFor, id, name, type, isRequired=false, placeholder, customClass) => {
  return <div>
    <label htmlFor={labelFor}>{labelText}</label>
    <input onChange={handleChange} value={value} id={id} name={name} type={type} required={isRequired} className={InputClasses+customClass} placeholder={placeholder} />
  </div>;
};

export default Input;
