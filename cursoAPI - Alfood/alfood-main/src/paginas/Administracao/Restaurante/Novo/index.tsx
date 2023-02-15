import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const NovoRestaurante = () => {
	const url = "http://localhost:8000/api/v2/restaurantes/";
	const [nomeRestaurante, setNomeRestaurante] = useState<string>("");
	const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		axios
			.post(url, {
				nome: nomeRestaurante,
			})
			.then(() => alert("Restaurante cadastrado com sucesso"))
			.catch((erro) => console.log(erro));
	};

	return (
		<form onSubmit={submeterForm}>
			<TextField
				value={nomeRestaurante}
				onChange={(evento) => setNomeRestaurante(evento.target.value)}
				id="standard-basic"
				label="Nome do restaurante"
				variant="standard"
			/>
			<Button type="submit" variant="outlined">
				Enviar
			</Button>
		</form>
	);
};

export default NovoRestaurante;
