import { seatApi } from 'api-client/seatApi';
import { Seat, Showtime } from 'interfaces';
import React from 'react';
import { Card, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

interface Props {
	showtime?: Showtime;
	seats: number[];
}

export const Choose = ({ seats }: Props) => {
	const [chair, setChair] = React.useState<string[]>([]);

	// TODO: showtime
	React.useEffect(() => {
		if (seats) {
			(async () => {
				try {
					// for (let index = 0; index < seats.length; index++) {
					// 	const response: any = await seatApi.getById(seats[index] as number);
					// 	setChair([...chair, response]);
					// }
				} catch (error) {
					console.error('Failed to get movies playing: ', error);
				}
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log(chair);

	return (
		<div className="choose mt-5">
			<Row className="w-100 ml-0">
				<Card className="w-100">
					<ListGroup className="d-flex flex-row">
						<ListGroupItem className="d-flex align-items-center rounded name justify-content-center">
							Ghế
						</ListGroupItem>
						<ListGroupItem className="p-0 border-0 w-100">
							<Card>
								<ListGroup className="info">
									{seats.map((value, idx) => (
										<ListGroupItem key={idx} className="item pt-3 pl-3">
											{value}
										</ListGroupItem>
									))}
								</ListGroup>
							</Card>
						</ListGroupItem>
					</ListGroup>
					{/* <ListGroup className='d-flex flex-row'>
                        <ListGroupItem className='d-flex align-items-center rounded justify-content-center name'>Combo</ListGroupItem>
                        <ListGroupItem className='p-0 border-0 w-100'>
                            <Card>
                                <ListGroup className='info'>
                                    <ListGroupItem className='item pt-3 pl-3'>1x Nước ngọt</ListGroupItem>
                                </ListGroup>
                            </Card>
                        </ListGroupItem>
                    </ListGroup> */}
				</Card>
			</Row>
		</div>
	);
};
