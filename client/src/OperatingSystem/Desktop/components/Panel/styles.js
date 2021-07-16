import { makeStyles as MuiMakeStyles } from "@material-ui/core";

export const useStyles = MuiMakeStyles({
 Panel: {
  width: "100%",
  height: "35px",
  border: "1px solid black",
  backgroundColor: "white",
  position: "absolute",
  bottom: 0,
  "& button.ApplicationMenuToggleButton":{
    backgroundColor: "none",
    width: "max-content",
    height: "100%",
    border: "none"
  }
 }
});
