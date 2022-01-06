import {Component} from 'react'
import {v4} from 'uuid'

import './index.css'

class Miscellaneous extends Component {
  state = {
    additionalInformationInput: '',
    startDate: '',
    endDate: '',
    gapClarification: '',
    gapDetailsList: [],
  }

  onChangeAdditionalInformationInput = event => {
    this.setState({additionalInformationInput: event.target.value})
  }

  renderAdditionalInformation = () => {
    const {additionalInformationInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="additionalInformation">
          Additional Information, if any:
        </label>
        <textarea
          className="text-area"
          id="additionalInformation"
          rows="4"
          cols="50"
          placeholder="Enter Additional Information..."
          required="required"
          value={additionalInformationInput}
          onChange={this.onChangeAdditionalInformationInput}
        />
      </div>
    )
  }

  addGapDetails = () => {
    const {startDate, endDate, gapClarification} = this.state

    const gapDetails = {
      id: v4(),
      startDate,
      endDate,
      gapClarification,
    }

    this.setState(prevState => ({
      gapDetailsList: [...prevState.gapDetailsList, gapDetails],
      startDate: '',
      endDate: '',
      gapClarification: '',
    }))
  }

  renderEndOfDate = () => {
    const {dateOfJoining} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="endDate">
          End Date:
        </label>
        <input
          className="form-control"
          id="endDate"
          type="date"
          value={dateOfJoining}
          placeholder="Enter the Date of Joining"
          onChange={this.onChangeDateOfJoining}
        />
      </div>
    )
  }

  renderStartOfDate = () => {
    const {dateOfJoining} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="dateOfJoining">
          Start Date:
        </label>
        <input
          className="form-control"
          id="dateOfJoining"
          type="date"
          required="required"
          value={dateOfJoining}
          placeholder="Enter the Date of Joining"
          onChange={this.onChangeDateOfJoining}
        />
      </div>
    )
  }

  renderGapDetails = () => {
    const {gapDetailsList} = this.state

    return (
      <div>
        <label className="label-text" htmlFor="gapDetails">
          Gap Details
        </label>
        <div className="another-gap">
          <button
            className="add-button"
            type="button"
            onClick={this.addGapDetails}
          >
            Add Another Gap
          </button>
        </div>
        {gapDetailsList.map(eachItem => (
          <fieldset className="field-set">
            <legend className="header-text-employment">Gap Details:</legend>
            <form className="basic-form" onSubmit={this.onSubmitForm}>
              <div>will do later</div>
            </form>
          </fieldset>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="formContainer">
        <h1 className="header-text">Miscellaneous DETAILS</h1>
        <hr color="#edf1f2" />
        <form className="basic-form" onSubmit={this.onSubmitForm}>
          {this.renderGapDetails()}
          {this.renderAdditionalInformation()}
        </form>
      </div>
    )
  }
}

export default Miscellaneous
