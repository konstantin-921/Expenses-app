import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import SwitchButton from './SwitchButton'
import Graph from './Graph'
import Categories from './Categories'
import _ from 'lodash'

function Main(props) {
  const { details, dispatchSetDetails } = useContext(AppContext)
  const [ isOpenCategory, setIsOpenCategory ] = useState('expensesDetails');
  const [ showPopup, setShowPopup ] = useState(false);
  const data = _.cloneDeep(details[isOpenCategory])

  return (
    <div className="main">
      <Graph data={data} type={isOpenCategory} />
      <SwitchButton setIsOpenCategory={(e) => setIsOpenCategory(e)} showPopup={showPopup} setShowPopup={setShowPopup} />
      <Categories className='mt3' data={data} type={isOpenCategory} showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
}

export default Main