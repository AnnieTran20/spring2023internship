
export default function Poster() {
    return (
        <div className="Poster">
            <div className="Poster-row1">
                <h1>Cars for Sale-Search Near You</h1>
                <ul>
                    <a href="#"><li>Find Cars by Budget </li></a>
                    <li>|</li>
                    <a href="#"><li>Shop Vehicles by Style </li></a>
                    <li>|</li>
                    <a href="#"><li>Advanved Search</li></a>
                </ul>
            </div>
            <div className="Poster-row2">
                <form method="get" action="http://www.randyconnolly.com/tests/process.php">
                    <select>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </select>
                    <select>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </select>
                    <input className="ZipCode" name="zipCode" placeholder="ZIP Code"/>
                    <input className="Searchbar"type="submit" value="Search"/>

                </form>

            </div>

            <h1 className="Slogan">Love is now electric</h1>

        </div>
    )
}