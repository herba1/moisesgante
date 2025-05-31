
export default function NavCta({text="Call to Action", className=""}) {
  return (
    <div className=" flex items-center justify-center order-2">
      <button
        type="button"
        className={`cursor-pointer bg-pink-300 p-2 rounded-full active:scale-95 active:opacity-90 transition-all ${className} `} 
      >
        {text}
      </button>
    </div>
  );
}