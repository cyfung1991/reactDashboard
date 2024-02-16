import "./topBox.scss";
import { topDealUsers } from "../../data";
const TopBox = () => {
  return (
    <div className="topBox">
        <h1>Top Deals</h1>
        <div className="list">
            {topDealUsers.map(topDealUser => (
                <div className="listItem" key={topDealUser.id}>
                    <div className="user">
                        <img src={topDealUser.img} alt="" />
                        <div className="userTexts">
                            <span className="username">{topDealUser.username}</span>
                            <span className="email">{topDealUser.email}</span>
                        </div>
                    </div>
                    <span className="amount">${topDealUser.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopBox