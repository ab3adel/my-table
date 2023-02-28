import {createContext} from 'react'
import {AlertColor} from '@mui/material'
export interface iAlert {openAlert:boolean,message:string,type:AlertColor}
   interface iContext {stateAlert:iAlert,setAlertState:any}
 const AlertContext= createContext<iContext>({stateAlert:{
   message:'',type:'success',openAlert:false
 },setAlertState:()=>{}})

    export default  AlertContext