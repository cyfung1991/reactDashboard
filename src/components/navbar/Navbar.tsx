import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://media.licdn.com/dms/image/C5603AQFGEEWWifFzDQ/profile-displayphoto-shrink_800_800/0/1628518546710?e=1713398400&v=beta&t=sQfjCCdtpqdic9XRGfDQGRBBTpuFJzZMvEAiUdEk7Oo" alt="" />
          <span>Fung</span>
        </div>
        <img src="/setting.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar
