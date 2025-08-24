import React from "react";
import book from "../../public/book.jpg"

function Hero() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 my-10 px-4 flex flex-col md:flex-row">
      <div className="order-2 md:order-1 mt-12 md:mt-32 w-full md:w-1/2">
      {/* heading */}
        <h1 className="text-4xl font-bold">
          Hello, welcoe here to learn somthing{" "}
          <span className="text-pink-400">new everyday !!!</span>
        </h1>
        {/* text */}
        <p className="mt-12 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil rem
          odio quo exercitationem praesentium laboriosam quas beatae sunt, omnis
          at, sint veritatis, modi esse error sit aperiam? Similique, accusamus
          possimus!
        </p>
        {/* email input box */}
        <label className="input validator mt-12 w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input type="email" placeholder="mail@site.com" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
        <button className="btn btn-secondary mt-6">Get Started</button>
      </div>


      <div className="flex justify-center items-center order-1 w-full md:w-1/2">
        <img src={book} className="w-92 h-92" alt="" />
      </div>
    </div>
  );
}

export default Hero;
