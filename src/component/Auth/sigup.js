import '../Auth/auth.css'
function Sigup() {
    return (
        <div className='form-box'>
            <div className="form-card">
                <h1>Create Account</h1>
                <label>Your name</label><br />
                <input placeholder="First and Last Name" /><br />
                <input placeholder="Mobile Number" /><br />
                <label>Password</label><br />
                <input placeholder="At least 6 characters" /><br />
                <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
                    Verify mobile number
                    Buying for work?</p>

                <h6>Create a free business account<br />
                    Already have an account? Sign in<br />
                    By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</h6>


            </div>

        </div>
    )
}

export default Sigup