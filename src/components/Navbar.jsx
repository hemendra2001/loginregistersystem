import React from 'react'

const Navbar = () => {


    return (
        <>

<nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"blueviolet"}}>
  <div className="container-fluid">
    <a className="navbar-brand " href="/">REGISLOG</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">LOGIN</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/register">REGISTER</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/logout">LOGOUT</a>
        </li> 
      </ul>
    </div>
  </div>
</nav>
            
        </>
    )
}

export default Navbar
