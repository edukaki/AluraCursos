import { AppBar, Button, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link as ReactLink, Outlet } from "react-router-dom";

const NavbarAdmin = () => {
	return (
		<>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Typography variant="h6">Administracao</Typography>
					<Box sx={{ display: "flex", flexGrow: 1 }}>
						<Link component={ReactLink} to="/admin/restaurantes">
							<Button sx={{ my: 2, color: "white" }}>Restaurantes</Button>
						</Link>
						<Link component={ReactLink} to="/admin/restaurantes/novo">
							<Button sx={{ my: 2, color: "white" }}>Novo restaurante</Button>
						</Link>
					</Box>
				</Container>
			</AppBar>
			<Outlet />
		</>
	);
};

export default NavbarAdmin;
