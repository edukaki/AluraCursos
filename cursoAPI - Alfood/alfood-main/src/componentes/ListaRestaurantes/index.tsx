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

	useEffect(() => {
		axios
			.get<IPaginacao<IRestaurante>>(
				"http://localhost:8000/api/v1/restaurantes/"
			)
			.then((resposta) => {
				setRestaurantes(resposta.data.results);
				setAnteriorPagina(resposta.data.previous);
				setProximaPagina(resposta.data.next);
			})
			.catch((erro) => console.log(erro));
	}, []);

	function verPagina(pagina: string) {
		const url =
			pagina === "anterior"
				? anteriorPagina
				: pagina === "proxima"
				? proximaPagina
				: "";

		axios
			.get<IPaginacao<IRestaurante>>(url)
			.then((resposta) => {
				setRestaurantes(resposta.data.results);
				setAnteriorPagina(resposta.data.previous);
				setProximaPagina(resposta.data.next);
			})
			.catch((erro) => console.log(erro));
	}

	return (
		<section className={style.ListaRestaurantes}>
			<h1>
				Os restaurantes mais <em>bacanas</em>!
			</h1>
			{restaurantes?.map((item, index) => (
				<Restaurante restaurante={item} key={index} />
			))}

			{anteriorPagina && (
				<button onClick={() => verPagina("anterior")}>Pagina Anterior</button>
			)}
			{proximaPagina && (
				<button onClick={() => verPagina("proxima")}>Proxima Pagina</button>
			)}
		</section>
	);
};

export default ListaRestaurantes;
