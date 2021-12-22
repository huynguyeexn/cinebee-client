import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Image from 'next/image';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { Comment } from 'interfaces';
import moment from 'moment';
import { commentApi, CommentPayload } from 'api-client/commentApi';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface Props {
	comments: Comment[];
}

const formValidate = yup.object().shape({
	content: yup.string().required(),
});

export const Comments = ({ comments }: Props) => {
	const { handleSubmit } = useForm<any>({
		resolver: yupResolver(formValidate),
	});

	const onSubmit = async(data: Comment) => {
		console.log(data);
		
		const payload: CommentPayload = {
			comment_at: '21/12/2021',
			content: 'dvsdvd',
			like: 10,
			dislike: 10,
			status: 1,
			customer_id: 1,
			movie_id: 1,
		};
		// const response = await commentApi.createComment(payload);
	}

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
						<Form>
							<textarea
								className="movie-detail--textarea"
								name="contents"
								id=""
								cols={65}
								rows={6}
								placeholder="Bình luận..."
							></textarea>
							<button className="movie-detail--muave mt-3" onClick={handleSubmit(onSubmit)}>Gửi</button>
						</Form>
					</Row>
				</Card.Body>
			</Card.Body>
		</Card>
	);
};
