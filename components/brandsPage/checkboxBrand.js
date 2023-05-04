import React from 'react'
import { Checkbox, FormControlLabel } from "@mui/material";

import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
    root: {
      "&$checked": {
        color: "#000",
      },
    },
    checked: {},
  });

const CheckboxBrand = ({item,handleBrandStoreChecked}) => {
    const classes = useStyles();
    const { checked, label, id } = item;
  return (
    <div className="flex items-center space-x-2" >
      <FormControlLabel
        
        control={
          <Checkbox
            // type='checkbox'
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            // disabled={disable}
            onChange={() =>{
                // if(label=="metal" || label=="plastic") {
                //     handle(label);
                //     handleDisable(label)
                // }
                handleBrandStoreChecked(id)}}
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
        }
       
      />
      <label className="text-gray-400 first-letter:uppercase text-sm font-semibold" >{label}</label>
    </div>
  )
}

export default CheckboxBrand
