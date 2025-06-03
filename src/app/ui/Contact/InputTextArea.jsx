
export default function InputTextArea({labelText="label", name="field", className="", placeholder="", type="input",autocomplete="" }, props) {
  return (
      <div className={`flex flex-col group-hover:opacity-80 hover:opacity-100 `}>
        <label htmlFor={name} className=" text-sm hover:cursor-pointer">
         {labelText} 
        </label>
        <div className="p-1 flex flex-col focus-within:outline-2 outline-0  transition-all focus-within:outline-primary outline-transparent">
          <textarea
            className=" field-sizing-content min-h-32 lg:min-h-64   scroll p-1.5  border-b-2 focus:border-transparent border-primary transition-[outline border] outline-0 "
            name={name}
            id={name}
            placeholder={placeholder}
            required
          ></textarea>
        </div>
      </div>
  );
}
