import React from 'react'
import {useState} from "react";

import styles from "../css/filterbar.module.css"
const Filterbar = ({genders,onNameFilter,onTypeFilter}) => {

    // const [name,setName] =useState("");
    

    const handleNameChange=(event)=>{
        const {value} =event.target;
        // setName(value);
        onNameFilter(value);
    }
    const typehandle=(event)=>{
        const {value} = event.target;
        // console.log(value);
        onTypeFilter(value);    
    }

    // console.log(genders)

    const submithandle=(event)=>{
            event.preventDefault();
            console.log('clicked')
    }
  return (
    <div id={styles.filterbar}>
        <form onSubmit={submithandle}>
        <div>
        <h4>Filters</h4>
        </div>
        <div>
            <label>Location </label>
            <input type ='text'
            // value={name}
            onChange={handleNameChange}
            />
        </div>
        {/* <div>
            <label>Email</label>
            <input type ="text" />
        </div> */}
        <div>
            <label htmlFor="gender">Property Type </label>
            <select onChange={(event)=>{
                typehandle(event);
            }}>
        <option value="">Select</option>
       {genders.map((Type)=>(
        <option value={Type} key={Type}>
            {Type }
        </option>
       ))}
            </select>
        </div>
        <div>
            <label htmlFor="startDate">When </label>
            <input type='date' />
        </div>
        {/* <div>
            <label htmlFor="endDate">To</label>
            <input type='date'/>
        </div> */}
        <div>
            <button id={styles.submit} type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Filterbar