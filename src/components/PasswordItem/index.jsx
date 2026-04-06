import './index.css'

const PasswordItem = props => {
  const {eachItem, checkBoxFlag, onClickedDeleteBtn} = props
  console.log(checkBoxFlag, "inCompo")
  const {id, siteLogo, siteName, userName, sitePassword} = eachItem
  // console.log(id)

  // Delete button Event listner 
  const onClickDeleteBtn = () => {
    onClickedDeleteBtn(id)
  }

  const showOrHidePassword = () => {

    let jsxElement
    if (checkBoxFlag){
      jsxElement = <p className="password-items-detail">Site Password: {sitePassword}</p>
    } 
    else {
      jsxElement = <img className="passwords-stars-img"
       src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars" 
        />
    }

    return jsxElement
  }


  return (
    <li className="password-item">
      <div className="password-details-container">
        <p className="password-item-logo">{siteLogo}</p>
        <div className="password-items-details">
        <h1 className="password-items-title">Site Name: {siteName}</h1>
        <p className="password-items-detail">User Name: {userName}</p>
        {showOrHidePassword()}
      </div>
      </div>

      <button onClick={onClickDeleteBtn} type="button" className="delete-btn">
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
