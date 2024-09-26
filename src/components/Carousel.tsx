"use client";

import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";

export function Carousel({
  clubName,
  carouselTextProps,
}: {
  clubName: string;
  carouselTextProps: Record<string, any>;
}) {
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
