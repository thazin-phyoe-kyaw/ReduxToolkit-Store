import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import SearchItem from "./Search";
import { openSidebar } from "../features/sidebar/sidebarSlice";
import { useState } from "react";
export default function Navbar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex lg:flex-row  items-center lg:items-center justify-between w-full p-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div>
            <img src="/akira-logo.png" alt="logo"></img>
          </div>
          <div className="flex space-x-4 items-center">
            <SearchItem onChange={handleSearchChange} />

            <ShoppingCart onClick={() => dispatch(openSidebar())} />
          </div>
        </div>
      </div>
    </div>
  );
}
