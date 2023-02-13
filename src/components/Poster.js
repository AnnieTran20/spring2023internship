
export default function Poster() {
    return (
        <div className="Poster">
            <div className="Poster-row1">
                <h1>Cars for Sale-Search Near You</h1>
                <ul>
                    <li>Find Cars by Budget |</li>
                    <li>Shop Vehicles by Style |</li>
                    <li>Advanved Search</li>
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
                    <input name="zipCode" placeholder="ZIP Code"/>
                    <input type="submit" value="Search"/>

                </form>

            </div>

        </div>
    )
}