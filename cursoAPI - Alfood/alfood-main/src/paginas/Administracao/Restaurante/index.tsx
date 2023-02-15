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
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

	useEffect(() => {
		axios
			.get<IRestaurante[]>("http://localhost:8000/api/v2/restaurantes/")
			.then((resposta) => setRestaurantes(resposta.data));
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
