import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

interface Props {}

export const BannerHeader = (props: Props) => {
	const settings = {
		className: 'center',
		accessibility: true,
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		speed: 750,
		nav: true,
		dots: true,
		variableWidth: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 5000,
	};
	return (
		<div className="banner-header">
			<Slider {...settings}>
				<div className="">
					<div className="banner-header-item">
						<img src="https://www.themoviedb.org/t/p/original/lBSrAja7uIULKE5Lscl9dtdWYGA.jpg" />
					</div>
				</div>
				<div className="">
					<div className="banner-header-item">
						<img src="https://www.themoviedb.org/t/p/original/9xY4WB553gGdkt3SAgEj75MpRfa.jpg" />
					</div>
				</div>
				<div className="">
					<div className="banner-header-item">
						<img src="https://www.themoviedb.org/t/p/original/zWYCRc1Hn1gEcJtQCMvSODd6gJu.jpg" />
					</div>
				</div>
				<div className="">
					<div className="banner-header-item">
						<img src="https://www.themoviedb.org/t/p/original/h4oh0UNGqz6CRmYVIq8ocSbKdo3.jpg" />
					</div>
				</div>
			</Slider>
		</div>
	);
};
