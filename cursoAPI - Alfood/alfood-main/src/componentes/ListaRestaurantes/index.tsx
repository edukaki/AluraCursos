import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import IPaginacao from "../../interfaces/IPaginacao";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";

interface IParametrosBusca {
	ordering?: string;
	search?: string;
}

const ListaRestaurantes = () => {
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
	const [proximaPagina, setProximaPagina] = useState("");
	const [anteriorPagina, setAnteriorPagina] = useState("");
	const [busca, setBusca] = useState("");

	const carregarDados = (url: string, opcoes: AxiosRequestConfig = {}) => {
		axios
			.get<IPaginacao<IRestaurante>>(url, opcoes)
			.then((resposta) => {
				setRestaurantes(resposta.data.results);
				setProximaPagina(resposta.data.next);
				setAnteriorPagina(resposta.data.previous);
			})
			.catch((erro) => {
				console.log(erro);
			});
	};

	const buscar = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		const opcoes = {
			params: {} as IParametrosBusca,
		};
		if (busca) opcoes.params.search = busca;
		carregarDados("http://localhost:8000/api/v1/restaurantes/", opcoes);
	};

	useEffect(() => {
		carregarDados("http://localhost:8000/api/v1/restaurantes/");
	}, []);

	return (
		<section className={style.ListaRestaurantes}>
			<h1>
				Os restaurantes mais <em>bacanas</em>!
			</h1>
			<form onSubmit={buscar}>
				<input
					type="text"
					value={busca}
					onChange={(evento) => setBusca(evento.target.value)}
				/>
				<button type="submit">buscar</button>
			</form>
			{restaurantes?.map((item, index) => (
				<Restaurante restaurante={item} key={index} />
			))}

			{
				<button
					onClick={() => carregarDados(anteriorPagina)}
					disabled={!anteriorPagina}
				>
					Pagina Anterior
				</button>
			}
			{
				<button
					onClick={() => carregarDados(proximaPagina)}
					disabled={!proximaPagina}
				>
					Proxima Pagina
				</button>
			}
		</section>
	);
};

export default ListaRestaurantes;
