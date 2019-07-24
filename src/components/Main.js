import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import SwitchButton from './SwitchButton'
import Graph from './Graph'
import Categories from './Categories'

function Main(props) {
  const { details, dispatchSetDetails } = useContext(AppContext)
  const [ isOpenCategory, setIsOpenCategory ] = useState('expensesDetails');
  const data = details[isOpenCategory]

  return (
    <div className="main">
      <Graph data={data} type={isOpenCategory} />
      <SwitchButton setIsOpenCategory={(e) => setIsOpenCategory(e)} />
      <Categories className='mt3' data={data} type={isOpenCategory} />
    </div>
  );
}

export default Main