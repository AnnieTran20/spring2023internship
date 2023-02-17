import React from 'react'
import car1 from '../images/car1.jpg'
export default function Container1() {
  return (
    <div className='Container1'>
        <h2>Shop Vehicles by Styles</h2>

        <ul className='Container1-CarList'>
            <li><a href="index.html" ><img src={car1}/></a></li>
            <li><a href="index.html" ><img src={car1}/></a></li>
            <li><a href="index.html" ><img src={car1}/></a></li>
            <li><a href="index.html" ><img src={car1}/></a></li>
        </ul>
        <ul className='Container1-CarList'>
            <li><a href="index.html" ><img src={car1}/></a></li>
            <li><a href="index.html" ><img src={car1}/></a></li>
            <li><a href="index.html" ><img src={car1}/></a></li>
            <li><a href="index.html" ><img src={car1}/></a></li>
        </ul>
        <ul className='Container1-CarList'>
            <li><a href="index.html" ><img src={car1}/></a></li>
            <li><a href="index.html" ><img src={car1}/></a></li>
            <li><a href="index.html" ><img src={car1}/></a></li>
            <li><a href="index.html" ><img src={car1}/></a></li>
        </ul>


    </div>
  )
}
