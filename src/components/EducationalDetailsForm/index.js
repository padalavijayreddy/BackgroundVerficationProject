import {Component} from 'react'

class EducationalDetailsForm extends Component {
  render() {
    return (
      <div className="formContainer">
        <form className="basic-form" onSubmit={this.onSubmitForm}>
          <h1>EDUCATIONAL DETAILS</h1>
          <hr />
        </form>
      </div>
    )
  }
}

export default EducationalDetailsForm
