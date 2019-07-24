import React, { useReducer, useState } from 'react'
import AppContext from './AppContext'

function AppProviders({ children }) {

  function productExpensesDetailsReducer(expensesDetailsState, action) {
    switch (action.type) {
      case 'add-category':
        return {
          ...expensesDetailsState,
        }
      default:
        return expensesDetailsState
    }
  }

  function productIncomesDetailsReducer(incomesDetailsState, action) {
    switch (action.type) {
      
      default:
        return incomesDetailsState
    }
  }

  const [ details, dispatchSetDetails ] = useReducer((state, action) => {
    return {
      expensesDetails: productExpensesDetailsReducer(state.expensesDetails, action),
      incomesDetails: productIncomesDetailsReducer(state.incomesDetails, action)
    }
  }, {
      'expensesDetails': {
        data: {
          labels: [
            'Supermarket',
            'Gas station',
            'Tennis'
          ],
          datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#999794',
            '#01801b',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#999794',
            '#01801b',
            '#FFCE56'
            ]
          }]
        },
        categories: [
          { name: 'Supermarket', value: 300 },
          { name: 'Gas station', value: 50 },
          { name: 'Tennis', value: 100 }
        ]
      },
      'incomesDetails': {
        data: {
          labels: [
            'Remittances',
            'Job 1',
            'Job 2'
          ],
          datasets: [{
            data: [200, 150, 50],
            backgroundColor: [
            '#fc03f8',
            '#fc0303',
            '#0377fc'
            ],
            hoverBackgroundColor: [
            '#fc03f8',
            '#fc0303',
            '#0377fc'
            ]
          }]
        },
        categories: [
          { name: 'Remittances', value: 200 },
          { name: 'Job 1', value: 150 },
          { name: 'Job 2', value: 50 }
        ]
      }
    });

  return (
    <AppContext.Provider value={{details, dispatchSetDetails}}>
      {children}
    </AppContext.Provider >
  )
}

export default AppProviders