import { useState } from "react";
import AlertContext, {iAlert} from "./alert-context";
import {AlertColor} from '@mui/material'

export const AlertProvider =({children}:{children:any})=>{
    const [stateAlert,setAlertState]=useState<iAlert>
    ({openAlert:false,type:'success',message:''})
return (
    <AlertContext.Provider value={{stateAlert,setAlertState}}>
        {children}
    </AlertContext.Provider>
)
}