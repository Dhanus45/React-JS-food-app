import { useState } from 'react'

export default function Search(){
    Const[querry,Setquerry]=useState("")
    return <div>
        <input type="text" value={querry} onChange={(e)=>Setquerry(e.target.value)} />
    </div>
}