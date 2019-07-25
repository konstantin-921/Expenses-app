import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppContext from '../context/AppContext'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import randomColor from 'randomcolor'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '25px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  menu: {
    width: 200,
  },
}));

function MenuPopup(props) {
  const appContext = useContext(AppContext)
  const dispatch = appContext.dispatchSetDetails
  const classes = useStyles()
  const [values, setValues] = useState({
    total: '',
    categoriesArray: [],
    categoriesValue: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  useEffect(() => {
    const allCategories = appContext.details.categories[props.type]
    const typeCategories = appContext.details[props.type].categories
    const nonExistCategories = _.differenceBy(allCategories, typeCategories, 'name')
    setValues({ ...values, categoriesArray: nonExistCategories })
  }, [appContext])

  const sendCategory = () => event => {
    event.preventDefault()
    const color = randomColor(); // a hex code for an attractive color
    dispatch({ type: 'remove-category', payload: { name: values.categoriesValue, type: props.type }})
    dispatch({ type: `add-category-${props.type}`, payload: { name: values.categoriesValue, value: values.total, color } })
    props.closePopup(false)
  }

  return (
      <div className='flex flex-column items-center menu-popup pa3'>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            className={classes.textField}
            value={values.categoriesValue}
            onChange={handleChange('categoriesValue')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your category"
            margin="normal"
          >
            {values.categoriesArray.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-number"
            label="Total"
            value={values.total}
            onChange={handleChange('total')}
            type="number"
            className={classes.textField}
            margin="normal"
          />
          <button 
            className='w4 mt3'
            onClick={sendCategory()}
          >
            Add new
          </button>
        </form>
        <button 
          className='w4'
          onClick={() => props.closePopup(false)}
        >
          Close
        </button>
      </div>
  )
}

export default MenuPopup
