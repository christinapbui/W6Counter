import React, {useState} from 'react'
import {useSelector} from 'react-redux'

export default function ColorfulBox() {
    let [changeBackground,setChangeBackground] = useState(null)
    let [changeTextColor,setChangeTextColor] = useState(null)
    let count = useSelector(state => state.count)

    if(count >= 10){
        changeTextColor = `red`
    }
    
    return (
        <div className="boxarea-main-3" style={{width:"150px", height:"100px", color:`${changeTextColor}`, backgroundColor:`${changeBackground}`, border:"1px solid black"}}>Colorful Box<br /><input type="text" placeholder="Type a color here" onChange={(e)=>setChangeBackground(e.target.value)} style={{width:"140px"}}/></div>
    )
}
