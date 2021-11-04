import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<div>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand>Mindful Breathing</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
						
							<Nav.Link href='#/box'>Box Breathing</Nav.Link>

							<Nav.Link href='#/coherent'>Coherent Breathing</Nav.Link>

							<Nav.Link href='#/four-seven'>4-7-8 breathing</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
