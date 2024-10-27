import '../dashbord/nav.css'
function Nav(){
    const apply={
        color:"white",
        background:"red"
        
    }
    return(
        <div>
            <nav></nav>
            {/* this an react js inline css */}
            <h1 style={{color:"red"}} >Inline css</h1>
            <p style={apply}>Interbl Css</p>
            <p style={apply}>This is an sunday class of react js </p>
        </div>
    )
}

export default Nav