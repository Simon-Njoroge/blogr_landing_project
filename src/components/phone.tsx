import './phone.scss'
import phone from '../images/illustration-phones.svg'
const Phone = () => {
    return (
        <>
            <div className="phonedata">
                <div className="phone">
                    <img src={phone} alt="" width="300px" />
                </div>
                <div className="data">
                    <h2>State of the Art Infrastructure</h2>
                    <p>With reliability and speed in mind, worldwide data centers provide the
                        backbone for ultra-fast connectivity.This ensures you site will load
                        instantly, no matter where your reders are, keeping your setTimeout
                        competitive
                    </p>
                </div>
            </div>
        </>
    )
}
export default Phone;