import React, { useReducer, useState, useCallback } from 'react'
import AppContext from './AppContext'

const defaultExpensesDetailsState = {
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
};

const defaultIncomesDetails = {
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
};

const defaultCategory = {
  expensesDetails: [ 
    { value: 'Supermarket', name: 'Supermarket', label: 'Supermarket' },
    { value: 'Gas station', name: 'Gas station', label: 'Gas station' },
    { value: 'Tennis', name: 'Tennis', label: 'Tennis' },
    { value: 'Health', name: 'Health', label: 'Health' },
    { value: 'Car', name: 'Car', label: 'Car' },
    { value: 'Education', name: 'Education', label: 'Education' },
    { value: 'Clothing', name: 'Clothing', label: 'Clothing' },
    { value: 'Travel', name: 'Travel', label: 'Travel' }
  ],
  incomesDetails: [
    { value: 'Remittances', name: 'Remittances', label: 'Remittances' },
    { value: 'Job 1', name: 'Job 1', label: 'Job 1' },
    { value: 'Job 2', name: 'Job 2', label: 'Job 2' },
    { value: 'Refund', name: 'Refund', label: 'Refund' },
    { value: 'Other income', name: 'Other income', label: 'Other income' },
    { value: 'Transfer', name: 'Transfer', label: 'Transfer' }
  ]
}

const defaultValues = {
  expensesDetails: defaultExpensesDetailsState,
  incomesDetails: defaultIncomesDetails,
  categories: defaultCategory
};

function productExpensesDetailsReducer(expensesDetailsState, action) {
  switch (action.type) {
    case 'add-category-expensesDetails':
      return {
        ...expensesDetailsState,
        ...expensesDetailsState.data.labels.push(action.payload.name),
        ...expensesDetailsState.data.datasets[0].data.push(action.payload.value),
        ...expensesDetailsState.data.datasets[0].backgroundColor.push(action.payload.color),
        ...expensesDetailsState.data.datasets[0].hoverBackgroundColor.push(action.payload.color),
        ...expensesDetailsState.categories.push({ name: action.payload.name, value: action.payload.value }),
      }
    case 'remove-category-expensesDetails':
      return {
        ...expensesDetailsState,
        ...expensesDetailsState.data.labels.splice(action.payload.index, 1),
        ...expensesDetailsState.data.datasets[0].data.splice(action.payload.index, 1),
        ...expensesDetailsState.data.datasets[0].backgroundColor.splice(action.payload.index, 1),
        ...expensesDetailsState.data.datasets[0].hoverBackgroundColor.splice(action.payload.index, 1),
        ...expensesDetailsState.categories.splice(action.payload.index, 1),
      }
    default:
      return expensesDetailsState
  }
}

function productIncomesDetailsReducer(incomesDetailsState, action) {
  switch (action.type) {
    case 'add-category-incomesDetails':
      return {
        ...incomesDetailsState,
        ...incomesDetailsState.data.labels.push(action.payload.name),
        ...incomesDetailsState.data.datasets[0].data.push(action.payload.value),
        ...incomesDetailsState.data.datasets[0].backgroundColor.push(action.payload.color),
        ...incomesDetailsState.data.datasets[0].hoverBackgroundColor.push(action.payload.color),
        ...incomesDetailsState.categories.push({ name: action.payload.name, value: action.payload.value })
      }
    case 'remove-category-incomesDetails':
      return {
        ...incomesDetailsState,
        ...incomesDetailsState.data.labels.splice(action.payload.index, 1),
        ...incomesDetailsState.data.datasets[0].data.splice(action.payload.index, 1),
        ...incomesDetailsState.data.datasets[0].backgroundColor.splice(action.payload.index, 1),
        ...incomesDetailsState.data.datasets[0].hoverBackgroundColor.splice(action.payload.index, 1),
        ...incomesDetailsState.categories.splice(action.payload.index, 1)
      }
    default:
      return incomesDetailsState
  }
}

function categoriesReducer(categoriesState, action) {
  switch (action.type) {
    case 'remove-category':
      const filteredCategories = categoriesState[action.payload.type].filter(elem => {
        return elem.name !== action.payload.name
      })
      return {
        ...categoriesState,
        [action.payload.type]: filteredCategories
      }
    case 'add-category':
      return {
        ...categoriesState
      }
    default:
      return categoriesState
  }
}

const reducer = (state, action) => {
  return {
    expensesDetails: productExpensesDetailsReducer(state.expensesDetails, action),
    incomesDetails: productIncomesDetailsReducer(state.incomesDetails, action),
    categories: categoriesReducer(state.categories, action),
  }
};

function AppProviders({ children }) {

  const [ details, dispatchSetDetails ] = useReducer(reducer, defaultValues);

  return (
    <AppContext.Provider value={{details, dispatchSetDetails}}>
      {children}
    </AppContext.Provider >
  )
}

export default AppProviders