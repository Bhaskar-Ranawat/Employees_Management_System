import React from "react";

// setting default prop forw with an empty object
const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    changeUser('');
  };

  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl">
        Hello <br />
        {/* nullish coalesing or Optional chaining */}
        <span className="text-3xl font-semibold">
          {data?.firstName || "Guest"} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white px-5 py-2 rounded-small text-lg font-medium"
      >
        Logout
      </button>
    </div>
  );
};
export default Header;

// 2:21:59
