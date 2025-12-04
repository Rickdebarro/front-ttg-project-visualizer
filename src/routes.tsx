import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import DashboardGeralProjetos from "./pages/dashboard_geral_projetos.tsx"; 
import CadastroAluno from "./pages/cadastros/cadastro_aluno.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard/projetos",
    element: <DashboardGeralProjetos />,
  },
  {
  path: "/orientador/cadastro/aluno",
   element: <CadastroAluno/>,
  },

]);

export default router;