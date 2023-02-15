import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../../interfaces/IRestaurante";

const NovoRestaurante = () => {
	const parametros = useParams();
	const url = `http://localhost:8000/api/v2/restaurantes/${
		parametros.formId ? parametros.formId : ""
	}/`;
	const [nomeRestaurante, setNomeRestaurante] = useState<string>("");

	useEffect(() => {
		parametros.formId &&
			axios
				.get<IRestaurante>(url)
				.then((resposta) => setNomeRestaurante(resposta.data.nome))
				.then(() => console.log(nomeRestaurante))
				.catch((erro) => console.log(erro));
	}, [parametros]);

	const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();

		if (parametros.formId) {
			axios
				.put(url, { nome: nomeRestaurante })
				.then(() => alert("Restaurante atualizado com sucesso"));
		} else {
			axios
				.post(url, {
					nome: nomeRestaurante,
				})
				.then(() => alert("Restaurante cadastrado com sucesso"))
				.catch((erro) => console.log(erro));
		}
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
