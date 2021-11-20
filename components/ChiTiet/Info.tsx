import React from 'react';
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import Image from 'next/image';
import { FaCalendarAlt, FaStar, FaClock } from 'react-icons/fa';
import { Genre, Movie } from 'interfaces';
import { movieApi } from 'api-client/movieApi';
import { MOVIE_STATUS } from 'constant';

interface Props {
	movie: Movie;
}

export const Info = ({ movie }: Props) => {
	return (
		<Row>
			{
				<div className="w-100">
					{
						<Col key={movie?.id} xs={12} className="movie-detail--poster">
							<div className="movie-detail--thumb">
								<Image
									loader={() => movie?.posters_full[0].url || '/assets/images/image-not-found.svg'}
									src={movie.posters_full[0]?.url || '/assets/images/image-not-found.svg'}
									alt=""
									layout="fill"
									objectFit="cover"
									unoptimized={true}
								></Image>
							</div>
							<div className="movie-detail--info">
								<p>{MOVIE_STATUS[movie?.status]}</p>
								<h1 className="mb-2">{movie?.name}</h1>
								<p className="d-flex align-items-center mb-3">
									{' '}
									<FaCalendarAlt className="mr-1 movie-detail--icon" />{' '}
									<span>{movie?.release_date}</span>
									<span>
										{' '}
										|{' '}
										{movie?.genres_full?.map((genres: Genre) => (
											<span key={genres.id}>{genres.name} </span>
										))}{' '}
										|{' '}
									</span>{' '}
									<div className="movie-detail--time">
										<FaClock className="ml-2 mr-1 movie-detail--icon" />{' '}
										<span>{movie?.running_time}</span>
									</div>
								</p>
								<p className="mt-3">{movie?.description}</p>

								<Button variant="primary" className=" mt-3">
									Mua Vé
								</Button>
								<Button variant="primary" className=" ml-3 mt-3">
									Trailer
								</Button>
								<p className="d-flex align-items-center mt-3">
									<FaStar className="movie-detail--icon" />
									<FaStar className="movie-detail--icon" />
									<FaStar className="movie-detail--icon" />
									<FaStar className="movie-detail--icon" />
									<FaStar className="movie-detail--icon mr-2" /> {movie?.likes} đánh giá
								</p>
							</div>
						</Col>
					}
				</div>
			}
		</Row>
	);
};
