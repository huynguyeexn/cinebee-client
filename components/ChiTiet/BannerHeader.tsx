import React from 'react'
import { movieApi } from 'api-client/movieApi';
import { Movie } from 'interfaces';
import { Image } from 'react-bootstrap';

interface Props {
    firstLoading?: boolean;
    movie?: Movie;
}

export const BannerHeader = ({firstLoading, movie}: Props) => {
    
    
    return (
        <div className="movie-detail--banner">
            <Image
                src={movie?.backdrops_full[0] ?.url || ''}
                alt=""
            ></Image>
        </div>
    )
}
