import { useContext } from "react";
import { DesktopContext } from "..";

export function useApplicationMenu() {
  const {setApplicationMenu} = useContext(DesktopContext)
  function toggleApplicationMenu() {
    setApplicationMenu({
      type: "TOGGLE APPLICATION MENU"
    })
  }

  return{
    toggleApplicationMenu
  }
}