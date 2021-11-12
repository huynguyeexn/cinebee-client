import { showtimesApi } from 'api-client/showtimeApi';
import { AGE_RATING } from 'constant';
import { Movie } from 'interfaces';
import Image from 'next/image';
import React from 'react';
import { Badge, Card, ListGroup, Spinner } from 'react-bootstrap';
import { minutesToHoursMinutes } from 'utils';
import { getAgeRatingBadgeColor } from 'utils/common';

interface Props {
	firstLoading?: boolean;
	onMovieSelect: (movie?: Movie) => void;
}

export const MovieSelectCard = ({ firstLoading, onMovieSelect }: Props) => {
	const [moviePlaying, setMoviePlaying] = React.useState([]);
	const [movieLoading, setMovieLoading] = React.useState(false);

	React.useEffect(() => {
		if (firstLoading) {
			setMovieLoading(true);
			(async () => {
				try {
					const response = await showtimesApi.getShowtimesMovies();
					setMoviePlaying(response.data.map((item: any) => item.movie));
				} catch (error) {
					console.error('Failed to get movies playing: ', error);
				}
				setMovieLoading(false);
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [selected, setSelected] = React.useState<number>();

	const handleSelect = (movie: Movie) => {
		onMovieSelect(undefined);
		setSelected(undefined);
		if (movie.id !== selected) {
			onMovieSelect(movie);
			setSelected(movie.id as number);
		}
	};

	return (
		<Card className="showtime-card movie-card">
			<Card.Body>
				<Card.Title>Chọn phim</Card.Title>
				{movieLoading ? (
					<Spinner animation="border" variant="primary" className="spinner" />
				) : (
					moviePlaying &&
					moviePlaying.length > 0 && (
						<ListGroup variant="flush">
							{moviePlaying.map((movie: Movie) => (
								<ListGroup.Item
									key={movie.id}
									onClick={() => handleSelect(movie)}
									className={`list-group-item ${selected === movie.id ? 'selected' : ''}`}
								>
									<div className="movie-poster">
										<Image
											loader={() => movie.posters_full[0]?.url || ''}
											src={movie.posters_full[0]?.url || ''}
											alt={'poster ' + movie.name}
											height={70}
											width={50}
											unoptimized={true}
										/>
									</div>
									<div className="content-info">
										<div>{movie.name}</div>
										<div>
											<Badge
												pill
												variant={getAgeRatingBadgeColor(movie.age_rating_id)}
												className="mr-2"
											>
												{AGE_RATING[movie.age_rating_id].code}
											</Badge>
											<small>{minutesToHoursMinutes(movie.running_time)}</small>
										</div>
									</div>
								</ListGroup.Item>
							))}
						</ListGroup>
					)
				)}
			</Card.Body>
		</Card>
	);
};
