export function Button({ children, ...props }) {
    return (
      <button {...props} className="w-full py-2 flex items-center justify-center rounded-full bg-[#4FD1C5] text-black text-[15px]">
        {children}
      </button>
    );
  }
