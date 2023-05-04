import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },
  checked: {},
//   wrap: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row-reverse",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingRight: "4px",
//     marginLeft: 0,
//   },
//   label: {
//     fontSize: ".8rem",
//     fontFamily: `'Raleway', sans-serif`,
//   },
});

const CheckboxProton = ({ changeChecked, item,handle,disable=false,handleDisable }) => {
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
            disabled={disable}
            onChange={() =>{
                if(label=="metal" || label=="plastic") {
                    handle(label);
                    handleDisable(label)
                }
                changeChecked(id)}}
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
        }
       
      />
      <label className="text-gray-400 first-letter:uppercase font-semibold" >{label}</label>
    </div>
  );
};

export default CheckboxProton;
