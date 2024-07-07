import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

interface ImageCarouselProps {
    images: { src: string; alt: string }[];
    activeIndex: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, activeIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(activeIndex);

    useEffect(() => {
        setCurrentIndex(activeIndex);
    }, [activeIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <IconButton
                onClick={handlePrev}
                aria-label="previous image"
                sx={{ position: 'absolute', left: 16, zIndex: 1 }}
            >
                <ArrowBackIos />
            </IconButton>
            <Box
                component="img"
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
            />
            <IconButton
                onClick={handleNext}
                aria-label="next image"
                sx={{ position: 'absolute', right: 16, zIndex: 1 }}
            >
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
};

export default ImageCarousel;
