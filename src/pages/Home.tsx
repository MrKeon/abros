import { Container, Typography } from "@mui/material"
import React from "react"

export const Home: React.FC = () => {
    return (
        <Container sx={{ textAlign: 'center', my: 4 }}>
            <Typography variant="h4" component="h1">
                We are carpenters that focus on quality work for our clients.
            </Typography>
        </Container>
    )
}
