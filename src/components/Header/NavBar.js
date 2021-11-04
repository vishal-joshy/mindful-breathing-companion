import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function NavBar() {
	const isDesktopDevice = useMediaQuery({
		query: "(min-device-width: 900px)",
	});
	console.log({ isDesktopDevice });
	return (
		<div>
			<Navbar bg='light' expand='lg'>
				<Container
					style={{
						display: "flex",
						flexDirection: isDesktopDevice ? "row" : "column",
						alignItems: "flex-start",
					}}>
					<Navbar.Brand>Mindful Breathing</Navbar.Brand>
					<Navbar style={{width:isDesktopDevice?'auto':'100%'}}>
						<Nav
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "flex-start",
								flex: "1",
								justifyContent: "space-around",
							}}>
							<Nav.Link href='#/box'>Box </Nav.Link>

							<Nav.Link href='#/coherent'>Coherent </Nav.Link>

							<Nav.Link href='#/four-seven'>4-7-8 </Nav.Link>
						</Nav>
					</Navbar>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
