import {Box, CssBaseline, Grid} from '@mui/material'
import { grey } from '@mui/material/colors';

export default function Layout({children}) {
    const [header, menu, search, premium] = children;

    return (
        <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container m={2}>
                <Grid item flexBasis={260}>{menu}</Grid>
                <Grid item flex={2}>
                    <Grid xs={12}>{header}</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'20vh'} my={2}>USER INPUT</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'45vh'}>THREAD</Grid>
                </Grid> 
                <Grid item flex={1} m={2}>
                    <Grid xs={12}>{search}</Grid>
                    <Grid xs={12} my={2}>{premium}</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'30vh'} mb={2}>CONTAINER 2</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={'22vh'}>CONTAINER 3</Grid>
                </Grid>
            </Grid>
        </Box>
  )
}
