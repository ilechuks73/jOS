import { makeStyles as MuiMakeStyles } from "@material-ui/core";

export const useStyles = MuiMakeStyles({
  Overlay:{
    height: "100%",
    width: "100%",
    backgroundColor: "none"
  },
 ApplicationMenu:{
   height: "max-content",
   width: "max-content",
   border: "2px solid black",
   backgroundColor: "white",
   position: "absolute",
   bottom: "38px",

   "& ul":{
     listStyle: "none",
     padding: "20px 5px",
     
     "& li":{
      padding: "10px 5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      "&:hover":{
        backgroundColor: "blue",
      },
      "&:hover ul.ApplicationSubMenu":{
        visibility: "visible"
      },
      "& span":{
        fontSize: "13px",
      },
      "& ul.ApplicationSubMenu":{
        position: "absolute",
        visibility: "hidden",
        left: "calc(100% + 7px)",
        paddingTop: 0,
      }
    }
   },
   
 }
});
