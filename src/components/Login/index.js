import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  LoginForm,
  InputContainer,
  InputLabel,
  InputField,
  CheckboxInputContainer,
  CheckboxInput,
  ShowPasswordLabel,
  LoginButton,
  ErrorMessage,
  SignInHeader,
  SignInContainer,
  NewUser,
  CreateAccount,
} from './styledComponents'

class Login extends Component {
  state = {
    emailAddressInput: '',
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

  onChangeEmailAddressInput = event => {
    this.setState({emailAddressInput: event.target.value})
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
    const {emailAddressInput, passwordInput} = this.state
    const userDetails = {username: emailAddressInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
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
        <LoginForm onSubmit={this.onSubmitForm}>
          {this.renderEmailAddressInputField()}
          {this.renderPasswordInputField()}
          {this.renderShowPasswordCheckboxField()}
          <LoginButton type="submit">Sign in</LoginButton>
          {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </LoginForm>
        <SignInContainer>
          <NewUser>New user?</NewUser>
          <CreateAccount to="/sign-in">Create an account</CreateAccount>
        </SignInContainer>
      </AppContainer>
    )
  }
}

export default Login
