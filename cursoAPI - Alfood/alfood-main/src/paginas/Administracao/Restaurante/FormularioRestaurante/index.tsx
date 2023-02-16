import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../../http";
import IRestaurante from "../../../../interfaces/IRestaurante";

const FormularioRestaurante = () => {
	const parametros = useParams();
	const url = `restaurantes/${
		parametros.formId ? parametros.formId + "/" : ""
	}`;
	const [nomeRestaurante, setNomeRestaurante] = useState<string>("");

	useEffect(() => {
		parametros.formId &&
			http
				.get<IRestaurante>(url)
				.then((resposta) => setNomeRestaurante(resposta.data.nome))
				.catch((erro) => console.log(erro));
	}, [parametros, url]);

	const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();

		if (parametros.formId) {
			http
				.put(url, { nome: nomeRestaurante })
				.then(() => alert("Restaurante atualizado com sucesso"));
		} else {
			http
				.post(url, {
					nome: nomeRestaurante,
				})
				.then(() => alert("Restaurante cadastrado com sucesso"))
				.catch((erro) => console.log(erro));
		}
	};

	return (
		<Box
			sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<Typography component="h1" variant="h6">
				Formulario de Restaurantes
			</Typography>
			<Box component="form" onSubmit={submeterForm}>
				<TextField
					value={nomeRestaurante}
					onChange={(evento) => setNomeRestaurante(evento.target.value)}
					id="standard-basic"
					label="Nome do restaurante"
					variant="standard"
					fullWidth
					required
				/>
				<Button
					sx={{ marginTop: 1 }}
					type="submit"
					variant="outlined"
					fullWidth
				>
					Enviar
				</Button>
			</Box>
		</Box>
	);
};

export default FormularioRestaurante;
