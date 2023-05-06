import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'

export const Sidebar = () => {
    const [searchparams,setSearchparams] = useSearchParams()
    const initialCategory = searchparams.getAll("category")
    const initialorder = searchparams.get("order")
    const [order,setorder] = useState(initialorder||"")
const [category,setCategory] = useState(initialCategory || [])
    const handleChange = (e)=>{
let newCategory = [...category]
const value=e.target.value;
if(newCategory.includes(value)){
    newCategory = newCategory.filter((el)=> el !==value)
}else{
    newCategory.push(value)
}

setCategory(newCategory);


    }
    const handleSort= (e) =>{
setorder(e.target.value)
    }

    useEffect(()=>{
        let params = {
            category,
            
        }
        order && (params.order = order)
        setSearchparams(params)

    },[category,order])
  return (
    <div>
        <h3>Filter By</h3>
        <div>
            <input type="checkbox" value={"skirt"} onChange={handleChange}   checked={category.includes("skirt")}/>
            <label>skirt</label>
        </div>
        <div>
            <input type="checkbox" value={"pant"} onChange={handleChange }  checked={category.includes("pant")}/>
            <label>pant</label>
        </div>
        <div>
            <input type="checkbox" value={"dress"} onChange={handleChange }   checked={category.includes("dress")}/>
            <label>dress</label>
        </div>
        <br/>
        <br/>
        <h3>sort based on price</h3>
        <div onChange={handleSort}>
            <input type="radio" name="order" value={"asc"}   defaultChecked={order==="asc"}/>
            <label>Ascending</label>
            <input type="radio" name="order" value={"desc"}   defaultChecked={order==="desc"}/>
            <label>Descending</label>

        </div>

    </div>
  )
}