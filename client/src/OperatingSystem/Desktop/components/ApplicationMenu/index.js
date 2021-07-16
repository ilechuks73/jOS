import React from "react";
import { useStyles } from "./styles";
import { useApplicationMenu } from "../../state/hooks/applicationMenu";

export default function ApplicationMenu() {
 const classes = useStyles();
 const{toggleApplicationMenu} = useApplicationMenu()
 return (
  <div className={classes.Overlay} onClick={toggleApplicationMenu}>
   <div className={classes.ApplicationMenu}>
    <ul>
     <span></span>
     <li>
      <span>Accessories</span>
      <ul className={"ApplicationSubMenu"}>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
     </li>
     <li>
      <span>Games</span>
      <ul className={"ApplicationSubMenu"}>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
     </li>
     <li>
      <span>System Tools</span>
      <ul className={"ApplicationSubMenu"}>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
     </li>
     <li>
      <span>Preferences</span> 
      <ul className={"ApplicationSubMenu"}>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
     </li>
     <li>
      <span>Documentation</span>
     </li>
     <li>
      <span>Exit</span>
      <ul className={"ApplicationSubMenu"}>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
     </li>
    </ul>
   </div>
  </div>
 );
}
