import { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { toggleCategory } from "../../../../redux/orebiSlice";

const Category = () => {
  const category = [
    {
      _id: 9006,
      title: "Accessories",
      total: 19,
    },
    {
      _id: 9007,
      title: "Arts",
      total: 22,
    },
    {
      _id: 9008,
      title: "Clothes",
      total: 21,
    },
    {
      _id: 9009,
      title: "Featured Product",
      total: 19,
    },
  ];

  //   const handleToggleCategory = (category) => {
  //     dispatch(toggleCategory(category));
  //   };

  return (
    <div className="w-full">
      <div className="cursor-pointer">
        <h3 className="font-extrabold lg:text-xl  mb-4">Categories</h3>
      </div>
      <div>
        <ul className="flex flex-col gap-2 text-sm font-medium">
          {category.map((item) => (
            <li key={item._id} className=" pb-2 flex items-center gap-2 ">
              <input
                type="checkbox"
                id={item._id}
                // checked={checkedCategorys.some((b) => b._id === item._id)}
                // onChange={() => handleToggleCategory(item)}
              />
              <div className="flex justify-between items-center w-32">
                <p>{item.title}</p>
                <p className="text-gray-500">({item.total})</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
