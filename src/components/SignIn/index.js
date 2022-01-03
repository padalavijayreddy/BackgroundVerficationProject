import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  SignInForm,
  InputContainer,
  InputLabel,
  InputField,
  CheckboxInputContainer,
  CheckboxInput,
  ShowPasswordLabel,
  SignInButton,
  ErrorMessage,
  SignInHeader,
  SignInContainer,
  NewUser,
  CreateAccount,
} from './styledComponents'

class SignIn extends Component {
  state = {
    userNameInput: '',
    passwordInput: '',
    showSubmitError: false,
    showPassword: false,
    errorMsg: '',
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderShowPasswordCheckboxField = () => {
    const {showPassword} = this.state

    return (
      <CheckboxInputContainer>
        <CheckboxInput
          type="checkbox"
          id="showPassword"
          onChange={this.onChangeShowPassword}
          checked={showPassword}
        />
        <ShowPasswordLabel htmlFor="showPassword">
          Show Password
        </ShowPasswordLabel>
      </CheckboxInputContainer>
    )
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  renderPasswordInputField = () => {
    const {password, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'

    return (
      <InputContainer>
        <InputLabel htmlFor="passwordInput">Password</InputLabel>
        <InputField
          type={passwordType}
          id="passwordInput"
          value={password}
          onChange={this.onChangePasswordInput}
          placeholder="Enter your Password"
        />
      </InputContainer>
    )
  }

  onChangeUsernameInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  renderUsernameInputField = () => {
    const {username} = this.state

    return (
      <InputContainer>
        <InputLabel htmlFor="userNameInput">Email address</InputLabel>
        <InputField
          type="text"
          id="userNameInput"
          value={username}
          onChange={this.onChangeUsernameInput}
          placeholder="Enter your email address"
        />
      </InputContainer>
    )
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userNameInput, passwordInput} = this.state
    const userDetails = {username: userNameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/SignIn'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <SignInHeader>Sign in to your Account</SignInHeader>
        <SignInForm onSubmit={this.onSubmitForm}>
          {this.renderUsernameInputField()}
          {this.renderPasswordInputField()}
          {this.renderShowPasswordCheckboxField()}
          <SignInButton type="submit">Sign in</SignInButton>
          {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </SignInForm>
        <SignInContainer>
          <NewUser>New user?</NewUser>
          <CreateAccount href="">Create an account</CreateAccount>
        </SignInContainer>
      </AppContainer>
    )
  }
}

export default SignIn
