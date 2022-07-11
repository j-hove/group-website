import React from "react";

function Header() {
  return (
    <nav class="navbar sticky-top navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="container">
          <header class="d-flex flex-wrap justify-content-center py-3">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
              <span class="fs-4">Brogrammer</span>
            </a>

            <ul class="nav nav-pills ">
              <li class="nav-item"><a href="#" class="nav-link text-light" aria-current="page">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link text-light">Our Team</a></li>
              <li class="nav-item"><a href="#" class="nav-link text-light">About</a></li>
            </ul>
          </header>
        </div>
      </div>
    </nav>
  );
}

export default Header
