export default function Button({ children, onClick }) {
  return (
    <button
      className="lg:h-11 h-7 w-24 rounded bg-medium-black text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
