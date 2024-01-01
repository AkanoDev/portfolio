export default function Button({ children, onClick }) {
  return (
    <button
      className="h-11 w-24 rounded bg-medium-black text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
