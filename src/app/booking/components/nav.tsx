import React from "react";

const Navigation = () => {
  return (
    <header className="bg-gray-200 flex justify-between py-4 px-10 border-2 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <h1 className="text-black text-xl font-bold">Logo</h1>
      </div>
      <nav className="flex space-x-4 text-l">
        <a href="/list" className="text-black p-4 hover:text-gray-500">
          Khách sạn
        </a>
        <a href="/booking" className="text-black p-4 hover:text-gray-500">
          Các loại phòng
        </a>
        <a
          href="#"
          className="font-bold text-black py-4 px-8 bg-amber-600 hover:text-gray-200 rounded"
        >
          Đăng nhập
        </a>
      </nav>
    </header>
  );
};

export default Navigation;
