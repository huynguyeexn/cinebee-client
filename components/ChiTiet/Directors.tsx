import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Image from 'next/image';
import { Director, Movie } from 'interfaces';

interface Props {
    movie?: Movie;
}

export const Directors = ({ movie }: Props) => {
    return (
        <Card className="showtime-card movie-card">
            <Card.Body>
                <Card.Title className='mb-4'>Đạo Diễn</Card.Title>
                {movie?.directors_full && movie.directors_full.length > 0 && (
                    <div className='w-100'>
                        {movie.directors_full.map((director: Director) => (
                           <Row key={director.id} className='movie-detail--cast mb-3'>
                                <Col lg={2} sm={1} xs={2} className='movie-detail--img_cast'>
                                    <Image
                                        loader={() =>
                                            director.avatar
                                        }
                                        src={director.avatar}
                                        alt=""
                                        layout="fill"
                                        objectFit="cover"
                                    ></Image>
                                </Col>
                                <Col lg={10} sm={11} xs={10}>
                                    <p className='mb-0'>{director.fullname}</p>
                                </Col>
                            </Row> 
                        ))}
                    </div>
                )}
            </Card.Body>
        </Card>
    )
}
