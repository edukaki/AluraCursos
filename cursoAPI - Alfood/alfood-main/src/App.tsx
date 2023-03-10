import { Routes, Route } from "react-router-dom";
import NavbarAdmin from "./componentes/NavbarAdmin";
import AdministracaoRestaurante from "./paginas/Administracao/Restaurante";
import FormularioRestaurante from "./paginas/Administracao/Restaurante/FormularioRestaurante";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/restaurantes" element={<VitrineRestaurantes />} />
			<Route path="/admin" element={<NavbarAdmin />}>
				<Route path="restaurantes" element={<AdministracaoRestaurante />} />
				<Route path="restaurantes/novo" element={<FormularioRestaurante />} />
				<Route
					path="restaurantes/:formId"
					element={<FormularioRestaurante />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
