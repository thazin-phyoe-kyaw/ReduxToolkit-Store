const Color = () => {
  const colors = [
    {
      _id: 9001,
      title: "Green",
      base: "#22c55e",
    },
    {
      _id: 9002,
      title: "Gray",
      base: "#a3a3a3",
    },
    {
      _id: 9003,
      title: "Red",
      base: "#dc2626",
    },
    {
      _id: 9004,
      title: "Yellow",
      base: "#f59e0b",
    },
    {
      _id: 9005,
      title: "Blue",
      base: "#3b82f6",
    },
    {
      _id: 9005,
      title: "Pink",
      base: "#fecaca",
    },
  ];

  return (
    <div>
      <div className="cursor-pointer">
        <h3 className="font-extrabold lg:text-xl  mb-4">Color</h3>
      </div>

      <ul className="flex text-sm lg:text-base space-x-2 ">
        {colors.map((item) => (
          <li key={item._id} className=" pb-2 flex items-center gap-2 ">
            <span
              style={{ background: item.base }}
              className={`w-5 h-5 bg-gray-500 rounded-full`}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Color;
