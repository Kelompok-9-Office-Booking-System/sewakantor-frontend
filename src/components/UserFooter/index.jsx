// Library
import { Col, Container, Row } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

// Assets
import GooglePlayBadge from '../../assets/img/google-play-badge.png';
import AppStoreBadge from '../../assets/img/app-store-badge.png';

// Style
import style from './style.module.css';

const UserFooter = () => {
	return (
		<>
			<Container fluid className='bg-skMidnight text-skWhite'>
				<Container fluid='lg'>
					<Row className=' px-3 py-5 d-none d-lg-flex'>
						<Col className='d-flex flex-column gap-5'>
							<Row>
								<Col className='d-flex flex-column align-items-start'>
									<h3>About</h3>
									<a href='/' className='link-light'>
										Our story
									</a>
								</Col>
								<Col className='d-flex flex-column align-items-start'>
									<h3>Spaces</h3>
									<a href='/' className='link-light'>
										Add your spaces
									</a>
								</Col>
								<Col className='d-flex flex-column align-items-start'>
									<h3>Member</h3>
									<a href='/' className='link-light'>
										Login
									</a>
									<a href='/' className='link-light'>
										Register
									</a>
								</Col>
							</Row>
							<Row>
								<Col className='d-flex flex-column align-items-start'>
									<h3>Review</h3>
									<a href='/' className='link-light'>
										View all review
									</a>
									<a href='/' className='link-light'>
										Most reviewed review
									</a>
								</Col>
								<Col className='d-flex flex-column align-items-start'>
									<h3>Connect</h3>
									<a href='/' className='d-flex gap-2 align-items-center link-light'>
										<BsFacebook size={16} /> Facebook
									</a>
									<a href='/' className='d-flex gap-2 align-items-center link-light'>
										<BsInstagram size={16} /> Instagram
									</a>
									<a href='/' className='d-flex gap-2 align-items-center link-light'>
										<BsWhatsapp size={16} /> Whatsapp
									</a>
								</Col>
								<Col></Col>
							</Row>
						</Col>
						<Col className='d-flex flex-column align-items-start'>
							<h3>Download</h3>
							<p>Download our apps here:</p>
							<div className='d-flex gap-2 flex-column'>
								<a href='/' className={`d-flex gap-2 align-items-center link-light ${style.downloadContainer}`}>
									<img src={GooglePlayBadge} alt='google-play-badge' className='h-100' />
								</a>
								<a href='/' className={`d-flex gap-2 align-items-center link-light ${style.downloadContainer}`}>
									<img src={AppStoreBadge} alt='app-store-badge' className='h-100' />
								</a>
							</div>
						</Col>
					</Row>
					<Row className='bg-skMidnight text-skWhite py-5 px-3 d-flex flex-column d-lg-none gap-3'>
						<Row>
							<Col className='d-flex align-items-center flex-column'>
								<h3>About</h3>
								<a href='/' className='link-light'>
									Our story
								</a>
							</Col>
							<Col className='d-flex align-items-center flex-column'>
								<h3>Spaces</h3>
								<a href='/' className='link-light'>
									Add your spaces
								</a>
							</Col>
						</Row>
						<Row>
							<Col className='d-flex align-items-center flex-column'>
								<h3>Member</h3>
								<a href='/' className='link-light'>
									Login
								</a>
								<a href='/' className='link-light'>
									Register
								</a>
							</Col>
							<Col className='d-flex align-items-center flex-column'>
								<h3>Review</h3>
								<a href='/' className='link-light'>
									View all review
								</a>
								<a href='/' className='link-light'>
									Most reviewed review
								</a>
							</Col>
						</Row>
						<Row>
							<Col className='d-flex align-items-center flex-column'>
								<h3>Connect</h3>
								<a href='/' className='d-flex gap-2 align-items-center link-light'>
									<BsFacebook size={16} /> Facebook
								</a>
								<a href='/' className='d-flex gap-2 align-items-center link-light'>
									<BsInstagram size={16} /> Instagram
								</a>
								<a href='/' className='d-flex gap-2 align-items-center link-light'>
									<BsWhatsapp size={16} /> Whatsapp
								</a>
							</Col>
							<Col>
								<h3>Download</h3>
								<p>Download our apps here:</p>
								<div className='d-flex align-items-center flex-column gap-2 w-100 mx-auto'>
									<a href='/' className={`d-flex gap-2 align-items-center link-light ${style.downloadContainer}`}>
										<img src={GooglePlayBadge} alt='google-play-badge' className='h-100' />
									</a>
									<a href='/' className={`d-flex gap-2 align-items-center link-light ${style.downloadContainer}`}>
										<img src={AppStoreBadge} alt='app-store-badge' className='h-100' />
									</a>
								</div>
							</Col>
						</Row>
					</Row>
				</Container>
			</Container>
			<Container fluid className='bg-skSmoke'>
				<Row>
					<Col className='text-skBlack fw-bold py-1'>©SewaKantor 2022</Col>
				</Row>
			</Container>
		</>
	);
};

export default UserFooter;
