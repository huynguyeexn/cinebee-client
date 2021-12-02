import { AGE_RATING, MOVIE_STATUS } from 'constant';
import { Showtime } from 'interfaces';
import moment from 'moment';
import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { FaClock,FaExclamationCircle } from 'react-icons/fa';
import { formatDateWithDay } from 'utils';

interface Props {
    showtime?: Showtime;
}

export const Movies = ({showtime}: Props) => {
    return (
        <div className='mt-5 movie'>
            <Row>
                <Col lg={4} md={4} className='img'>
                    <Image
                        src = {showtime?.movie.posters_full[0].url || ''}
                        alt = ''
                    ></Image>
                </Col>
                <Col lg={8} md={8} className='info'>
                    <h3 className='mb-0'>{showtime?.movie.name}</h3>
                    <h6 className='mt-0'><FaExclamationCircle className="mr-1"/> Phim {AGE_RATING[showtime?.movie.age_rating_id as number].label}</h6>
                    <h6 className='d-flex align-items-center'><FaClock className="mr-1" />{showtime?.movie.running_time} phút</h6>
                    <p>Ngày chiếu: <span>{formatDateWithDay(showtime?.start)}</span></p>
                    <p>Xuất chiếu: <span>{moment(showtime?.start).format('HH:mm')}</span></p>
                    <p>Rạp:  <span>Cinebee Q12</span></p>
                    <p>Phòng: <span>{showtime?.room.name}</span></p>
                </Col>
            </Row>
        </div>
    )
}
