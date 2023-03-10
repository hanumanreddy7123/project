import React from "react";
import { Link } from "react-router-dom";
function Navbar()
{
    return(
        <div className="container flex flex-wrap items-center justify-between mx-auto">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {/* <li>
          <Link to='/add'>Add Products</Link>
        </li> */}
        <li>
          <Link to='/getcart'>Cart</Link>
        </li>
        <li>
          <Link to='/checkout'>Checkout</Link>
        </li>
        <li>
          <Link to='/logout'>logout</Link>
        </li>
        <li>
          <Link to='/products'>Home</Link>
        </li>
        </ul>
        </div>
    )
}
export default Navbar