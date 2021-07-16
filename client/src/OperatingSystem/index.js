import { Fragment } from "react";
import Desktop from "./Desktop";
import Window from "./Window";

import { DesktopState, DesktopContext } from "./Desktop/state";

function OperatingSystem() {
 return (
  <Fragment>
   <DesktopState>
    <Desktop />
   </DesktopState>

   <Window />
  </Fragment>
 );
}

export default OperatingSystem;
