import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {

    return (
        <div className="home_banner" >

            <Carousel>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/PYyj4Bq/14-500x-crop-center.png"
                        alt="Second slide"

                    />
                    <Carousel.Caption>
                        <h6>Look at the sunset, life is amazing, life is beautiful, life is what you make it. The key to success is to keep your head above </h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/SdfFK90/1585608057-1523412460-olay-regenerist-micro-sculpting-cream-face-moisturizer-1-7-oz-packagi-06-15234.png"
                        alt="Second slide"
                    // style={{ width: '300px' }}
                    />

                    <Carousel.Caption>
                        <h6></h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/qdDybvn/image-3-33532a6f-4779-43b0-95a1-1c464634675c-340x455.png"
                        alt="Third slide"

                    />

                    <Carousel.Caption>
                        <h6>ENJOY DISCOUNT 10%</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;