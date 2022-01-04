import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  SignInForm,
  InputContainer,
  InputLabel,
  InputField,
  SignInButton,
  ErrorMessage,
  SignInHeader,
  SignInContainer,
  NewUser,
  CreateAccount,
} from './styledComponents'

class SignIn extends Component {
  state = {
    nameInput: '',
    userNameInput: '',
    emailAddressInput: '',
    passwordInput: '',
    confirmPasswordInput: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangeEmailAddressInput = event => {
    this.setState({emailAddressInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeConfirmPasswordInput = event => {
    this.setState({confirmPasswordInput: event.target.value})
  }

  renderNameInputField = () => {
    const {nameInput} = this.state

    return (
      <InputContainer>
        <InputLabel htmlFor="nameInput">Name</InputLabel>
        <InputField
          type="text"
          id="nameInput"
          value={nameInput}
          onChange={this.onChangeNameInput}
          placeholder="Enter your Full Name"
        />
      </InputContainer>
    )
  }

  renderUsernameInputField = () => {
    const {userNameInput} = this.state

    return (
      <InputContainer>
        <InputLabel htmlFor="userNameInput">Username</InputLabel>
        <InputField
          type="text"
          id="userNameInput"
          value={userNameInput}
          onChange={this.onChangeUsernameInput}
          placeholder="Enter your Username"
        />
      </InputContainer>
    )
  }

  renderEmailAddressInputField = () => {
    const {emailAddressInput} = this.state

    return (
      <InputContainer>
        <InputLabel htmlFor="emailAddressInput">Email address</InputLabel>
        <InputField
          type="text"
          id="emailAddressInput"
          value={emailAddressInput}
          onChange={this.onChangeEmailAddressInput}
          placeholder="Enter your email address"
        />
      </InputContainer>
    )
  }

  renderPasswordInputField = () => {
    const {passwordInput} = this.state

    return (
      <InputContainer>
        <InputLabel htmlFor="passwordInput">Password</InputLabel>
        <InputField
          type="password"
          id="passwordInput"
          value={passwordInput}
          onChange={this.onChangePasswordInput}
          placeholder="Enter your Password"
        />
      </InputContainer>
    )
  }

  renderConfirmPasswordInputField = () => {
    const {confirmPasswordInput} = this.state

    return (
      <InputContainer>
        <InputLabel htmlFor="confirmPasswordInput">Confirm Password</InputLabel>
        <InputField
          type="password"
          id="confirmPasswordInput"
          value={confirmPasswordInput}
          onChange={this.onChangeConfirmPasswordInput}
          placeholder="Enter your Confirm Password"
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
        <SignInHeader>Register your Account</SignInHeader>
        <SignInForm onSubmit={this.onSubmitForm}>
          {this.renderNameInputField()}
          {this.renderUsernameInputField()}
          {this.renderEmailAddressInputField()}
          {this.renderPasswordInputField()}
          {this.renderConfirmPasswordInputField()}
          <SignInButton type="submit">Sign up</SignInButton>
          {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
          <SignInContainer>
            <NewUser>Already have an account?</NewUser>
            <CreateAccount href="">Sign in</CreateAccount>
          </SignInContainer>
        </SignInForm>
      </AppContainer>
    )
  }
}

export default SignIn
