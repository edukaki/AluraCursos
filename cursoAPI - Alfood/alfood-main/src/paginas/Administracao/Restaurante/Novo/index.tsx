import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const NovoRestaurante = () => {
	const [nomeRestaurante, setNomeRestaurante] = useState<string>("");
	const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		console.log("enviar dados api");
		console.log(nomeRestaurante);
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
