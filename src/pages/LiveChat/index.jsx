import { Container, Col, Image } from 'react-bootstrap';
import UserNavbar from '../../components/UserNavbar';
import style from './style.module.css';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';
import React from 'react';

const LiveChat = () => {
	return (
		<Container className='bg-skSmoke' fluid>
			<UserNavbar />
			<Container className='d-flex py-5 gap-5' fluid>
				{/* Chat list */}
				<Col>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere delectus ex nobis sint ipsum veniam maiores soluta? Suscipit
					voluptates et eligendi molestiae, doloremque, cum autem repellat pariatur, in nisi nobis!
				</Col>
				{/* Main chat */}
				<Col>
					<div className='w-100 h-100 bg-skMidnight text-skWhite rounded p-3 d-flex flex-column gap-3'>
						<div className='w-100 px-3 d-flex align-items-center gap-3'>
							<Image src='https://via.placeholder.com/64' roundedCircle={true} />
							<div className='d-flex flex-column'>
								<span className='fs-5 fw-bold'>Name placeholder</span>
								<span>Online status</span>
							</div>
						</div>

						{/* Message */}
						<div className='d-flex flex-column gap-4'>
							{[1, 2].map((i) => (
								<React.Fragment key={i}>
									<div className='d-flex flex-column gap-2'>
										<div className={`${style.msgReceived} ${style.msg}`}>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, eaque?
										</div>
										<span className={`${style.timeReceived} ${style.time}`}>10.05</span>
									</div>

									<div className='d-flex flex-column gap-2'>
										<div className={`${style.msgSent} ${style.msg}`}>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, eaque?
										</div>
										<span className={`${style.timeSent} ${style.time}`}>10.05</span>
									</div>
								</React.Fragment>
							))}
						</div>

						{/* Send message */}
						<div className='w-full h-fit border border-skSmoke p-2 rounded-pill mx-2 d-flex align-items-center gap-2 justify-content-between'>
							<div className='d-flex align-items-center gap-3 w-full'>
								<BsEmojiSmile size={24} />
								<span>|</span>
								<input placeholder='Text' className='bg-transparent border-0 w-full text-skWhite' />
							</div>
							<button className='bg-skSmoke border-0 rounded-pill px-3'>
								<AiOutlineSend size={20} />
							</button>
						</div>
					</div>
				</Col>
				{/* Booking list */}
				<Col>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquam fugit atque odit illo velit dolorem rem, optio laborum.
					Obcaecati, nesciunt! Explicabo esse et eum quos tenetur voluptatibus voluptatem reprehenderit!
				</Col>
			</Container>
		</Container>
	);
};
export default LiveChat;
