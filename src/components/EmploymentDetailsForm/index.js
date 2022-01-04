import {Component} from 'react'

class EmploymentDetailsForm extends Component {
  render() {
    return (
      <div className="formContainer">
        <form className="basic-form" onSubmit={this.onSubmitForm}>
          <h1>EMPLOYMENT DETAILS</h1>
          <hr />
        </form>
      </div>
    )
  }
}

export default EmploymentDetailsForm
