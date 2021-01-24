import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const Gallery = (props) => {

    const items = [
        <img src={props.Img1} onDragStart={handleDragStart} className="yours-custom-class" />,
        <img src={props.Img2} onDragStart={handleDragStart} className="yours-custom-class" />,
        <img src={props.Img3} onDragStart={handleDragStart} className="yours-custom-class" />,
        <img src={props.Img4} onDragStart={handleDragStart} className="yours-custom-class" />,
    ];

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