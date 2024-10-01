"use client";

import { isCarouselPage } from "@/utils/entryUtils";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";

export function Carousel({
  clubName,
  carouselTextProps,
}: {
  clubName: string;
  carouselTextProps: Record<string, any>;
}) {
  if (!isCarouselPage(clubName)) {
    return (
      <div>
        <center>
          <h2 className="display-6">Previous Trips</h2>
        </center>

        <CCarousel controls indicators>
          <CCarouselItem>
            <div className="carousel-item-container">
              <CImage
                className="d-block w-100"
                src={`/images/ajax/carousel1.JPEG`}
                alt="slide 1"
              />
            </div>
            <CCarouselCaption className="d-none d-md-block">
              <h5>Ajax Amsterdam</h5>
              <p>Ajax vs AEK Athens</p>
            </CCarouselCaption>
          </CCarouselItem>

          <CCarouselItem>
            <div className="carousel-item-container">
              <CImage
                className="d-block w-100"
                src={`/images/hertha-bsc/carousel3.JPEG`}
                alt="slide 2"
              />
            </div>
            <CCarouselCaption className="d-none d-md-block">
              <h5>Hertha BSC</h5>
              <p>Hertha BSC vs Borussia Dortmund</p>
            </CCarouselCaption>
          </CCarouselItem>

          <CCarouselItem>
            <div className="carousel-item-container">
              <CImage
                className="d-block w-100"
                src={`/images/inter-milan/carousel1.JPEG`}
                alt="slide 3"
              />
            </div>
            <CCarouselCaption className="d-none d-md-block">
              <h5>Internazionale Milano</h5>
              <p>Inter vs Bologna</p>
            </CCarouselCaption>
          </CCarouselItem>

          <CCarouselItem>
            <div className="carousel-item-container">
              <CImage
                className="d-block w-100"
                src={`/images/ajax/carousel3.JPEG`}
                alt="slide 3"
              />
            </div>
            <CCarouselCaption className="d-none d-md-block">
              <h5>Ajax Amsterdam</h5>
              <p>Ajax VS Almere City FC</p>
            </CCarouselCaption>
          </CCarouselItem>

          <CCarouselItem>
            <div className="carousel-item-container">
              <CImage
                className="d-block w-100"
                src={`/images/fc-copenhagen/carousel1.JPEG`}
                alt="slide 3"
              />
            </div>
            <CCarouselCaption className="d-none d-md-block">
              <h5>FC Copenhagen</h5>
              <p>FC Copenhagen vs Kilmarnock FC</p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </div>
    );
  }
  return (
    <>
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={`/images/${clubName}/carousel1.JPEG`}
            alt="slide 1"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>{carouselTextProps.slideHead}</h5>
            <p>{carouselTextProps.slide1Paragraph}</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={`/images/${clubName}/carousel2.JPEG`}
            alt="slide 2"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>{carouselTextProps.slideHead}</h5>
            <p>{carouselTextProps.slide2Paragraph}</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={`/images/${clubName}/carousel3.JPEG`}
            alt="slide 3"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>{carouselTextProps.slideHead}</h5>
            <p>{carouselTextProps.slide3Paragraph}</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={`/images/${clubName}/carousel4.JPEG`}
            alt="slide 3"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>{carouselTextProps.slideHead}</h5>
            <p>{carouselTextProps.slide4Paragraph}</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={`/images/${clubName}/carousel5.JPEG`}
            alt="slide 3"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>{carouselTextProps.slideHead}</h5>
            <p>{carouselTextProps.slide5Paragraph}</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </>
  );
}
