import axios from "axios";
import { useEffect, useState } from "react";
import IPaginacao from "../../interfaces/IPaginacao";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";

const ListaRestaurantes = () => {
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
	const [proximaPagina, setProximaPagina] = useState("");
	const [anteriorPagina, setAnteriorPagina] = useState("");

	const carregarDados = (url: string) => {
		axios
			.get<IPaginacao<IRestaurante>>(url)
			.then((resposta) => {
				setRestaurantes(resposta.data.results);
				setProximaPagina(resposta.data.next);
				setAnteriorPagina(resposta.data.previous);
			})
			.catch((erro) => {
				console.log(erro);
			});
	};
	useEffect(() => {
		carregarDados("http://localhost:8000/api/v1/restaurantes/");
	}, []);

	return (
		<section className={style.ListaRestaurantes}>
			<h1>
				Os restaurantes mais <em>bacanas</em>!
			</h1>
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
