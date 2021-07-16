import { useContext } from "react";
import { useStyles } from "./styles";

import {DesktopContext } from "./state";

import { Panel, ApplicationMenu } from "./components";

export default function Desktop() {
 const classList = useStyles();
 const { applicationMenu } = useContext(DesktopContext);
 return (
  <div
   onContextMenu={(e) => {
    e.preventDefault();
   }}
   className={classList.Desktop}
  >
   {/* DESKTOP PANEL */}
   <Panel />

   {/* DESKTOP APPLICATION MENU */}
   {applicationMenu.visible ? <ApplicationMenu /> : ""}
  </div>
 );
}
