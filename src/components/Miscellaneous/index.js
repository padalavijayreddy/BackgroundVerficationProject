import {Component} from 'react'

class Miscellaneous extends Component {
  render() {
    return (
      <div className="formContainer">
        <form className="basic-form" onSubmit={this.onSubmitForm}>
          <h1>MISCELLANEOUS DETAILS</h1>
          <hr />
        </form>
      </div>
    )
  }
}

export default Miscellaneous
