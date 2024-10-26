import { useEffect, useState } from 'react'
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API="e32e5439ce714f91852efdc6ae15cc0f"
export default function Search({foodData,setfoodData}){
    const[querry,Setquerry]=useState("pizza")
    useEffect(()=>{
       async function FetchFood(){
          const resposne= await fetch(`${URL}?query=${querry}&apiKey=${API}`)
          const data= await resposne.json()
          console.log(data.results)
          setfoodData(data.results)
        }
    },[querry])
    return <div>
        <input type="text" 
        value={querry} 
        onChange={(e)=>Setquerry(e.target.value)}/>
    </div>
}