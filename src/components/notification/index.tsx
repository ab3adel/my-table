import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor } from '@mui/material/Alert';

interface iProps {openAlert:boolean
    ,setOpenAlert:Function
    ,type:AlertColor
    ,message:string
}

export default function CustomizedSnackbars({openAlert,setOpenAlert,type,message}:iProps) {


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert();
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={(event:any,reason?:string)=>
        handleClose(event,reason)}>
        <MuiAlert  severity={type} sx={{ width: '100%' }}>
            {message}
        </MuiAlert>
      </Snackbar>
      
    </Stack>
  );
}