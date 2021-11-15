import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Image from 'next/image';
import { Actor, Movie } from 'interfaces';
import { movieApi } from 'api-client/movieApi';

interface Props {
    movie?:Movie;
}

export const Cast = ({ movie }: Props) => {

    return (
        <Card className="showtime-card movie-card">
            <Card.Body>
                <Card.Title className='mb-4'>Diễn Viên</Card.Title>
                {movie?.actors_full && movie.actors_full.length > 0 && (
                    <div className='w-100'>
                        {movie?.actors_full?.map((actor: Actor) => (
                            <Row key={actor.id} className='movie-detail--cast mb-3'>
                                <Col lg={2} sm={1} xs={2} className='movie-detail--img_cast'>
                                    <Image
                                        loader={() =>
                                            actor.avatar
                                        }
                                        src={actor.avatar}
                                        alt=""
                                        layout="fill"
                                        objectFit="cover"
                                    ></Image>
                                </Col>
                                <Col lg={10} sm={11} xs={10}>
                                    <p className='mb-0'>{actor.fullname}</p>
                                </Col>
                            </Row>
                        ))}
                    </div>
                )}
            </Card.Body>
        </Card>
    )
}
