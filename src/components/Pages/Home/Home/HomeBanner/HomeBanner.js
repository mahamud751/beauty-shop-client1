import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeBanner = () => {

    return (
        <div className="homeBanner">
            <Carousel>
                <Carousel.Item>
                    <img

                        src="https://i.ibb.co/h8CJhFn/slideshow2-h2.png"
                        alt="Second slide"

                    />
                    <Carousel.Caption>
                        <h6>Look at the sunset, life is amazing, life is beautiful, life is what you make it. The key to success is to keep your head above </h6>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default HomeBanner;