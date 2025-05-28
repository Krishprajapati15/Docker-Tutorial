import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-[#f8f6f4]/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img src="/logo2.png" alt="Gandiv logo" className="ml-4 h-14" />
        </Link>

        <div className="flex gap-4">
          <CitySearch />
        </div>
      </div>
    </header>
  );
}
