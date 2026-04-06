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
    siteName: 'google.com',
    userName: 'Kalit',
    sitePassword: '12345678',
  },
  {
    id: uuidv4(),
    siteLogo: 'G',
    siteName: 'flipcart.com',
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
      siteNameInput: "",
      userNameInput: "",
      passwordInput: "",
      passwordsList: initialPasswordsList,
      searchInputValue: "",
      showPassword: false,
    }
  }

  // Event Listner function of passwordItem component delete button 
  onClickedDeleteBtn = (rId) => {
    const {passwordsList} = this.state

    const remainingPasswordsItems = passwordsList.filter((eachItem) => (eachItem.id !== rId))

    // updating passwordsList in state with remainig passwordsList object after deletion 
    this.setState({passwordsList: remainingPasswordsItems})
  }

  // Event Listner for Checkbox input element, show/hide password feature
  onChangeCheckBoxInput = (event) => {
    console.log(event.target.checked)

    this.setState({showPassword: event.target.checked})
  }

  // Event listner of Search Input element 
  onChangeSearchInput = (event) => {
    const searchValueLowerCase = event.target.value.toLowerCase()

    this.setState({searchInputValue: searchValueLowerCase})
  }

  // Event Listner for Add button of form element
  onClickAddBtn = (event) => {
    // preventing default behaviour of form element 
    event.preventDefault()
    console.log("clicked") 
    const {siteNameInput, userNameInput, passwordInput} = this.state 

    // formatting user data as object format stored in the initialiPasswordList to store in passwordList inside state
    const dataObjectFormat = {
      id: uuidv4(),
      siteName: siteNameInput,
      userName: userNameInput,
      sitePassword: passwordInput
    }

    // storing userData in state if database connected hota to db/server pe send karte
    this.setState((prevState) => {
      // this is shorthand method but suitable for one operation only
      // {passwordsList: [...prevState.passwordsList, dataObjectFormat]}
      const passwordsList = prevState.passwordsList 

      return {
        passwordsList: [...passwordsList, dataObjectFormat],
        siteNameInput: "",
        userNameInput: "",
        passwordInput: ""
      }
    })

  }


  // Event listner for Password form input element
  onChangePasswordInput = (event) => {
    // console.log(event.target.value)
    const passwordInputValueLowerCase = event.target.value.toLowerCase()
    this.setState({passwordInput: passwordInputValueLowerCase})
  }

  // Event listner for site name form input element
  onChangeSiteNameInput = (event) => {
    // console.log(event.target.value)
    const siteInputValueLowerCase = event.target.value.toLowerCase()
    this.setState({siteNameInput: siteInputValueLowerCase})

  }

    // Event listner for username form input element
  onChangeUserNameInput = (event) => {
    // console.log(event.target.value)
    const userNameInputValueLowerCase = event.target.value.toLowerCase()
    this.setState({userNameInput: userNameInputValueLowerCase})
  }


  render() {
    const {passwordsList, searchInputValue, showPassword, siteNameInput, userNameInput, passwordInput} = this.state

    // stored passwordsList or filtered when user search it 
    const filteredSavedPasswordsList = passwordsList.filter((eachPass) => (eachPass.siteName.includes(searchInputValue)))

    // finding length of Passwords stored in the current searched passwordsList when user search
    const lenOfPasswords = filteredSavedPasswordsList.length 


    // console.log(passwordsList)
    // console.log(siteNameInput)
    // console.log(userNameInput)
    // console.log(passwordInput)

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
              <picture className="langing-page-img-container">
                <source media="(min-width: 768px)" srcSet="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" />
                <img
                className="landing-page-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
              />
              </picture>
              <div className="landing-page-user-form-container">
                <p className="user-form-title">Add New Password</p>
                <form className="landing-page-user-form">
                  <input
                    onChange={this.onChangeSiteNameInput}
                    placeholder="Enter a Website"
                    value={siteNameInput}
                    className="user-form-inputs"
                    type="text"
                  />
                  <input
                    onChange={this.onChangeUserNameInput}
                    placeholder="Enter UserName"
                    value={userNameInput}
                    className="user-form-inputs"
                    type="text"
                  />
                  <input
                    onChange={this.onChangePasswordInput}
                    placeholder="Enter Password"
                    value={passwordInput}
                    className="user-form-inputs"
                    type="password"
                  />
                  <button
                  onClick={this.onClickAddBtn}
                  type="submit" className="user-form-btn">
                    Add
                  </button>
                </form>
              </div>
            </div>
            <div className="password-manager-container">
              <div className="password-manager-header-part">
                <p className="password-counter">
                  Total Passwords <span className="counts">{lenOfPasswords}</span>
                </p>
                <div className="search-password-container">
                  <input
                    onChange={this.onChangeSearchInput}
                    placeholder="Search here..."
                    value={searchInputValue}
                    className="search-password"
                    type="search"
                  />
                </div>
              </div>
              <hr className="horizontal-rule-2" />
              <div className="showPassword-container">
                <input
                 onChange={this.onChangeCheckBoxInput}
                 id="showPassword"
                 type="checkbox" />
                <label htmlFor="showPassword">Show Passwords</label>
              </div>
              {
                // handling No password case, showing image when no password will be in passwordsList and showing saved passwords Cards in UI
                lenOfPasswords === 0 ? 
                <>
                <div className="no-password-img-container">
                <img className="no-password-img" src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="no Password" /> 
                <p style={{"text-align": "center", "font-size": "26px"}}>No Password</p>
                </div>
                </>
                :
                <ul className="password-items-container">
                   { filteredSavedPasswordsList.map(eachItem => (
                    <PasswordItem
                      eachItem={eachItem}
                      id={eachItem.id}
                      checkBoxFlag={showPassword}
                      onClickedDeleteBtn={this.onClickedDeleteBtn}
                    />
                  ))}
                  
                </ul>
              }
              <hr className="horizontal-rule-2" />
              <p className="kalit-name-footer-title" >Made with &hearts; by Kalit S</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PasswordManager
