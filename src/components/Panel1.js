import React from 'react'

export default function () {
  return (
    <div className='Panel1'>
        <h1>Find Cars by Budget</h1>
        <form method="get" action="http://www.randyconnolly.com/tests/process.php">
                    <select>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </select>
                    <select>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </select>
                    <input className="Searchbar"type="submit" value="Search"/>

                </form>
    </div>
  )
}
