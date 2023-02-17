import React from 'react'
import cars from '../images/cars.avif'
import car1 from '../images/car1.jpg'
export default function Container3() {
  return (
    <div className='Container3'>
        <h2>Tips for Shopping and Buying Cars</h2>
        <ul className='Container1-CarList'>
            <li>
                <img src={cars}/>
                <a href='#'><p>Description</p></a>
            </li>
            <li>
                Description
            </li>

        </ul>
        <ul className='Container1-CarList'>
            <li>
                <img src={car1}/>
                <a href='#'><p>Description</p></a>
            </li>
            <li>
                <img src={car1}/>
                <a href='#'><p>Description</p></a>
            </li>
            <li>
                <img src={car1}/>
                <a href='#'><p>Description</p></a>
            </li>
            <li>
                <img src={car1}/>
                <a href='#'><p>Description</p></a>
            </li>
        </ul>
        <button>Car News and Review</button>
    </div>
  )
}
