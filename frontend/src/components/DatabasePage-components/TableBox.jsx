import { Box, Paper, Stack, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function TableBox({tableName}) {

    return (
        <>
            <Paper elevation={2} sx={{
                minWidth : '320px',
                padding : '15px'
            }}>
                <Stack direction='row' sx={{
                    alignItems : 'center'
                }}>

                <Typography variant='h6' gutterBottom sx={{
                    flexGrow : 1,
                }}>

                {tableName}
                </Typography>
                <IconButton size="large">
                    <ArrowForwardIosIcon color='primary' />
                </IconButton>

                </Stack>
            </Paper>
        </>
    )
}

export default TableBox;