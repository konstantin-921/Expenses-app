import React, { useContext } from 'react'
import onClickOutside from "react-onclickoutside"
import { makeStyles } from '@material-ui/core/styles'
import AppContext from '../context/AppContext'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: '20px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

function MenuPopup(props) {
  const appContext = useContext(AppContext)
  const classes = useStyles()

  const [values, setValues] = React.useState({
    name: '',
    total: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  MenuPopup.handleClickOutside = () => props.closePopup()

  return (
      <div className='menu-popup pa3'>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Total"
            value={values.total}
            onChange={handleChange('total')}
            type="number"
            className={classes.textField}
            margin="normal"
          />
        </form>
      </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => MenuPopup.handleClickOutside
};

export default onClickOutside(MenuPopup, clickOutsideConfig)
