export default function Header({ title, subtitle }) {
  return (
    <header className="bg-blue-600 text-white px-8 py-6 rounded-b-2xl shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-sm opacity-80">{subtitle}</p>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-70">Church of PENSA</p>
          <p className="font-bold">Admin Panel</p>
        </div>
      </div>
    </header>
  );
}
