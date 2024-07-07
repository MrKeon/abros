import { Box, Grid, Card, Typography } from "@mui/material"
import React from "react"

const headerSize = "h2"

export const Services = () => {
    return (
        <Box sx={{ width: '100%' }} >
            <Grid container spacing={2} columns={3} sx={{ justifyContent: 'center'}}>
                <Grid item>
                    <Typography variant={headerSize} component="h2" >Decking</Typography>
                    <Card sx={{ border: 1 }}>

                    </Card>
                    <Typography></Typography>
                </Grid>
                <Grid item>
                <Typography variant={headerSize} component="h2" >Remodel</Typography>
                    <Card sx={{ border: 1 }}>

                    </Card>
                    <Typography></Typography>
                </Grid>
                <Grid item>
                <Typography variant={headerSize} component="h2" >Flooring</Typography>
                    <Card sx={{ border: 1 }}>

                    </Card>
                    <Typography></Typography>
                </Grid>
            </Grid>
        </Box>
    )
}