import React from "react";

export default function page() {
  return (
    <article className="w-full rounded-lg p-5 bg-white text-black">
      <div className="w-full flex">
        <div>
          <h1 className="font-extrabold text-4xl">Research Papers</h1>
          <h2 className="font-semibold text-[#83c5be]">5</h2>
        </div>
        <div className="flex ml-auto">
          <div className="font-extrabold flex flex-col items-center mx-4 text-xl">
            <div>10</div>
            <div className="font-semibold text-[#83c5be]">departments</div>
          </div>
          <div className="font-extrabold flex flex-col items-center text-xl">
            <div>113</div>
            <div className="font-semibold text-[#83c5be]">teachers</div>
          </div>
        </div>
      </div>
      <section className="w-full my-3">
        <hr />
        <div
          id="teach-header"
          className="grid grid-cols-6 my-2 text-[#83c5be] font-semibold text-lg"
        >
          <h3 className="col-span-2">Name</h3>
          <h3 className="text-center">Area of research</h3>
          <h3 className="text-center">By </h3>
          <h3 className="text-center">Department</h3>
        </div>

        <hr />

        <div className="grid grid-cols-6 my-2 text-black font-bold text-lg">
          <h3 className= "col-span-2">Paper Name</h3>

          <h3 className="text-center"> Area of reaserch</h3>
          <h3 className="text-center">
            <button>ABC</button>
          </h3>
          <h3 className="text-center">CS</h3>
          <hr />
        </div>
      </section>
    </article>
  );
}
