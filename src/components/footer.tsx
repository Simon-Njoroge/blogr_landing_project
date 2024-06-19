import './footer.scss'
import logo from '../images/logo.svg'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="log">
                    <img src={logo} alt="" />
                </div>
                <div className="product">
                    <h5>product</h5>
                    <a href="#">Overview</a>
                    <a href="#">Pricing</a>
                    <a href="#">Marketplace</a>
                    <a href="#">Features</a>
                    <a href="#">Intergration</a>
                </div>
                <div className="Company">
                    <h5>Company</h5>
                    <a href="#">About</a>
                    <a href="#">Team</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                </div>
                <div className="Connect">
                    <h5>Connect</h5>
                    <a href="#">Contact</a>
                    <a href="#">Newsletter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </>
    )
}
export default Footer;