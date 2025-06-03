export default function InputField({labelText="label", name="field", className="", placeholder="", type="input",autocomplete="" }, props) {
  return (
    <div className={`flex flex-col group-hover:opacity-80 hover:opacity-100 ${className}`}>
      <label htmlFor={name} className="hover:cursor-pointer text-sm">
        {labelText}
      </label>
      <div className="p-1 flex flex-col focus-within:outline-2 outline-0  transition-all focus-within:outline-primary outline-transparent">
        <input
          className=" p-1.5  border-b-2 focus:border-transparent border-primary transition-all outline-0 "
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          required
          autoComplete={autocomplete}
        ></input>
      </div>
    </div>
  );
}
