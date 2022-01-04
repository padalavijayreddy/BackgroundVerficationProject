import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3175c9;
  height: 100vh;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  background-color: #ffffff;
  width: 90%;
  max-width: 350px;
  border-radius: 8px;
  box-shadow: '0px 8px 40px #ebebeb';
  padding: 32px 16px 32px 16px;
  @media screen and (min-width: 768px) {
    max-width: 450px;
    padding: 48px;
  }
`

export const WebsiteLogo = styled.img`
  width: 116px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    width: 185px;
    margin-bottom: 40px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
`

export const InputLabel = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const InputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #ffffff;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const CheckboxInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  align-items: center;
`

export const CheckboxInput = styled.input`
  height: 16px;
  width: 16px;
`

export const ShowPasswordLabel = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.7;
  margin: 0px;
  margin-left: 5px;
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #228b22;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  height: 40px;
  width: 100%;
  border-radius: 8px;
  border: none;
  margin-top: 24px;
  margin-bottom: 16px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 0px;
  }
`

export const ErrorMessage = styled.p`
  align-self: start;
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.33;
  margin-top: 3px;
  margin-bottom: 0px;
`

export const SignInHeader = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 400;
`
export const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  background-color: #ffffff;
  width: 90%;
  max-width: 350px;
  border-radius: 8px;
  box-shadow: '0px 8px 40px #ebebeb';
  padding: 16px 8px 16px 8px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    max-width: 450px;
    padding: 32px;
  }
`

export const NewUser = styled.p`
  font-size: 20px;
  color: #7e858e;
  margin: 5px;
`

export const CreateAccount = styled(Link)`
  font-size: 20px;
  color: #003366;
  margin: 5px;
`
