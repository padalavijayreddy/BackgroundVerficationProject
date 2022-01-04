import {Component} from 'react'

class BasicDetailsForm extends Component {
  render() {
    return (
      <div className="formContainer">
        <form className="basic-form" onSubmit={this.onSubmitForm}>
          <h1>BASIC DETAILS</h1>
          <hr />
        </form>
      </div>
    )
  }
}

export default BasicDetailsForm
