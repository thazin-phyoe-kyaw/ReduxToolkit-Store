import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import SearchItem from "./Search";
import { openSidebar } from "../features/sidebar/sidebarSlice";
import { useEffect, useState } from "react";
export default function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = Math.floor(window.scrollY);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`w-full ${
        prevScrollPos > 100 ? "fixed" : "relative"
      } transition-all duration-300 z-10 bg-white shadow-md ${
        visible ? "top-0" : "-top-full"
      }`}
    >
      <div className="container mx-auto  ">
        <div className="flex lg:flex-row    items-center lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div>
            <img src="/akira-logo.png" alt="logo"></img>
          </div>
          <div className="flex space-x-4 items-center">
            <SearchItem onChange={handleSearchChange} />

            <div className="relative">
              <ShoppingCart size={24} onClick={() => dispatch(openSidebar())} />
              {cartTotalQuantity > 0 && (
                <div className="absolute top-[-6px]  right-[-2px] -mt-1 -mr-1 bg-red-500 text-sm text-white rounded-full w-5 h-5 flex justify-center items-center">
                  {cartTotalQuantity}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
