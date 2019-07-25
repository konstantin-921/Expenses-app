import React, { useContext, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import AppContext from '../context/AppContext'

function Graph(props) {
  const { details, dispatchSetDetails } = useContext(AppContext)

  const datasets = props.data.data.datasets.map(elem => ({
    ...elem,
    data: [...elem.data]
  }))

  return (
    <div className='mb4'>
      <Doughnut data={props.data.data} width={400} height={400} />
    </div>
  )
}

export default Graph;