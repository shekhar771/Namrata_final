import React from 'react'
import '../Css/SubHeader.css' 
import { IoTriangleOutline } from "react-icons/io5";
import { Grid } from '@mui/material';
const SubHeader = ({barname , openStatus}) => {

  return (
    <Grid container  className='SubHeadCont'>
      <Grid item xs = {0.2}></Grid>
      <Grid item xs = {10.8}className='SubTxtBox' ><text className='SubHeadtxt'>{barname}</text></Grid>
      <Grid item xs = {1} >
        {
        openStatus === true ?(<IoTriangleOutline style={{transform:'rotate(90deg)'}}/>):(<IoTriangleOutline style={{transform:'rotate(180deg)'}}/>) 
      }
      </Grid>
    </Grid>
  )
}

export default SubHeader
