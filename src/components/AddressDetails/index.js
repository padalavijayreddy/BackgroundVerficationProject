import {Component} from 'react'
import './index.css'

class AddressDetails extends Component {
  state = {
    addressInput: '',
  }

  onChangeAddressInput = event => {
    this.setState({addressInput: event.target.value})
  }

  onSubmitForm = () => {
    const {maritalStatus} = this.state
    console.log(maritalStatus)
  }

  renderAddress = () => {
    const {addressInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="address">
          Residential Address
          <span className="text-danger">*</span>
        </label>
        <textarea
          className="text-area"
          id="address"
          rows="4"
          cols="50"
          placeholder="Enter address..."
          required="required"
          value={addressInput}
          onChange={this.onChangeAddressInput}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="formContainer">
        <h1 className="header-text">ADDRESS DETAILS</h1>
        <hr color="#edf1f2" />
        <fieldset className="field-set">
          <legend className="header-text-employment">Address 1:</legend>
          <form className="basic-form" onSubmit={this.onSubmitForm}>
            {this.renderAddress()}
          </form>
        </fieldset>
      </div>
    )
  }
}

export default AddressDetails
