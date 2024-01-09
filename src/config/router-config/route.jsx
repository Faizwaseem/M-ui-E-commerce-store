import React from "react";
import {BrowserRouter,Routes,Route  } from "react-router-dom";

import Home from "../../screens/home/home";
import About from "../../screens/home/about/About";
import Contact from "../../screens/home/about/Contact/Contact";
import Navbar from "../../components/nav";
import Product from "../../screens/home/product/Product";

// import  PrimarySearchAppBar  from "../../Appbar";
const Routers =()=>{

return (
<>

<BrowserRouter>
<Navbar/>
{/* <PrimarySearchAppBar/> */}
<Routes>    

<Route path='/' element={<Home/>} />
<Route path='About' element={<About/>} />
<Route path='/about/Contact' element={<Contact/>} />
<Route path='/product/:123456789' element={<Product/>} />

</Routes>
</BrowserRouter>

</>

)


}
export default Routers