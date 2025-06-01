import { SCHAFFLER_GREEN } from "../theme/schaeffler";
export function AppBar() {
  return (
    <header
      className="bg-schaeffler text-white px-4 py-2 flex items-center shadow"
      style={{ backgroundColor: SCHAFFLER_GREEN }}
    >
      <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
      <h1 className="text-xl font-bold">Mobility Innovation Platform</h1>
    </header>
  );
}
