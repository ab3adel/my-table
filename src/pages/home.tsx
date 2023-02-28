import { useEffect, useState } from 'react'
import axios from '../tools/axios'
import {useRecoilState} from 'recoil'
import { tableState } from '../store/store'
import MyTable from '../components/table'
import Grid from '@mui/material/Grid'
import MyForm from '../components/form'
import { Button } from '@mui/material'
import { useContext } from 'react'
import AlertContext from '../tools/context/alert-context/alert-context'

const Home =()=>{
    const [state,setState] =useRecoilState(tableState)
    const [add,setAdd]=useState(false)
    const {stateAlert,setAlertState}=useContext(AlertContext)
useEffect (()=>{

    let str=   `
    query (
        $options: PageQueryOptions
      ) {
        posts(options: $options) {
          data {
            id
            title
          }
          meta {
            totalCount
          }
        }
      }
    `
    axios.post('',{query:str}).then(res=>{
        setAlertState((pre:any)=>({...pre,openAlert:true
            ,message:'Row has been added successfully',type:'success'}))
  
        if (res.data && res.data.data.posts.data.length>0){
            setState(pre=>res.data.data.posts.data)
        }
    })
    .catch(err=>console.log(err))
    
},[])

return (
    <Grid container>
        <Grid xs={12} justifyContent="center" alignItems={'center'}
        height="100vh" padding={3} 
        rowGap={4}>
            <Grid xs={8} margin="auto">

             <MyTable
                /> 
            </Grid>
            <Grid xs ={12}
            justifyContent="center"
            marginTop={4}>
              <Button 
                onClick={()=>setAdd(true)}
                sx={{
                    background:'lightgreen',
                    color:'green',
                    '&:hover':{
                        background:'green',
                        color:'white'
                    }
                }}>
                    add More
                </Button> 
            </Grid>
        </Grid>
        
     <MyForm 
        open={add}
        setOpen={setAdd}
    
        /> 
    </Grid>

)

}
export default Home