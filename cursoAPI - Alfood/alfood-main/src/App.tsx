import { Routes, Route } from "react-router-dom";
import AdministracaoRestaurante from "./paginas/Administracao/Restaurante";
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
		</Routes>
	);
}

export default App;
