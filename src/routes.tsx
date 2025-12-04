import { createBrowserRouter } from "react-router-dom";

// Importe suas páginas
import App from "./App.tsx"; // App agora será apenas a TELA DE LOGIN
import DashboardGeralProjetos from "./pages/dashboard_geral_projetos.tsx"; 
import CadastroAluno from "./pages/cadastros/cadastro_aluno.tsx";
import AboutTTG from "./components/shared/AboutTTG"; // Importe o About aqui

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sobre-ttg",
    element: <AboutTTG />,
  },
  {
    path: "/dashboard/projetos",
    element: <DashboardGeralProjetos />,
  },
  {
    path: "/orientador/cadastro/aluno",
    element: <CadastroAluno />,
  },
]);

export default router;