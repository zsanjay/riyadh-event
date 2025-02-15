'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={` ${className}`}
      style={{
        ...style,
        background: 'none',
        right: '5%',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'none',
        left: '2%',
        'z-index': '1',
      }}
      onClick={onClick}
    />
  );
}
export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: 'rgb(16, 17, 24)',
          bottom: '110%',
          width: '100%',
        }}
      >
        <ul
          style={{
            margin: '0px',
            display: 'flex',
            gap: '50px',
            maxWidth: '100%',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    dotsClass: 'slick-dots-container',
    customPaging: (i) => (
      <div className="slick-dot-wrapper">
        <div className="slick-dot"></div>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      <div>
        <Image
          src="/eh-01.jpg"
          alt="300+ global startups"
          width={660}
          height={340}
          className="w-full"
        />
      </div>
      <div>
        <Image
          src="/eh-02.jpg"
          alt="100+ Investors"
          width={660}
          height={340}
          className="w-full"
        />
      </div>
      <div>
        <Image
          src="/eh-03.jpg"
          alt="30+ Niche-based Pitch Sessions"
          width={660}
          height={340}
          className="w-full"
        />
      </div>
      <div>
        <Image
          src="/eh-04.jpg"
          alt="40+ workshops"
          width={660}
          height={340}
          className="w-full"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div>
        <Image
          src="/eh-05.jpg"
          alt="Panel Discussions & Live Podcasts"
          width={660}
          height={340}
          className="w-full"
        />
      </div>
      <div>
        <Image
          src="/eh-06.jpg"
          alt="VIP Investor Lounge"
          width={660}
          height={340}
          className="w-full"
        />
      </div>
      <div>
        <Image
          src="/eh-07.jpg"
          alt="Desert Night Meet"
          width={660}
          height={340}
          className="w-full"
        />
      </div>
    </Slider>
  );
}
