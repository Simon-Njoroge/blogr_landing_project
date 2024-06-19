import logo from '../images/logo.svg'
import arrow from '../images/icon-arrow-light.svg'
import show from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import './navigation.scss'
const Navigation = () => {
    const shownav = () => {
        document.body.classList.toggle("navshow")
        document.body.classList.remove("hidenav")
    }
    const hidenav = () => {
        document.body.classList.remove("navshow")
        document.body.classList.add("hidenav")
    }
    const turnallow1 = () => {
        document.body.classList.toggle("turn1")
    }
    const turnallow2 = () => {
        document.body.classList.toggle("turn2")
    }
    const turnallow3 = () => {
        document.body.classList.toggle("turn3")
    }

    return (
        <>
            <div className="all">
                <div className="navbar">
                    <div className="left">
                        <div className="logo" >
                            <img src={logo} alt="" />
                        </div>
                        <div className="navbar1">
                            <img src={close} alt="" onClick={hidenav} className='closenavi' />
                            <p onMouseOver={turnallow1} >Product <img src={arrow} alt="" className='Parrow' />
                                <ul>
                                    <li><a href="#">Overview</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Marketplace</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Intergration</a></li>
                                </ul>
                            </p>
                            <p onMouseOver={turnallow2}>Company <img src={arrow} alt="" className='Carrow' />
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li> <a href="#">Blog</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </p>
                            <p onMouseOver={turnallow3}>Contact <img src={arrow} alt="" className='Oarrow' />
                                <ul>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Newsletter</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="logins">
                        <button>login</button>
                        <button>Sign up</button>
                        <img src={show} alt="" onClick={shownav} />
                    </div>
                </div>
                <div className="model">
                    <h1>A modern publishing platform</h1>
                    <p>Grow your audience and build your online brand</p>
                </div>
                <div className="start">
                    <a href='#'>start for Free</a>
                    <a href='#'>Leran More</a>
                </div>
            </div>
        </>
    )
}
export default Navigation