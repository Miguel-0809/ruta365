import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Img1 from '../../images/portada.jpg'
import Img2 from '../../images/2.jpg'
import Img3 from '../../images/3.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={Img1} onDragStart={handleDragStart} className="yours-custom-class" />,
    <img src={Img2} onDragStart={handleDragStart} className="yours-custom-class" />,
    <img src={Img3} onDragStart={handleDragStart} className="yours-custom-class" />,
];

const Gallery = () => {
    return (
        <AliceCarousel
            animationType="fadeout"
            animationDuration={800}
            disableButtonsControls
            infinite
            items={items}
            mouseTracking
        />
    );
}

export default Gallery;