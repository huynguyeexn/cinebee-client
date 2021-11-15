import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import Image from 'next/image';
import { FaCalendarAlt, FaStar, FaClock } from 'react-icons/fa';
import { Genre, Movie } from 'interfaces';
import { movieApi } from 'api-client/movieApi';
import { MOVIE_STATUS } from 'constant';

interface Props {
    slug?: string | string[]
}

export const Info = ({slug} : Props) => {
    const [movie, setMovie] = React.useState<Movie>();
	const [movieLoading, setMovieLoading] = React.useState(false);
    console.log(slug);
    
	React.useEffect(() => {
		if (slug) {
            setMovieLoading(true);
			(async () => {
				try {
					const response = await movieApi.getById(slug);
					setMovie(response);
				} catch (error) {
					console.error('Failed to get movies playing: ', error);
				}
                setMovieLoading(false);
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
    console.log(movie);
    
    return (
        <Row>
            {movieLoading ? (
                <Spinner animation="border" variant="primary" className="spinner" />
            ) : (
                movie && (
                    <div className='w-100'>
                    {
                        <Col key={movie?.id} xs={12} className="movie-detail--poster">
                            <div className="movie-detail--thumb">
                            <Image
                                loader={() => movie.posters_full[0]?.url || ''}
                                src={movie.posters_full[0]?.url || ''}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                unoptimized={true}
                            ></Image>
                            </div>
                            <div className="movie-detail--info">
                                <p>{MOVIE_STATUS[movie?.status]}</p>
                                <h1 className='mb-2'>{movie?.name}</h1>
                                <p className='d-flex align-items-center mb-3'> <FaCalendarAlt className='mr-1 movie-detail--icon'/> <span>{movie?.release_date}</span><span> | {movie?.genres_full?.map((genres: Genre) => (<span key = {genres.id}>{genres.name} </span>))} | </span> <div className='movie-detail--time'><FaClock className='ml-2 mr-1 movie-detail--icon'/> <span>{movie?.running_time}</span></div></p>
                                <p className='mt-3'>{movie?.description}</p>
                                
                                <button className='movie-detail--muave mt-3'>Mua Vé</button>
                                <button className='movie-detail--muave ml-3 mt-3'>Trailer</button>
                                <p className='d-flex align-items-center mt-3'><FaStar className='movie-detail--icon'/><FaStar className='movie-detail--icon'/><FaStar className='movie-detail--icon'/><FaStar className='movie-detail--icon'/><FaStar className='movie-detail--icon mr-2'/> {movie?.likes} đánh giá</p>
                            </div>
                        </Col>
                    }
                    </div>
                )
            )}
        </Row>
    )
}
