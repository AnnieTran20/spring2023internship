import logo from '../logo.svg';
import searchlogo from '../search.svg'
export default function NavBar() {
    return (
        <nav>
            <a href="#"><h1>Autotrader</h1></a>
            <img src={logo} className="App-logo" alt="logo"/>
            <a href="#"><h3>Used Cars</h3></a>
            <a href="#"><h3>New Cars</h3></a>
            <a href="#"><h3>Private Seller Cars</h3></a>
            <a href="#"><h3>Sell My Car</h3></a>
            <a href="#"><h3>Instant Cash Offer</h3></a>
            {/* add a select */}
            <a href="#"><h3>Select</h3></a> 
            <a href="#"><h3>Find Local Dealers</h3></a>
            <a href="#"><img src={searchlogo} className="Search-logo" alt="search"/></a>
            <a href="#"><img src={searchlogo} className="Search-logo" alt="search"/></a>
            <a href="#" className="sign-in">Sign In</a>
            
        </nav>
    )
}