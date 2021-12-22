import { commentApi, CommentPayload } from 'api-client/commentApi';
import { useAuth } from 'hooks';
import { Comment, Movie } from 'interfaces';
import moment from 'moment';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
interface Props {
	movie: Movie;
	comments: Comment[];
}
export const Comments = ({ movie, comments: commentsProps }: Props) => {
	const [comments, setComments] = useState<Comment[]>(commentsProps);
	const [comment, setComment] = useState('');
	const [loading, setLoading] = useState(false);

	const { profile } = useAuth();

	const onSubmit = async () => {
		const payload: CommentPayload = {
			content: comment,
			movie_id: movie.id,
		};
		setLoading(true);
		const response = await commentApi.createComment(payload);
		setComment('');
		setComments([...comments, response.data]);
		setLoading(false);
	};

	return (
		<Card className="showtime-card movie-card">
			<Card.Body>
				<Card.Title>Bình Luận</Card.Title>
				<Card.Body>
					{profile && (
						<Row className="movie-detail--comment mb-4">
							<Form style={{ width: '100%' }}>
								<textarea
									className="movie-detail--textarea"
									name="contents"
									style={{ width: '100%' }}
									rows={6}
									placeholder="Bình luận..."
									value={comment}
									onChange={(e) => setComment(e.target.value)}
								></textarea>
								<Button variant="primary" onClick={onSubmit} disabled={loading}>
									{loading ? 'Đang gửi...' : 'Gửi'}
								</Button>
							</Form>
						</Row>
					)}
					<hr />
					{comments &&
						comments
							.slice()
							.reverse()
							.map((comment, idx) => (
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
									<Col lg={9} sm={9} xs={6}>
										<p className="mb-0">{comment?.customer.username}</p>
										<span>
											{moment(comment.comment_at).format('DD.MM.YYYY')},{' '}
											{moment(comment.comment_at).format('HH:mm')}
										</span>
									</Col>
									<Col lg={2} sm={2} xs={4}>
										<p className="d-flex align-items-center mb-0">
											<FaRegThumbsUp className="movie-detail--comment1--iconThumbsUp" />{' '}
											{comment.like}
											<div className="mx-2"></div>
											<FaRegThumbsDown className="movie-detail--comment1--iconThumbsDown" />{' '}
											{comment.dislike}
										</p>
									</Col>
									<Col lg={12} sm={12} xs={12} className="movie-detail--comment1 ">
										<Card.Body className="pt-2 pb-2 w-100">{comment.content}</Card.Body>
									</Col>
								</Row>
							))}
				</Card.Body>
			</Card.Body>
		</Card>
	);
};
