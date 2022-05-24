import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    cover1,
    cover2,
    cover3,
];

const Slider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
}