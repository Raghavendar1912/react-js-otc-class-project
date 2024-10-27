import '../Auth/auth.css'
function Login() {
    return (
        <div className="form-box">
            <div className="form-card" >
                <h1>Sign in</h1>
                <div className="form-input">
                    <label>Email or mobile phone number</label><br/>
                    <input />
                </div>
                <button>Continue</button>
                {/* By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                Need help?
                Buying for work?
                Shop on Amazon Business */}
            </div>
        </div>
    )
}

export default Login