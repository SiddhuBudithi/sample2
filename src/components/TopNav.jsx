export default function TopNav() {
  return (
    <nav className="topnav">
      <div className="brand">
        <div className="brand-mark" />
        <div className="brand-text">
          EO South Asia
          <br />
          Platinum Bridge
          <small>Member Network</small>
        </div>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#" className="active">My Pages</a>
        <a href="#">Directory</a>
        <a href="#">Support</a>
      </div>
    </nav>
  )
}
