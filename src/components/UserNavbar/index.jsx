import { useLocation } from 'react-router-dom';

// Assets
import LogoLong from '../../assets/img/logo/LogoLong.svg';
import LogoIcon from '../../assets/img/logo/LogoIcon.svg';

// Library
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsPersonCircle, BsTelephoneFill } from 'react-icons/bs';

// Style
import style from './style.module.css';
import React from 'react';

const navigation = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Discover',
		link: '/discover',
	},
	{
		name: 'Our location',
		link: '/location',
	},
	{
		name: <BsTelephoneFill size={24} />,
		link: '/contact',
		class: 'd-none d-lg-block',
	},
	{
		divider: true,
		class: 'd-none d-lg-block',
	},
	{
		name: <BsPersonCircle size={24} />,
		link: '/profile',
		class: 'd-none d-lg-block',
	},
	{
		name: 'Contact',
		link: '/contact',
		class: 'd-block d-lg-none',
	},
	{
		name: 'Profile',
		link: '/profile',
		class: 'd-block d-lg-none',
	},
];

const Logo = () => {
	return (
		<>
			<div className={`${style.logoContainer} d-none d-lg-block`}>
				<img src={LogoLong} alt='SewaKantor' />
			</div>
			<div className={`${style.logoContainer} d-block d-lg-none`}>
				<img src={LogoIcon} alt='SewaKantor' />
			</div>
		</>
	);
};

const UserNavbar = () => {
	const { pathname } = useLocation();

	return (
		<Navbar bg='skSmoke' expand='lg' color='skBlack' sticky='top'>
			<Container>
				<Navbar.Brand href='#home' className=''>
					<Logo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className={`${style.navmenuContainer} fw-bold`}>
					<Nav className='d-flex align-items-center'>
						{navigation.map((item, index) => (
							<React.Fragment key={index}>
								{item.divider ? (
									<div className={`${style.divider} ${item?.class && item.class} mx-1`} />
								) : (
									<Nav.Link
										key={index}
										href={item.link}
										className={`${item?.class && item.class} ${pathname.includes(item.link) && 'active'} fs-5`}
									>
										{item.name}
									</Nav.Link>
								)}
							</React.Fragment>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default UserNavbar;
