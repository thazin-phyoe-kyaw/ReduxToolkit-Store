import { Search, ShoppingCart, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div>
            <img src="/akira-logo.png" alt="logo"></img>
          </div>
          <div className="flex  space-x-4 items-center">
            <Search />
            <ShoppingCart />
            <UserRound />
          </div>
        </div>
      </div>
    </div>
  );
}
