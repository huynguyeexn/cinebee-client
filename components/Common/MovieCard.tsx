import React from 'react';
import Image from 'next/image';
import { Badge } from 'react-bootstrap';
import Link from 'next/link';
import { Movie } from 'interfaces';
import moment from 'moment';

interface Props {
	movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
	const imageUrl = movie?.posters_full[0]?.url || '';
	const name = movie?.name || '';
	const release = movie?.release_date || 0;
	const durations = movie?.running_time || 0;

	return (
		<div className="movie-card">
			<div className="movie-thumb">
				<Image
					loader={() => imageUrl || '/assets/images/image-not-found.svg'}
					src={imageUrl || '/assets/images/image-not-found.svg'}
					alt=""
					layout="fill"
					objectFit="cover"
					unoptimized={true}
				/>
			</div>
			<div className="movie-summary">
				<Badge variant="success">C16</Badge>
				<h5 className="movie-link">
					<Link href={`phim/${movie?.id}`}>{name}</Link>
				</h5>
				<p>Khởi chiếu: {moment(release).format('DD/MM/YYYY')}</p>
				<p>{durations} phút</p>
			</div>
		</div>
	);
};
