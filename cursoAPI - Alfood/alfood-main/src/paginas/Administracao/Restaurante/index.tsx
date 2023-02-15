import {
	Button,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";

const AdministracaoRestaurante = () => {
	const url = "http://localhost:8000/api/v2/restaurantes/";
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

	const excluirRestaurante = (restauranteExcluido: IRestaurante) => {
		axios
			.delete(
				`http://localhost:8000/api/v2/restaurantes/${restauranteExcluido.id}/`
			)
			.then(() => {
				const listaRestaurante = restaurantes.filter(
					(restaurante) => restaurante.id !== restauranteExcluido.id
				);
				setRestaurantes([...listaRestaurante]);
			})
			.then(() => alert("Restaurante excluido com sucesso"));
	};

	useEffect(() => {
		axios
			.get<IRestaurante[]>(url)
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
