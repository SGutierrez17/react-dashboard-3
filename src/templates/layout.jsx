import {Box, CssBaseline, Grid} from '@mui/material'
import { grey } from '@mui/material/colors';

export default function Layout() {
  return (
      <Box style={{display: "flex"}}>
            <CssBaseline/>
            <Grid container m={2}>
                <Grid item flexBasis={120} bgcolor={grey[400]} height= {"90vh"} m={2}>NAVIGATION</Grid>
                <Grid item flex={2}>
                    <Grid xs={12} bgcolor={grey[400]} height={'20vh'} my={2}>HEADER</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'20vh'} my={2}>USER INPUT</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'45vh'}>THREAD</Grid>
                </Grid> 
                <Grid item flex={1} m={2}>
                    <Grid xs={12} bgcolor={grey[400]} height={'10vh'}>SEARCH</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'20vh'} my={2}>CONTAINER 1</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'30vh'} mb={2}>CONTAINER 2</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'22vh'}>CONTAINER 3</Grid>
                </Grid>
            </Grid>
        </Box>
  )
}
