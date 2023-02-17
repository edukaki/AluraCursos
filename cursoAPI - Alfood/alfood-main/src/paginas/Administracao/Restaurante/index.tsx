import {
	AppBar,
	Button,
	Container,
	IconButton,
	Link,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";
import http from "../../../http";
import { Box } from "@mui/system";

const AdministracaoRestaurante = () => {
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

	const excluirRestaurante = (restauranteExcluido: IRestaurante) => {
		http
			.delete(`restaurantes/${restauranteExcluido.id}/`)
			.then(() => {
				const listaRestaurante = restaurantes.filter(
					(restaurante) => restaurante.id !== restauranteExcluido.id
				);
				setRestaurantes([...listaRestaurante]);
			})
			.then(() => alert("Restaurante excluido com sucesso"));
	};

	useEffect(() => {
		http
			.get<IRestaurante[]>("restaurantes/")
			.then((resposta) => setRestaurantes(resposta.data))
			.catch((erro) => console.log(erro));
	}, []);

	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Nome</TableCell>
						<TableCell>Editar</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{restaurantes.map((restaurante, index) => (
						<TableRow key={index}>
							<TableCell>{restaurante.nome}</TableCell>
							<TableCell>
								<Button
									href={`/admin/restaurantes/${restaurante.id}`}
									type="button"
									variant="outlined"
								>
									Editar
								</Button>
								<IconButton
									type="button"
									onClick={() => {
										excluirRestaurante(restaurante);
									}}
									aria-label="delete"
									size="large"
								>
									<DeleteOutline fontSize="inherit" />
								</IconButton>
							</TableCell>
							<TableCell></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default AdministracaoRestaurante;
