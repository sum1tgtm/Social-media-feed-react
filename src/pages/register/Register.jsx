import './register.css'

export default function Register() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Sum1tbook</h3>
                    <span className="loginDesc">Simply put, superior to Facebook. </span>
                </div>
                <div className="loginRight">
                    <div className="registerBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Signup</button>
                        <button className="loginRegisterButton">Already Have an Account?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
