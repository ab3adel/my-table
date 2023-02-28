import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { useRecoilState } from 'recoil';
import { tableState } from '../../store/store';
import { useContext } from 'react';
import AlertContext from '../../tools/context/alert-context/alert-context';
import { useEffect } from 'react';
interface iProps {open:boolean,setOpen:Function}
interface iRow {id:number,title:string}
export default function MyForm({open,setOpen}:iProps) {
  const [state,setState]=useRecoilState(tableState)
  const {setAlertState}=useContext(AlertContext)
const formik =useFormik<iRow>({
  initialValues:{id:0,title:''},
  onSubmit:()=>{},
  validationSchema:Yup.object().shape({
    id:Yup.number().min(0).required('This field is required'),
    title:Yup.string().required('This field is required')
  })
})
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit =()=>{
   if (Object(formik.errors).length>0) return
   setState(pre=>([...pre,formik.values]))
   formik.resetForm()
  
  }
 

  return (
   
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
       Please bothe fields Id ,Title are required:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          helperText={formik.errors.id}
          label="ID"
          type="number"
          fullWidth
          variant="standard"
          name="id"
          onChange={formik.handleChange}
          error={Boolean(formik.errors.id) && formik.touched.id}
          value={formik.values.id}
          onBlur={formik.handleBlur}
          
        />
        <TextField
          autoFocus
          margin="dense"
          helperText={formik.errors.title}
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          name="title"
          onChange={formik.handleChange}
          error={Boolean(formik.errors.title) && formik.touched.title}
          value={formik.values.title}
          onBlur={formik.handleBlur}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}
        disabled={!Boolean(formik.values.id) || !Boolean(formik.values.title)}
        >Submit</Button>
      </DialogActions>
    </Dialog>

  )
}