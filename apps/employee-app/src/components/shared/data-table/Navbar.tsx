import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="">
        <div className="">
        <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="/employee">Home</a>
        <a className="nav-link" href="/employee/add">Add</a>
      </div>
    </div>
  </div>
</nav>
        </div>
      </div>
    )
  }
}
