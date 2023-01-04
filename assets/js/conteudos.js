const dadosProjetos = [
  {
    titulo: "Expresso Mobilidade", 
    autor: "Gabriel Ribeiro", 
    descricao: 'É um serviço de mobilidade urbana feito de usuários para usuários da Região Metropolitana de Belo Horizonte e que visa facilitar e melhorar o dia à dia de quem precisa se deslocar usando o transporte público.',
    existeSaibaMais: true,
    tituloSaibaMais: 'Expresso Mobilidade',
    saibaMais: 'Através do Expresso é possível consultar linhas, estações e pontos de recarga. O usuário pode adicionar os cartões de transporte público, favoritas as linhas que ele mais utiliza e gerenciar o uso delas através dos cartões. É possível gerar relatórios de uso dos cartões e baixar o extrato destes cartões e os dados das linhas', 
    conclusao: 2022-12-31, 
    link: "", 
    linguagens: ["PHP", "MySQL", "JS", "CSS", "HTML"],
    dificuldade: 3
  },
  {
    titulo: "API Expresso Mobilidade", 
    autor: "Gabriel Ribeiro", 
    descricao: 'Permite a consulta externa aos dados de 923 linhas de Belo Horizonte e Região Metropolitana operadas pela BHTrans, Vinscol e o Consórcio Ótimo Metropolitano. A API tem estrutura básica e retorna os dados em JSON através de AJAX.',
    existeSaibaMais: true,
    tituloSaibaMais: 'API Expresso Mobilidade',
    saibaMais: 'Para usar a API, o desenvolvedor pode acessar a página de API do Expresso', 
    conclusao: 2022-12-31, 
    link: "", 
    linguagens: ["PHP", "MySQL", "JS", "CSS", "HTML"],
    dificuldade: 3
  },
  {
    titulo: "Institucional do Expresso Mobilidade", 
    autor: "Gabriel Ribeiro", 
    descricao: 'É a apresentação do Expresso Mobilidade para quem não conhece o projeto ou nunca o acessou. Para o desenvolvimento dessas páginas foram usados os frameworks Bootstrap, JQuery, SweetAlert, Bootstrap Icons e Flaticon. O projeto foi prototipado no Figma e desenvolvido junto do <a href="https://github.com/samuelsoaresl" target="_blank">Samuel Soares.</a>', 
    existeSaibaMais: false,
    tituloSaibaMais: '', 
    saibaMais: "", 
    conclusao: 2022-12-19, 
    link: "", 
    linguagens: ["PHP", "MySQL", "JS", "CSS", "HTML"],
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
    link: "../../projetos/cursos-alura/", 
    linguagens: ["JS", "CSS", "HTML"], 
    dificuldade: 2
  },
  {
    titulo: "Site de Conscientização", 
    autor: "Gabriel Ribeiro", 
    descricao: "O projeto é um website criado usando um template gratuito. O conteúdo visa realizar uma conscientização sobre o uso de entorpecentes e as suas consequências no corpo. Há também dicas de como tratar o vício e relato de testemunhas retirados da internet.", 
    existeSaibaMais: false, 
    tituloSaibaMais: '', 
    saibaMais: "", 
    conclusao: 2022-12-19, 
    link: "", 
    linguagens: ["JS", "CSS", "HTML"], 
    dificuldade: 2
  },
  {
    titulo: "Gerenciador de Biblioteca", 
    autor: "Gabriel Ribeiro", 
    descricao: "É um gerenciador básico de biblioteca escolar. Primeiro é necessário cadastrar um aluno, depois um livro (no gerenciador, chamado de título) e a partir daí registrar uma locação.", 
    existeSaibaMais: false, 
    tituloSaibaMais: '', 
    saibaMais: "", 
    conclusao: 2022-12-19, 
    link: "", 
    linguagens: ["JS", "CSS", "HTML"], 
    dificuldade: 2
  },
  {
    titulo: "Encriptador de Vogais", 
    autor: "Gabriel Ribeiro", 
    descricao: "Este projeto é um codificador de vogais em textos. As letras A, E, I, O e U são ofuscadas, deixando o texto encriptado. É possível também copiar e descriptografar os textos.", 
    existeSaibaMais: false, 
    tituloSaibaMais: '', 
    saibaMais: "", 
    conclusao: 2022-12-19, 
    link: "https://gabrieszin.github.io/Encriptador/", 
    linguagens: ["JS", "CSS", "HTML"], 
    dificuldade: 1
  },
  {
    titulo: "Jogo da Forca", 
    autor: "Gabriel Ribeiro", 
    descricao: 'Foi um projeto desenvolvido para a Trilha Iniciante em Programação da Alura. O Jogo da Forca foi realizado através das aulas dos instrutores da Alura. Foi usado a biblioteca SweetAlert no desenvolvimento, o Trelo para a organização e o Figma, para a prototipação.',
    existeSaibaMais: false,
    tituloSaibaMais: '',
    saibaMais: '', 
    conclusao: 2022-12-31, 
    link: "https://gabrieszin.github.io/Jogo-da-Forca/", 
    linguagens: ["JS", "CSS", "HTML"],
    dificuldade: 1
  },
  {
    titulo: "Quiz de História", 
    autor: "Gabriel Ribeiro", 
    descricao: 'É um Quiz com algumas perguntas de História em geral. Conforme os acertos, no final o usuário é informado da sua perfomance no Quiz.',
    existeSaibaMais: false,
    tituloSaibaMais: '',
    saibaMais: '', 
    conclusao: 2022-12-31, 
    link: "", 
    linguagens: ["JS", "CSS", "HTML"],
    dificuldade: 1
  },
  {
    titulo: "Calculadora", 
    autor: "Gabriel Ribeiro", 
    descricao: "É uma calculadora comum. É possível fazer os cálculos aritméticos básicos (somar, subtrair, dividir e multiplicar), obter os últimos cinco cálculos feitos e seus respectivos resultados e também ativar/desativar o Modo Noturno.", 
    existeSaibaMais: false, 
    tituloSaibaMais: '', 
    saibaMais: "", 
    conclusao: 2022-12-19, 
    link: "", 
    linguagens: ["JS", "CSS", "HTML"], 
    dificuldade: 1
  },
  {
    titulo: "Tempo para live", 
    autor: "Gabriel Ribeiro", 
    descricao: "Este projeto é um cronômetro que conta quanto tempo falta para as lives do Eskimozin na Twitch. As lives geralmente ocorrem às segundas, quartas, sextas e aos sábados, começando geralmente às 19h - dias e horário em que o script faz a contagem.", 
    existeSaibaMais: false, 
    tituloSaibaMais: '', 
    saibaMais: "", 
    conclusao: 2022-12-19, 
    link: "", 
    linguagens: ["JS", "CSS", "HTML"], 
    dificuldade: 1
  },
  {
    titulo: "Player MP3", 
    autor: "Gabriel Ribeiro", 
    descricao: "É um tocador de músicas que usa o JavaScript para trocar as faixas que foram salvas no servidor. O Player usa ainda a biblioteca FontAwesome e as capas de álbuns do Spotify. As músicas não tem direitos autorais e foram retiradas do YouTube.", 
    existeSaibaMais: false, 
    tituloSaibaMais: '', 
    saibaMais: "", 
    conclusao: 2022-12-19, 
    link: "", 
    linguagens: ["JS", "CSS", "HTML"], 
    dificuldade: 1
  },
]

export{
  dadosProjetos
}