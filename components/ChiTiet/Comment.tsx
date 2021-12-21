import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { Comment } from 'interfaces';
import moment from 'moment';

interface Props {
	comments: Comment[];
}

export const Comments = ({ comments }: Props) => {

	return (
		<Card className="showtime-card movie-card">
			<Card.Body>
				<Card.Title>Bình Luận</Card.Title>
				<Card.Body>
					{comments && comments.map((comment, idx)=>(
						<Row key={idx} className="movie-detail--comment mb-4">
							<Col lg={1} sm={1} xs={2} className="movie-detail--img_comment">
								<Image
									loader={() => 'https://dmitryvolkov.me/demo/hotflix2.1/main/img/user.svg'}
									src="https://dmitryvolkov.me/demo/hotflix2.1/main/img/user.svg"
									alt=""
									layout="fill"
									objectFit="cover"
								></Image>
							</Col>
							<Col lg={11} sm={11} xs={10}>
								<p className="mb-0">{comment?.customer.username}</p>
								<span>{moment(comment.comment_at).format('DD.MM.YYYY')}, {moment(comment.comment_at).format('HH:mm')}</span>
							</Col>
							<Row className="movie-detail--comment1 mt-2">
								<Card.Text className="movie-detail--comment1--border mb-0">
									{comment.content}
								</Card.Text>
								<Card.Body className="pt-2 pb-2">
									<p className="d-flex align-items-center mb-0">
										<FaRegThumbsUp className="ml-2 mr-1 movie-detail--comment1--iconThumbsUp" /> {comment.like}{' '}
										<FaRegThumbsDown className="ml-3 mr-1 movie-detail--comment1--iconThumbsDown" /> {comment.dislike}
									</p>
								</Card.Body>
							</Row>
						</Row>
					))}
					<Row className="movie-detail--comment mt-3">
						<textarea
							className="movie-detail--textarea"
							id=""
							cols={65}
							rows={6}
							placeholder="Bình luận..."
						></textarea>
						<button className="movie-detail--muave mt-3">Gửi</button>
					</Row>
				</Card.Body>
			</Card.Body>
		</Card>
	);
};
