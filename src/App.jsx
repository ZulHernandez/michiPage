import { Route, Routes, Navigate } from "react-router-dom";
import RoHome from "./routes/RoHome";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<RoHome />} />
			</Routes>
		</>
	);
}

export default App;
