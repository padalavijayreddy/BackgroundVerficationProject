import {Component} from 'react'

class AddressDetails extends Component {
  render() {
    return (
      <div className="formContainer">
        <form className="basic-form" onSubmit={this.onSubmitForm}>
          <h1>ADDRESS DETAILS</h1>
          <hr />
        </form>
      </div>
    )
  }
}

export default AddressDetails
