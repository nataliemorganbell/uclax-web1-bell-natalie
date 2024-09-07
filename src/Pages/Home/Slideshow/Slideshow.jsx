import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// data
import { slidesData } from "./slidesData";

// components
import Slide from "./Slide";

const Slideshow = () => {
    return (
        <SlideshowStyled>
            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
                {slidesData.map((slide) => {
                    return <Slide key={slide.id} slide={slide} />;
                })}
            </Carousel>
        </SlideshowStyled>
    );
};

export default Slideshow;

const SlideshowStyled = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
