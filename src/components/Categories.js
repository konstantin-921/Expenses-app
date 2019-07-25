import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import MenuPopup from './MenuPopup'

function Categories(props) {
  const { details, dispatchSetDetails } = useContext(AppContext)
  const { categories, data } = props.data
  // const [ showPopup, setShowPopup ] = useState(false);

  // const closePopup = () => {
  //   props.setShowPopup(false);
  // };

  const removeCategory = (event, index) => {
    dispatchSetDetails({ type: `remove-category-${props.type}`, payload: { index } })
  }

  const renderCategory = categories.map((elem, index) => {
    return (
      <div
        key={index} 
        style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
        className='flex flex-row justify-between relative items-center pl2 pr5 mb3 h2 w5 '
      >
        <span>{elem.name}</span>
        <span>{elem.value}</span>
        <div 
          className='absolute pointer right-1  f3'
          style={{ bottom: '5px' }}
          onClick={(event) => removeCategory(event, index)}
          >
            x
        </div>
      </div>
    )
  })

  return (
    <div className='flex flex-column items-center mt5 relative'>
      {renderCategory}
      <button 
        className='w4'
        onClick={() => props.setShowPopup(true)}
      >
        Add category
      </button>
      {props.showPopup ? <MenuPopup closePopup={props.setShowPopup} showPopup={props.showPopup} type={props.type} /> : null}
    </div>
  );
}

export default Categories