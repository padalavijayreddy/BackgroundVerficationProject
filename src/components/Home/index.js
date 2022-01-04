import {Component} from 'react'

import BasicDetailsForm from '../BasicDetailsForm'
import EmploymentDetailsForm from '../EmploymentDetailsForm'
import AddressDetails from '../AddressDetails'
import EducationalDetailsForm from '../EducationalDetailsForm'
import Miscellaneous from '../Miscellaneous'

import Header from '../Header'
import SideTabs from '../SideTabs'

import './index.css'

const Forms = [
  {
    name: 'BASIC DETAILS',
    id: 0,
  },
  {
    name: 'EMPLOYMENT DETAILS',
    id: 1,
  },
  {
    name: 'ADDRESS DETAILS',
    id: 2,
  },
  {
    name: 'EDUCATIONAL DETAILS',
    id: 3,
  },
  {
    name: 'MISCELLANEOUS',
    id: 4,
  },
]

class Home extends Component {
  state = {
    activeFormId: 0,
  }

  onChangeActiveFormId = id => {
    this.setState({
      activeFormId: id,
    })
  }

  renderForm = () => {
    const {activeFormId} = this.state

    switch (activeFormId) {
      case Forms[0].id:
        return <BasicDetailsForm />
      case Forms[1].id:
        return <EmploymentDetailsForm />
      case Forms[2].id:
        return <AddressDetails />
      case Forms[3].id:
        return <EducationalDetailsForm />
      case Forms[4].id:
        return <Miscellaneous />
      default:
        return null
    }
  }

  renderSideView = () => {
    const {activeFormId} = this.state
    return Forms.map(eachItem => (
      <SideTabs
        itemDetails={eachItem}
        isActive={activeFormId === eachItem.id}
        onChangeActiveFormId={this.onChangeActiveFormId}
      />
    ))
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="assessment">
          <div className="assessment-responsive-container">
            <div className="side-view-container">{this.renderSideView()}</div>
            <div className="form-view-container">{this.renderForm()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
