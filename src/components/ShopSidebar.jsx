import Category from "./chooseBy/Category";
import Size from "./chooseBy/Size";
import Color from "./chooseBy/Color";
import Price from "./chooseBy/Price";
export default function ShopSideNav() {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category />
      <Color />
      <Price />
      <Size />
    </div>
  );
}
