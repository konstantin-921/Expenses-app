import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import MenuPopup from './MenuPopup';

function Categories(props) {
  const { details, dispatchSetDetails } = useContext(AppContext)
  const { categories, data } = props.data
  const [ showPopup, setShowPopup ] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  const renderCategory = categories.map((elem, index) => {
    return (
      <div
        key={index} 
        style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
        className='flex flex-row justify-between items-center pl2 pr2 mb3 h2 w5 '
      >
        <span>{elem.name}</span>
        <span>{elem.value}</span>
      </div>
    )
  })

  return (
    <div className='flex flex-column items-center mt5 relative'>
      {renderCategory}
      <button 
        className='w4'
        onClick={() => setShowPopup(true)}
      >
        Add category
      </button>
      {showPopup ? <MenuPopup closePopup={closePopup} showPopup={showPopup} /> : null}
    </div>
  );
}

export default Categories