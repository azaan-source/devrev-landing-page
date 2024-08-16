import React from "react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <>
      <div className=" flex flex-row justify-between p-4">
        <img src={logo} alt="logo" className="w-44 object-contain" />
        <div className="flex flex-row justify-between w-1/2 mx-auto">
          <ul>Product</ul>
          <ul>Platform</ul>
          <ul>Solutions</ul>
          <ul>Marketplace</ul>

          <ul>Company</ul>
          <ul>Resources</ul>
          <ul>Pricing</ul>
        </div>

        <h2>Hello</h2>
      </div>
    </>
  );
};

export default Navbar;
