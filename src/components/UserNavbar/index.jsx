import { useLocation } from 'react-router-dom';

// Library
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsPersonCircle, BsTelephoneFill } from 'react-icons/bs';

// Style
import style from './style.module.css';

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
		name: <BsTelephoneFill size={20} />,
		link: '/contact',
		class: 'd-md-none d-lg-block',
	},
	{
		name: <BsPersonCircle size={20} />,
		link: '/profile',
		class: 'd-md-none d-lg-block',
	},
	{
		name: 'Contact',
		link: '/contact',
		class: 'd-none d-md-block d-lg-none',
	},
	{
		name: 'Profile',
		link: '/profile',
		class: 'd-none d-md-block d-lg-none',
	},
];

const UserNavbar = () => {
	const { pathname } = useLocation();

	return (
		<Navbar bg='skSmoke' expand='lg' color='skBlack' sticky='top'>
			<Container>
				<Navbar.Brand href='#home'>Sewa Kantor</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className={`${style.navmenuContainer} fw-bold`}>
					<Nav className='d-flex align-items-center'>
						{navigation.map((item, index) => (
							<Nav.Link
								key={index}
								href={item.link}
								className={`${item?.class && item.class} ${pathname.includes(item.link) && 'active'}`}
							>
								{item.name}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default UserNavbar;
