import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaCard from "../../../components/card";
import { Class } from "@mui/icons-material";
import { ClassNames } from "@emotion/react";

function Product() {
const [data, setData] = useState();

    const params= useParams()
    console.log(params);
    useEffect(()=>{

axios.get('https://fakestoreapi.com/products').then((res)=>{

console.log(res.data);
setData(res.data)
}).catch((err)=>{

    console.log(err);
})


    })
    return(
<>
        {/* <h1>Product </h1> */}
        <div className="flex flex-wrap justify-center justify-evenly mt-[50px]">
        
        {data && data.map(_ => <MediaCard {..._}/>)}
        </div>
</>
    )
}
export default Product