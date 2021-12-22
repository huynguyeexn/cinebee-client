import { movieApi, showtimesApi } from "api-client";
import { Movie, Showtime } from "interfaces";
import { useRouter } from "next/router";
import React from "react";
import Image from 'next/image';
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import moment from "moment";

const Showtimes = () => {
	const router = useRouter();
    const {id} = router.query;
	const [movieLoading, setMovieLoading] = React.useState(false);
	const [time, setTime] = React.useState<Showtime[]>([]);
	const [date, setDate] = React.useState<string>('23-Dec-21');
	const [movie, setMovie] = React.useState<Movie>();

    React.useEffect(() => {
		if (id) {
			(async () => {
				setMovieLoading(true);
				try {
					const response: any = await movieApi.getById(id);
					setMovie(response as Movie);
                    const response_time = await showtimesApi.getShowtimesByDate(date, Number(id) as number);
					setTime(response_time.data);
				} catch (error) {
					console.error('Failed to get movies playing: ', error);
				}
				setMovieLoading(false);
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
        <section
			className={`movie-detail ${
				movieLoading && 'd-flex justify-content-center align-items-center p-5'
			}`}
		>
			{movieLoading ? (
				<Spinner animation="border" variant="primary" />
			) : (
				movie && (
                    <Container className='showtimes'>
                        <div className='d-flex justify-content-center w-100 mb-3'>
                            <select className='ml-2 mr-2 mt-5'>
                                <option value="1">Cinebee</option>
                            </select>
                            <select className='ml-2 mr-2 mt-5'>
                                <option value={moment().format("DD-MMM-YY")}>{moment().format("DD-MM-YYYY")}</option>
                                <option value={moment().add(1,'days').format("DD-MMM-YY")}>{moment().add(1,'days').format("DD-MM-YYYY")}</option>
                                <option value={moment().add(2,'days').format("DD-MMM-YY")}>{moment().add(2,'days').format("DD-MM-YYYY")}</option>
                                <option value={moment().add(3,'days').format("DD-MMM-YY")}>{moment().add(3,'days').format("DD-MM-YYYY")}</option>
                                <option value={moment().add(4,'days').format("DD-MMM-YY")}>{moment().add(4,'days').format("DD-MM-YYYY")}</option>
                                <option value={moment().add(5,'days').format("DD-MMM-YY")}>{moment().add(5,'days').format("DD-MM-YYYY")}</option>
                            </select>
                        </div>
                        <Row>
                            <Col lg={3}>
                                <Image
                                    loader={() => movie?.posters_full[0].url || '/assets/images/image-not-found.svg'}
                                    src={movie?.posters_full[0]?.url || '/assets/images/image-not-found.svg'}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    unoptimized={true}
                                ></Image>
                            </Col>
                            <Col lg={9}>
                                <div>
                                    <Card className='p-4'>
                                        <Card.Title className='mb-0'>{movie?.name}</Card.Title>
                                        <Card.Body className='pl-2 ml-1'>
                                            <Row>
                                                {time && time.map((showtime,idx) => (
                                                    <Col key={idx} lg={2} className='time'>{moment(showtime?.start).format('HH:mm')}</Col>
                                                ))}
                                            </Row>
                                        </Card.Body>
                                    </Card>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                )
            )}
        </section>
	);
};

export default Showtimes;
