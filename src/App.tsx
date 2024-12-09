import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import FotoPessoal from './assets/fotoPessoal.png';
import onCampus from './assets/OnCampus.png'
import planner from './assets/Planner.png'
import starWars from './assets/starWarsHome.png'
import dolarEuro from './assets/dolarEuro.png'

const App: React.FC = () => {
  const certificates = [
    {
      title: "Arquiteto de Soluções em Cloud - 3° semestre",
      issuer: "Atitus Educação",
      date: "Julho de 2024",
      skills: ["Cibersegurança", "Amazon Web Services"],
      path: "https://www.linkedin.com/in/rafael-augusto-klein-0a9770268/details/certifications/1730077276732/single-media-viewer/?profileId=ACoAAEGby4EByy3MJoXe15tsV6aSB9dmPLJF1B8"
    },
    {
      title: "NLW Journey - ReactJS",
      issuer: "Rocketseat",
      date: "Julho de 2024",
      skills: [
        "React"
      ],
      path: "https://app.rocketseat.com.br/certificates/d13ff0d7-f229-4af8-8524-f47fc499b2de"
    },
    {
      title:
        "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1",
      issuer: "Amazon Web Services",
      date: "Junho de 2024",
      skills: [
        "Amazon Web Services"
      ],
      path: "https://www.credly.com/badges/9c4794c9-6a66-454a-b84b-d423d85d46f1/linked_in_profile"
    },
    {
      title: "Desenvolvimento de soluções - 2° semestre",
      issuer: "Atitus Educação",
      date: "Junho de 2024",
      skills: [
        "Desenvolvimento Java Backend e SQL",
        "Desenvolvimento HTML, CSS e Javascript Frontend",
      ],
      path: "https://www.even3.com.br/documentos/imprimir?i=97425931.5683398.3.7.8921764153667368&cc=257F2ACD-A3DC-427D-AC56-26B7F7F7C396"
    },
    {
      title: "NLW Pocket: Javascript - Full-stack",
      issuer: "Rocketseat",
      date: "Setembro de 2024",
      skills: [
        "Node.JS",
        "React",
      ],
      path: "https://app.rocketseat.com.br/certificates/35655d56-2ab3-4cf2-9dab-8a3baf4098d4"
    },
  ];

  return (
    <div className="bg-black text-gray-300 font-sans min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-10">
        <nav className="flex justify-center py-8">
          <ul className="flex space-x-6 bg-zinc-900 rounded-full px-4 py-2">
            <li className="group">
              <a href="#home" className="text-lg group-hover:text-black group-hover:bg-white  transition duration-300 px-4 py-1 rounded-full">Home</a>
            </li>
            <li className="group">
              <a href="#about" className="text-lg group-hover:text-black group-hover:bg-white transition duration-300 px-4 py-2 rounded-full">Sobre</a>
            </li>
            <li className="group">
              <a href="#projects" className="text-lg group-hover:text-black group-hover:bg-white transition duration-300 px-4 py-2 rounded-full">Projetos</a>
            </li>
            <li className="group">
              <a href="#contact" className="text-lg group-hover:text-black group-hover:bg-white transition duration-300 px-4 py-2 rounded-full">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="relative flex flex-col items-center justify-center text-center py-30 bg-black min-h-screen overflow-hidden">
        <h1 className="text-8xl font-extrabold leading-tight text-white animate-fadeIn">Rafael Augusto Klein</h1>
        <p className="text-xl mt-6 text-zinc-400">Desenvolvedor FullStack | Apaixonado pela Tecnologia.</p>
        <a
          href="#"
          className="absolute bottom-10 text-white text-xl flex items-center gap-2 transform hover:scale-110 transition duration-300"
        >
          SCROLL DOWN
          <span>&#8595;</span>
        </a>
      </section>

      <section id="about" className="bg-black py-24">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-6 text-zinc-100">Sobre</h3>
          <hr className="w-72 border-t border-zinc-400 mx-auto mt-2 mb-10" />
          <div className="flex flex-col md:flex-row items-center md:items-center gap-x-10">
            {/* Texto */}
            <div className="md:w-1/2 text-start">
              <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
                Olá! Sou o Rafael, estudante de Ciência da Computação na Atitus Educação - Passo Fundo. Desenvolvedor FullStack apaixonado por tecnologia. Trabalho com diversas ferramentas e linguagens de programação, buscando sempre entregar soluções eficientes e de alta qualidade. Meu objetivo é continuar aprendendo e aprimorando minhas habilidades para contribuir no desenvolvimento de sistemas inovadores e impactantes.
              </p>

              <ul className="mt-8 space-y-6">
                <li>
                  <a
                    href="https://www.linkedin.com"
                    className="flex items-center gap-2 font-semibold text-blue-500 hover:text-blue-400"
                  >
                    <Linkedin className="w-6 h-6" />
                    LinkedIn
                  </a>
                  <hr className="w-full border-t border-zinc-400 mt-2" />
                </li>
                <li>
                  <a
                    href="https://github.com"
                    className="flex items-center gap-2 font-semibold text-gray-300 hover:text-gray-200"
                  >
                    <Github className="w-6 h-6" />
                    GitHub
                  </a>
                  <hr className="w-full border-t border-zinc-400 mt-2" />
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    className="flex items-center gap-2 font-semibold text-pink-400 hover:text-pink-300"
                  >
                    <Instagram className="w-6 h-6" />
                    Instagram
                  </a>
                  <hr className="w-full border-t border-zinc-400 mt-2" />
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src={FotoPessoal}
                alt="Rafael Augusto Klein"
                className="w-60 md:w-96 rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-start mb-6 text-zinc-100">Certificações</h3>
          <hr className="w-56 border-t border-zinc-400 mt-2 mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-3xl shadow-lg hover:bg-zinc-800 hover:shadow-xl transform hover:scale-105 transition duration-300 group"
              >
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-zinc-400">{cert.issuer}</p>
                <p className="text-sm text-zinc-400">{cert.date}</p>
                {cert.skills && (
                  <ul className="mt-2 text-sm text-zinc-400">
                    {cert.skills.map((skill, i) => (
                      <li key={i}>- {skill}</li>
                    ))}
                  </ul>
                )}
                <a
                  href={cert.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-violet-500 hover:underline text-sm"
                >
                  Ver certificado
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-black py-18">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-start mb-6 text-zinc-100">Especialidades</h3>
          <hr className="w-56 border-t border-zinc-400 mt-2 mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Desenvolvimento Frontend',
                description:
                  'Com o objetivo de criar interfaces intuitivas, utilizando as principais tecnologias do mercado, como React, Tailwind, etc., busco abordar designs modernos e criativos, focando em desempenho e fluidez para uma ótima navegação do usuário.',
              },
              {
                title: 'Design',
                description:
                  'Transformo ideias em visuais impactantes. Combinando criatividade e estratégia, desenvolvo identidades visuais, layouts e interfaces que se comunicam e engajam o público.',
              },
              {
                title: 'Análise de Dados',
                description:
                  'Área em que estou iniciando o aprendizado, estou gostando dessa nova experiência, principalmente em seus vários tipos de aplicações. É uma área que transforma as decisões intuitivas em decisões baseadas em evidências, impactando em vários setores.',
              },
              {
                title: 'Desenvolvimento Backend',
                description:
                  'Tenho experiência em desenvolver aplicações, com algumas das principais linguagens do mercado como Java e Node.js, que garantem que dados e funcionalidades sejam acessados e processados corretamente. Conectando-se com a interface do usuário, através de APIs e banco de dados.',
              },
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-3xl shadow-lg hover:bg-zinc-800 hover:shadow-xl transform hover:scale-105 transition duration-300 group"
              >
                <h4 className="text-2xl text-white font-bold mb-4 relative">
                  {expertise.title}
                  <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-zinc-400 transition-all duration-300 group-hover:w-80"></span>
                </h4>
                <p className="text-zinc-400">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-gradient-to-b from-black via-zinc-900 to-zinc-800 py-24">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-6 text-zinc-100">Habilidades</h3>
          <hr className="w-72 border-t border-zinc-400 mx-auto mt-2 mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              { name: 'React', color: 'text-[#61DAFB]', icon: <Code /> },
              { name: 'JavaScript', color: 'text-yellow-500', icon: <Code /> },
              { name: 'Java', color: 'text-red-500', icon: <Code /> },
              { name: 'TypeScript', color: 'text-blue-400', icon: <Code /> },
              { name: 'Git', color: 'text-violet-500', icon: <Code /> },
              { name: 'Tailwind CSS', color: 'text-teal-400', icon: <Code /> },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-zinc-900 p-6 rounded-3xl shadow-lg hover:bg-zinc-800 hover:shadow-xl transform hover:scale-105 transition duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center bg-opacity-10 ${skill.color} bg-black mb-4 group-hover:rotate-12 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <p className="text-lg text-zinc-100 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-gradient-to-b from-zinc-800 via-zinc-900 to-black py-22">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-zinc-100 mb-6">Projetos</h3>
          <hr className="w-72 border-t border-zinc-400 mx-auto mt-2 mb-8" />
          <p className="text-zinc-400 mb-12 max-w-2xl mx-auto text-lg">
            A seguir estão alguns projetos que desenvolvi ao longo da minha trajetória como desenvolvedor. Para explorar mais sobre eles ou sobre outros projetos basta clicar em algum que se interessar e observar toda a tecnologia e resultado por trás dele.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://github.com/OnCampuss/OnCampus-frontend" target="_blank" className="group">
              <div className="rounded-3xl bg-purple-800 aspect-[3/2] flex items-center justify-center overflow-hidden">
                <img
                  src={onCampus}
                  alt="OnCampus"
                  className="w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-white text-2xl text-start font-bold mt-4">OnCampus</h4>
              <p className="text-gray-400 font-semibold text-start text-base mb-8">
                Organização de transporte universitário
              </p>
            </a>
            <a href="https://github.com/rklein7/NLW-React" target="_blank" className="group">
              <div className="rounded-3xl bg-lime-500 aspect-[3/2] flex items-center justify-end overflow-hidden">
                <img
                  src={planner}
                  alt="plann.er"
                  className="w-2/3 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-white text-2xl font-bold text-start mt-4">plann.er</h4>
              <p className="text-gray-400 font-semibold text-start text-base">Planejador de viagens</p>
            </a>
            <a href="https://github.com/rklein7/Projeto-StarWars/" target="_blank" className="group">
              <div className="rounded-3xl bg-blue-500 aspect-[3/2] flex items-center justify-center overflow-hidden">
                <img
                  src={starWars}
                  alt="StarWars"
                  className="w-96 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-white text-2xl font-bold text-start mt-4">Star Wars</h4>
              <p className="text-gray-400 font-semibold text-start text-base mb-4">
                Aplicativo para dados de personagens de StarWars
              </p>
            </a>
            <a href="https://github.com/rklein7/microservices-java" target="_blank" className="group">
              <div className="rounded-3xl bg-orange-500 aspect-[3/2] flex items-center justify-center overflow-hidden">
                <img
                  src={dolarEuro}
                  alt="Cambio"
                  className="w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-white text-2xl font-bold text-start mt-4">Cotação Cambial</h4>
              <p className="text-gray-400 font-semibold text-start text-base">
                API em microserviços para cotações
              </p>
            </a>
          </div>
          <a
            href="https://github.com/rklein7"
            target='blank'
            className="text-gray-400 text-lg inline-flex items-center mt-12 hover:text-white transition"
          >
            Veja mais no meu GitHub
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      <section id="contact" className="container mx-auto py-40 px-6">
        <h3 className="text-6xl font-bold text-center mb-6 text-zinc-100">Entre em contato</h3>
        <hr className="w-72 border-t border-zinc-400 mx-auto mt-2 mb-8" />
        <div className="flex bg-zinc-900 justify-center space-x-4 rounded-full px-4 py-3 max-w-md mx-auto">
          <Mail />
          <h3 className='text-zinc-300'>rafael.augustoklein04@gmail.com</h3>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://www.linkedin.com"
                className="flex items-center gap-2 font-semibold text-gray-400 hover:text-violet-500"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                className="flex items-center gap-2 font-semibold text-gray-400 hover:text-violet-500"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="flex items-center gap-2 font-semibold text-gray-400 hover:text-violet-500"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </section>


      <footer className="bg-gradient-to-b from-black via-zinc-950 to-zinc-900 py-6 text-center">
        <p className="text-[#79818C] text-sm">&copy; 2024 Rafael. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
