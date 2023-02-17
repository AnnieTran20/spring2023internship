import React from 'react'
import sellimg from '../images/sellMyCar.png'

export default function Container2() {
  return (
    <div className='Container2'>
            <ul className='Container1-CarList'>
            <li>
                <img src={sellimg}/>
                <a href='#'><p>Description</p></a>
            </li>
            <li>
                <img src={sellimg}/>
                <a href='#'><p>Description</p></a>
            </li>

        </ul>
        <ul className='Container1-CarList'>
        <li>
                <img src={sellimg}/>
                <a href='#'><p>Description</p></a>
            </li>
            <li>
                <img src={sellimg}/>
                <a href='#'><p>Description</p></a>
            </li>

        </ul>
    </div>
  )
}
