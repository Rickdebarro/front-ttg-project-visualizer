import { Link } from "react-router-dom";

export default function AboutTTG() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center bg-[url('./assets/login-bg.png')] bg-cover bg-center bg-no-repeat py-12">
      <div className="flex w-11/12 max-w-6xl flex-col gap-8 rounded-lg bg-[#d9d9d9] p-8 shadow-lg md:p-12">
        {/* Header */}
        <header className="flex flex-col items-center gap-4 border-b-2 border-gray-400 pb-6">
          <h1 className="font-rift text-center text-5xl font-bold text-green-400 subpixel-antialiased md:text-6xl">
            TRILHA TÉCNICO-GESTOR
          </h1>
          <p className="text-center text-xl font-light text-gray-700 subpixel-antialiased">
            Portal de Projetos
          </p>
        </header>

        {/* Seção TTG */}
        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-[#EB521B] subpixel-antialiased">
            O que é a Trilha Técnico-Gestor?
          </h2>
          <div className="flex flex-col gap-3 text-justify text-base leading-relaxed text-gray-800">
            <p>
              A <strong>Trilha Técnico-Gestor (TTG)</strong> é um programa
              inovador do SENAI CIMATEC que integra formação técnica de
              excelência com desenvolvimento de competências gerenciais,
              preparando profissionais completos para os desafios da indústria
              4.0.
            </p>
            <p>
              O programa oferece uma experiência única de aprendizado que
              combina conhecimentos técnicos avançados com habilidades de
              gestão, liderança e inovação. Os participantes desenvolvem
              projetos reais aplicados à indústria, trabalhando em equipes
              multidisciplinares e utilizando metodologias ágeis.
            </p>
            <p>
              Durante a trilha, os alunos têm a oportunidade de desenvolver
              competências em:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Gestão de projetos e metodologias ágeis</li>
              <li>Liderança e trabalho em equipe</li>
              <li>Inovação e resolução de problemas complexos</li>
              <li>Tecnologias avançadas de automação e indústria 4.0</li>
              <li>Comunicação técnica e apresentação de resultados</li>
            </ul>
          </div>
        </section>

        {/* Seção SENAI CIMATEC */}
        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-[#005EAD] subpixel-antialiased">
            Sobre o SENAI CIMATEC
          </h2>
          <div className="flex flex-col gap-3 text-justify text-base leading-relaxed text-gray-800">
            <p>
              O <strong>SENAI CIMATEC</strong> é um centro de referência em
              educação, tecnologia e inovação, localizado em Salvador, Bahia.
              Reconhecido nacional e internacionalmente, o CIMATEC oferece
              educação profissional, serviços técnicos e tecnológicos de ponta
              para a indústria.
            </p>
            <p>
              Como parte integrante do Sistema FIEB (Federação das Indústrias
              do Estado da Bahia), o SENAI CIMATEC atua em diversas frentes:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Educação:</strong> Cursos técnicos, graduação,
                pós-graduação e educação continuada
              </li>
              <li>
                <strong>Pesquisa e Inovação:</strong> Desenvolvimento de
                soluções tecnológicas para a indústria
              </li>
              <li>
                <strong>Serviços Tecnológicos:</strong> Consultoria,
                assessoria e serviços especializados
              </li>
              <li>
                <strong>Infraestrutura:</strong> Laboratórios de última
                geração e ambientes de aprendizagem inovadores
              </li>
            </ul>
            <p>
              Com uma abordagem focada na indústria 4.0, o SENAI CIMATEC forma
              profissionais preparados para liderar a transformação digital e
              tecnológica do setor produtivo brasileiro.
            </p>
          </div>
        </section>

        {/* Seção Portal de Projetos */}
        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-green-600 subpixel-antialiased">
            Portal de Projetos TTG
          </h2>
          <div className="flex flex-col gap-3 text-justify text-base leading-relaxed text-gray-800">
            <p>
              Este portal foi desenvolvido para centralizar e dar visibilidade
              aos projetos desenvolvidos pelos alunos da Trilha Técnico-Gestor.
              Aqui você pode:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Visualizar todos os projetos desenvolvidos na TTG</li>
              <li>Acompanhar o progresso e resultados das equipes</li>
            </ul>
          </div>
        </section>

        {/* Botão de Voltar */}
        <div className="flex items-center justify-center pt-4">
          <Link
            to="/"
            className="h-13 w-64 cursor-pointer rounded-2xl bg-[#EB521B] p-3 text-center text-lg font-medium text-gray-200 transition hover:bg-[#005EAD] hover:text-[#000000]"
          >
            ← Voltar ao Login
          </Link>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center border-t-2 border-gray-400 pt-6">
          <img
            src="src/assets/cimatec-universidade-logo.png"
            alt="SENAI CIMATEC"
            className="w-56"
          />
        </div>
      </div>
    </div>
  );
}
