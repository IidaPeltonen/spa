import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <a className="navbar-brand" href="#" id="valkoinen">SPA Example</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="navbarExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" id="valkoinen" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="valkoinen" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="valkoinen" to="/contactus">Contact</Link>
        </li>
      </ul>
    </div>

</nav>

    )
}