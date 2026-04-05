import './index.css'

const PasswordItem = props => {
  const {eachItem} = props
  const {id, siteLogo, siteName, userName, sitePassword} = eachItem
  console.log(id)

  return (
    <li className="password-item">
      <div className="password-details-container">
        <p className="password-item-logo">{siteLogo}</p>
        <div className="password-items-details">
        <h1 className="password-items-title">Site Name: {siteName}</h1>
        <p className="password-items-detail">User Name: {userName}</p>
        <p className="password-items-detail">Site Password: {sitePassword}</p>
      </div>
      </div>

      <button type="button" className="delete-btn">
        <img
          className="delete-btn-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
