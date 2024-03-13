import { Trash, X } from "lucide-react";
import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../features/sidebar/sidebarSlice";

const CartSidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  console.log(isOpen, "dfjk");
  const products = [
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelry",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
  ];
  return isOpen ? (
    <div className="right-0 h-full w-full bg-white fixed top-0 md:w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg-px-[5px]">
      <div className="flex items-center justify-between border-b py-3 ">
        <div className="font-semibold uppercase text-sm">YOUR CART (7)</div>
        <div
          onClick={() => dispatch(closeSidebar())}
          className="cursor-pointer"
        >
          <X />
        </div>
      </div>
      <div>
        {products.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div>
          Total:<span className="text-red-700 font-bold"> $200</span>
        </div>
        <div>
          <Trash />
        </div>
      </div>
    </div>
  ) : null;
};

export default CartSidebar;
