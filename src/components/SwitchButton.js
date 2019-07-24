import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

function SwitchButton(props) {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} >
      <ToggleButton value="left" onClick={() => props.setIsOpenCategory('expensesDetails')}>
        Expenses
      </ToggleButton>
      <ToggleButton value="right" onClick={() => props.setIsOpenCategory('incomesDetails')}>
        Incomes
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default SwitchButton