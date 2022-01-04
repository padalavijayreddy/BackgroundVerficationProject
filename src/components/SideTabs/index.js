import './index.css'

const SideTabs = props => {
  const {itemDetails, isActive, onChangeActiveFormId} = props
  const {name, id} = itemDetails
  const number = id + 1
  const tabNumberClassName = isActive ? 'highlight-circle' : 'circle'
  const tabNameClassName = isActive ? 'highlight-name' : 'name'
  const onChangeTab = () => {
    onChangeActiveFormId(id)
  }

  return (
    <div className="tab-item">
      <button
        type="button"
        className={`button-class ${tabNumberClassName}`}
        onClick={onChangeTab}
      >
        {number}
      </button>
      <button
        type="button"
        className={`tab-name ${tabNameClassName}`}
        onClick={onChangeTab}
      >
        {name}
      </button>
    </div>
  )
}

export default SideTabs
