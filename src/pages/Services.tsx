import { Box, Grid, Typography, Backdrop, Fade, IconButton, Modal } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react"
import ImageCarousel from "../components/ImageCarousel"
import { services } from "../util/util";


const headerSize = "h2"

export const Services = () => {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentImages, setCurrentImages] = useState<{ src: string; alt: string }[]>([]);

    const handleOpen = (images: { src: string; alt: string }[], index: number) => {
        setCurrentImages(images);
        setActiveIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Grid container spacing={3}>
                {services.map((service, serviceIndex) => (
                    <Grid item xs={12} sm={6} md={4} key={serviceIndex}>
                        <Typography variant="h6" gutterBottom textAlign="center">
                            {service.title}
                        </Typography>
                        <Box textAlign="center">
                            <img
                                src={service.images[0].src}
                                alt={service.images[0].alt}
                                style={{
                                    width: '100%',
                                    height: 'auto', // Adjust height automatically
                                    maxHeight: '200px',  // Maximum height for images
                                    objectFit: 'cover',  // Maintain aspect ratio and cover the area
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleOpen(service.images, 0)}
                            />
                            <Typography variant="subtitle1">{service.images[0].alt}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: { xs: '90vw', sm: '80vw' }, // Responsive width
                        height: { xs: '90vh', sm: '80vh' }, // Responsive height
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <IconButton
                        sx={{ position: 'absolute', top: 16, right: 16 }}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                    <ImageCarousel images={currentImages} activeIndex={activeIndex} />
                </Box>
            </Modal>
        </div>
    );
}