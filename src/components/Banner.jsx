export default function Banner() {
  return (
    <div className="w-full">
      <div
        className="bg-cover bg-center h-32 w-full  relative"
        style={{
          backgroundImage:
            'url("https://akira-elementor.axonvip.com/modules/nrtthemecustomizer/views/img/bg_breadcrumb.png")',
        }}
      >
        <div className="absolute inset-0 bg-slate-200 bg-opacity-10 flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-extrabold text-5xl pb-4">Shop</h1>
          <p className="text-gray-700">Home / Shop</p>
        </div>
      </div>
    </div>
  );
}
