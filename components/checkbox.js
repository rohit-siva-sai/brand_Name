import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  root: {
    '&$checked': {
      color: '#000',
    },
  },
  checked: {},
  wrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 0,
  },
  label: {
    fontSize: '.8rem',
    fontFamily: `'Raleway', sans-serif`,
  },
});

const Checkbox = ({ heading, value, filters, handle,material,type ,category,handleDisable,disable}) => {
 
  const classes = useStyles();
  return (
    <div className="flex items-center space-x-8">
      <input
        // type={category=="category" ? "radio": "checkbox"}
        type="checkbox"
        name={material=="material" ? "material" : type=="type" ? "type" : "category"}
        value={value}
        disabled={disable}
        classes={{
          checked: classes.checked,
          root: classes.root,
        }}
        // checked={true}
        onChange={(e) => {
          if(value=="metal" || value=="plastic")  handle(value);
          filters(e.target.value, e.target.checked);
         handleDisable(e.target.value)
        }}
        // defaultChecked={true}
        id=""
        className="md:w-4 md:h-4 cursor-pointer "
      />
      <label htmlFor="" className="text-gray-400 font-semibold">
        {heading}
      </label>
    </div>
  );
};

export default Checkbox;
