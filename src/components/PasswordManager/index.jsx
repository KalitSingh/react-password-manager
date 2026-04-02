import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const initialPasswordsList = [
  {
    id: uuidv4(),
    siteLogo: 'G',
    siteName: 'gmail.com',
    userName: 'Kalit',
    sitePassword: '12345678',
  },
  {
    id: uuidv4(),
    siteLogo: 'G',
    siteName: 'gmail.com',
    userName: 'Kalit',
    sitePassword: '12345678',
  },
  {
    id: uuidv4(),
    siteLogo: 'G',
    siteName: 'gmail.com',
    userName: 'Kalit',
    sitePassword: '12345678',
  },
]

class PasswordManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordsList: initialPasswordsList,
      lenOfPasswords: initialPasswordsList.length,
      showPassword: false,
    }
  }

  render() {
    const {passwordsList, lenOfPasswords, showPassword} = this.state
    console.log(lenOfPasswords)

    return (
      <>
        <div className="password-manager-bg-container">
          <div className="password-manager-header">
            <img
              className="password-manager-header-logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="logo"
            />
          </div>
          <div className="password-manager-cards-container">
            <div className="landing-page-container">
              <img
                className="landing-page-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
              />
              <div className="landing-page-user-form-container">
                <p className="user-form-title">Add New Password</p>
                <form className="landing-page-user-form">
                  <input
                    placeholder="Enter a Website"
                    className="user-form-inputs"
                    type="text"
                  />
                  <input
                    placeholder="Enter a Website"
                    className="user-form-inputs"
                    type="password"
                  />
                  <input
                    placeholder="Enter a Website"
                    className="user-form-inputs"
                    type="text"
                  />
                  <button type="submit" className="user-form-btn">
                    Add
                  </button>
                </form>
              </div>
            </div>
            <div className="password-manager-container">
              <div className="password-manager-header-part">
                <p className="password-counter">
                  Total Passwords <span className="counts">{0}</span>
                </p>
                <div className="search-password-container">
                  <input
                    placeholder="Search here..."
                    className="search-password"
                    type="search"
                  />
                </div>
              </div>
              <hr className="horizontal-rule-2" />
              <div className="showPassword-container">
                <input id="showPassword" type="checkbox" />
                <label htmlFor="showPassword">Show Passwords</label>
              </div>
              <ul className="password-items-container">
                {passwordsList.map(eachItem => (
                  <PasswordItem
                    eachItem={eachItem}
                    checkBoxFlag={showPassword}
                    onclickedDeleteBtn={this.onclickedDeleteBtn}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PasswordManager
