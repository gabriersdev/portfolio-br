const exemplo = 
{
  titulo: "", 
  autor: "Gabriel Ribeiro", 
  descricao: '',
  existeSaibaMais: false,
  tituloSaibaMais: '',
  saibaMais: '', 
  conclusao: 2022-12-31, 
  link: "", 
  linguagens: [],
  dificuldade: 1
}

const dadosProjetos = [
  {
    titulo: "Expresso Mobilidade", 
    autor: "Gabriel Ribeiro", 
    descricao: 'É um serviço de mobilidade urbana feito de usuários para usuários da Região Metropolitana de Belo Horizonte e que visa facilitar e melhorar o dia à dia de quem precisa se deslocar usando o transporte público.',
    existeSaibaMais: true,
    tituloSaibaMais: 'Expresso Mobilidade',
    saibaMais: 'Através do Expresso é possível consultar linhas, estações e pontos de recarga. O usuário pode adicionar os cartões de transporte público, favoritas as linhas que ele mais utiliza e gerenciar o uso delas através dos cartões. É possível gerar relatórios de uso dos cartões e baixar o extrato destes cartões e os dados das linhas', 
    conclusao: 2022-12-31, 
    link: "https://expressomobilidade.000webhostapp.com/login/index.html", 
    linguagens: ["PHP", "MySQL", "JS", "CSS", "HTML", "Figma"],
    dificuldade: 3
  },
  // {
  //   titulo: "API Expresso Mobilidade", 
  //   autor: "Gabriel Ribeiro", 
  //   descricao: 'Permite a consulta externa aos dados de 923 linhas de Belo Horizonte e Região Metropolitana operadas pela BHTrans, Vinscol e o Consórcio Ótimo Metropolitano. A API tem estrutura básica e retorna os dados em JSON através de AJAX.',
  //   existeSaibaMais: true,
  //   tituloSaibaMais: 'API Expresso Mobilidade',
  //   saibaMais: 'Para usar a API, o desenvolvedor pode acessar a página de API do Expresso', 
  //   conclusao: 2022-12-31, 
  //   link: "", 
  //   linguagens: ["PHP", "MySQL", "JS", "CSS", "HTML"],
  //   dificuldade: 3
  // },
  {
    titulo: "Hotel Alura", 
    autor: "Gabriel Ribeiro", 
    descricao: 'Projeto de um gerenciador de um gerenciador simples de hotel desenvolvido para o Challenge do Oracle ONE. Este projeto permite ao usuário: registar reservas e hóspedes, editar e consultar as reservas e hóspedes existentes, exclusão de todos os tipos de registros.',
    existeSaibaMais: false,
    tituloSaibaMais: '',
    saibaMais: '', 
    conclusao: null, 
    link: "https://github.com/gabrieszin/Alura-Hotel", 
    linguagens: ["Java", "MySQL", "Git"],
    dificuldade: 3
  },
  {
    titulo: "Conversor em Java", 
    autor: "Gabriel Ribeiro", 
    descricao: 'Este projeto é um Conversor de Moedas, Medidas e Temperatura desenvolvido por mim para o primeiro Challenge da Trilha de Java do Programa Oracle ONE. Este projeto permite ao usuário: converter moedas, converter medidas, converter entre unidades de temperatura.',
    existeSaibaMais: false,
    tituloSaibaMais: '',
    saibaMais: '', 
    conclusao: null, 
    link: "https://gabrieszin.github.io/home-page-Conversor/", 
    linguagens: ["Java", "Git", "Figma"],
    dificuldade: 3
  },
  // {
  //   titulo: "Institucional do Expresso Mobilidade", 
  //   autor: "Gabriel Ribeiro", 
  //   descricao: 'É a apresentação do Expresso Mobilidade para quem não conhece o projeto ou nunca o acessou. Para o desenvolvimento dessas páginas foram usados os frameworks Bootstrap, JQuery, SweetAlert, Bootstrap Icons e Flaticon. O projeto foi prototipado no Figma e desenvolvido junto do <a href="https://github.com/samuelsoaresl" target="_blank">Samuel Soares.</a>', 
  //   existeSaibaMais: false,
  //   tituloSaibaMais: '', 
  //   saibaMais: "", 
  //   conclusao: 2022-12-19, 
  //   link: "https://expressomobilidade.000webhostapp.com/externo-expresso/", 
  //   linguagens: ["PHP", "MySQL", "JS", "CSS", "HTML", "Figma"],
  //   dificuldade: 2
  // },
  {
    titulo: "Meus Cursos na Alura", 
    autor: "Gabriel Ribeiro", 
    descricao: 'Neste projeto, eu consumo a API de Cursos da Alura e mostro meus cursos e formações.',
    existeSaibaMais: false,
    tituloSaibaMais: '',
    saibaMais: '', 
    conclusao: 2023-4-27, 
    link: "https://gabrieszin.github.io/my-courses-alura/", 
    linguagens: ['JS', 'CSS', 'HTML', 'Figma'],
    dificuldade: 2
  },
  {
    titulo: "Projeto Humanos: Altamira", 
    autor: "Gabriel Ribeiro", 
    descricao: 'É um website dedicado a 5ª temporada do podcast "Projeto Humanos". Neste projeto, eu implementei a funções de pesquisa com autocomplete e um player para a trilha sonora da temporada.', 
    existeSaibaMais: false,
    tituloSaibaMais: '', 
    saibaMais: "", 
    conclusao: 2022-12-19, 
    link: "https://gabrieszin.github.io/projeto-humanos-altamira/", 
    linguagens: ["JS", "CSS", "HTML", "Git", "Figma"],
    dificuldade: 2
  },
  {
    titulo: "Projetos dos Cursos Alura", 
    autor: "Gabriel Ribeiro", 
    descricao: "Aqui você encontra alguns dos projetos que eu desenvolvi junto de cursos que eu realizei na Alura.", 
    existeSaibaMais: false, 
    tituloSaibaMais: '', 
    saibaMais: "", 
    conclusao: 2022-12-19, 
    link: "./projetos/cursos-alura/", 
    linguagens: ["JS", "CSS", "HTML"], 
    dificuldade: 2
  },
  {
    titulo: "Birthday Message", 
    autor: "Gabriel Ribeiro", 
    descricao: 'O Birthday Message é um projeto que renderiza mensagens de aniversário (personalizadas ou não)',
    existeSaibaMais: false,
    tituloSaibaMais: '',
    saibaMais: '', 
    conclusao: 2023-4-27, 
    link: "https://gabrieszin.github.io/birthday-message", 
    linguagens: ['JS', 'CSS', 'HTML', 'Figma'],
    dificuldade: 1
  },
  {
    titulo: "Calculadora Tempo de Serviço", 
    autor: "Gabriel Ribeiro", 
    descricao: 'O nome é auto explicativo: o projeto é uma calculadora que você insere com os períodos trabalhados e ela calcula o total',
    existeSaibaMais: false,
    tituloSaibaMais: '',
    saibaMais: '', 
    conclusao: 2023-6-1, 
    link: "https://gabrieszin.github.io/calculadora-tempo-de-servico/", 
    linguagens: ['JS', 'CSS', 'HTML', 'Figma'],
    dificuldade: 1
  },
  {
    titulo: "Gerador de senhas", 
    autor: "Gabriel Ribeiro", 
    descricao: 'Gere senhas aleatórias seguras, conforme suas escolhas e teste as senhas que você já usa.',
    existeSaibaMais: false,
    tituloSaibaMais: '',
    saibaMais: '', 
    conclusao: 2023-6-1, 
    link: "https://gabrieszin.github.io/random-password/", 
    linguagens: ['JS', 'CSS', 'HTML'],
    dificuldade: 1
  },
  
  // {
  //   titulo: "Projetos Antigos", 
  //   autor: "Gabriel Ribeiro", 
  //   descricao: "Aqui você encontra os primeiro projetos que eu desenvolvi :)", 
  //   existeSaibaMais: false, 
  //   tituloSaibaMais: '', 
  //   saibaMais: "", 
  //   conclusao: 2022-12-19, 
  //   link: "./projetos/projetos-antigos/", 
  //   linguagens: ["JS", "CSS", "HTML"], 
  //   dificuldade: 1
  // },
  // {
  //   titulo: "Gerenciador de Biblioteca", 
  //   autor: "Gabriel Ribeiro", 
  //   descricao: "É um gerenciador básico de biblioteca escolar. Primeiro é necessário cadastrar um aluno, depois um livro (no gerenciador, chamado de título) e a partir daí registrar uma locação.", 
  //   existeSaibaMais: false, 
  //   tituloSaibaMais: '', 
  //   saibaMais: "", 
  //   conclusao: 2022-12-19, 
  //   link: "", 
  //   linguagens: ["JS", "CSS", "HTML"], 
  //   dificuldade: 2
  // },
  {
    titulo: "Encriptador de Vogais", 
    autor: "Gabriel Ribeiro", 
    descricao: "Este projeto é um codificador de vogais em textos. As letras A, E, I, O e U são ofuscadas, deixando o texto encriptado. É possível também copiar e descriptografar os textos.", 
    existeSaibaMais: false, 
    tituloSaibaMais: '', 
    saibaMais: "", 
    conclusao: 2022-12-19, 
    link: "https://gabrieszin.github.io/Encriptador/", 
    linguagens: ["JS", "CSS", "HTML", "Git"], 
    dificuldade: 1
  },
  {
    titulo: "Jogo da Forca", 
    autor: "Gabriel Ribeiro", 
    descricao: 'Projeto desenvolvido para a Trilha Iniciante em Programação da Alura. O Jogo da Forca foi realizado através das aulas dos instrutores da Alura. No desenvolvimento, foi usada a biblioteca SweetAlert, o Trelo e o Figma, para a prototipação.',
    existeSaibaMais: false,
    tituloSaibaMais: '',
    saibaMais: '', 
    conclusao: 2022-12-31, 
    link: "https://gabrieszin.github.io/Jogo-da-Forca/", 
    linguagens: ["JS", "CSS", "HTML", "Git"],
    dificuldade: 1
  },
]

export{
  dadosProjetos
}