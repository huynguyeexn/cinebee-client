import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

interface Props {}

export const BannerHeader = (props: Props) => {
	const banners = [
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/lBSrAja7uIULKE5Lscl9dtdWYGA.jpg',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/zWYCRc1Hn1gEcJtQCMvSODd6gJu.jpg',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/lBSrAja7uIULKE5Lscl9dtdWYGA.jpg',
		},
		{
			imageUrl: 'https://www.themoviedb.org/t/p/original/h4oh0UNGqz6CRmYVIq8ocSbKdo3.jpg',
		},
	];

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
				{banners &&
					banners.map((banner, idx) => (
						<div className="" key={idx}>
							<div className="banner-header-item">
								<Image
									priority={true}
									src={banner.imageUrl || '/assets/images/image-not-found.svg'}
									loader={() => banner.imageUrl || '/assets/images/image-not-found.svg'}
									alt=""
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</div>
					))}
			</Slider>
		</div>
	);
};
