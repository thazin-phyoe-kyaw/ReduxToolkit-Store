import React from "react";

const Size = () => {
  const sizes = [
    {
      _id: 900,
      title: "Small",
      total: 2,
    },
    {
      _id: 901,
      title: "Medium",
      total: 1,
    },
    {
      _id: 902,
      title: "Large",
      total: 1,
    },
    {
      _id: 903,
      title: "Extra Large",
      total: 2,
    },
  ];

  return (
    <div>
      <div className="cursor-pointer">
        <h3 className="font-extrabold lg:text-xl  mb-4">Size</h3>
      </div>

      <ul className="flex flex-col gap-2 text-base font-medium">
        {sizes.map((item) => (
          <li key={item._id} className="flex items-center gap-2 ">
            <input
              type="radio"
              name="hs-default-radio"
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-gray-800 dark:checked:border-gray-800 dark:focus:ring-offset-gray-800"
              id="hs-default-radio"
            />
            <label
              htmlFor="hs-default-radio"
              className="text-sm font-medium flex justify-between items-center w-32"
            >
              <p> {item.title}</p>
              <p className="text-gray-500"> ({item.total})</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Size;
