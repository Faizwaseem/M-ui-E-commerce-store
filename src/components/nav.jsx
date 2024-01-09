import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{

return (
    <>
    
    <nav>
        <ul className="flex justify-evenly bg-black p-[20px] text-white">
            <li>

                <Link to={'/'}>
                Home
                </Link>
                 </li>

            <li>
                
                 <Link to={'/about'}>
                 About  
                 
                 </Link>
                </li>


            <li>
                <Link to ={'/contact'}>
                Contact
                
                </Link>
                
                 </li>

                 <li >
                <Link to ={'/Product/:123456789'}>
                Product
                
                </Link>
                
                 </li>


        </ul>
    </nav>
    
    </>


)

    
}
export default Navbar
