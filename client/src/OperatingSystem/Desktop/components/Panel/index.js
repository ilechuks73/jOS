import { useState } from "react";
import { useStyles } from "./styles";
import { useApplicationMenu } from "../../state/hooks/applicationMenu";

export default function Panel() {
 const { toggleApplicationMenu } = useApplicationMenu();
 const classes = useStyles();
 return (
  <div className={classes.Panel}>
   <button className={"ApplicationMenuToggleButton"} onClick={toggleApplicationMenu}>
    Menu
   </button>
  </div>
 );
}
