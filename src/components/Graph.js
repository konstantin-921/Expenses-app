import React, { useContext } from 'react'
import { Doughnut } from 'react-chartjs-2'
import AppContext from '../context/AppContext'

function Graph(props) {
  const { details, dispatchSetDetails } = useContext(AppContext)

  const datasets = props.data.data.datasets.map(d => ({
    ...d,
    data: [...d.data]
  }))

  return (
    <div className='mb4'>
      <Doughnut data={{ labels: props.data.data.labels, datasets }} width={400} height={400} />
    </div>
  )
}

export default Graph;