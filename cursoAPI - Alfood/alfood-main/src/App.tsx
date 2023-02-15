import { Routes, Route } from "react-router-dom";
import AdministracaoRestaurante from "./paginas/Administracao/Restaurante";
import NovoRestaurante from "./paginas/Administracao/Restaurante/Novo";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/restaurantes" element={<VitrineRestaurantes />} />
			<Route
				path="/admin/restaurantes"
				element={<AdministracaoRestaurante />}
			/>
			<Route path="/admin/restaurantes/novo" element={<NovoRestaurante />} />
			<Route path="/admin/restaurantes/:formId" element={<NovoRestaurante />} />
		</Routes>
	);
}

export default App;
