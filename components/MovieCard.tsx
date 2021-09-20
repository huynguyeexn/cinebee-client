import React from 'react';
import Image from 'next/image';
import { Badge } from 'react-bootstrap';

interface Props {
	imageUrl: string;
	name: string;
	release: string;
	durations: number | string;
}

export const MovieCard = ({ imageUrl, name, release, durations }: Props) => {
	return (
		<div className="movie-card">
			<div className="movie-thumb">
				<Image
					loader={() => imageUrl}
					src={imageUrl}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="movie-summary">
				<Badge variant="success">C16</Badge>

				<h5>{name}</h5>
				<p>Khởi chiếu: {release}</p>
				<p>{durations} phút</p>
			</div>
		</div>
	);
};
