import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";

const AdministracaoRestaurante = () => {
	const url = "http://localhost:8000/api/v2/restaurantes/";
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

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
					</TableRow>
				</TableHead>
				<TableBody>
					{restaurantes.map((restaurante, index) => (
						<TableRow key={index}>
							<TableCell>{restaurante.nome}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default AdministracaoRestaurante;
