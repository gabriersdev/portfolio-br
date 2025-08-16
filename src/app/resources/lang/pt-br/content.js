const person = {
  generalTitle: "Gabriel Ribeiro",
  firstName: "Gabriel",
  lastName: "Ribeiro",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desenvolvedor Full Stack",
  avatar: "/img/avatar.png",
  location: "Brasil",
  languages: ["Português"], // opcional: Deixe o array vazio se não quiser exibir os idiomas
};

const newsletter = {
  display: true,
  title: <>Inscreva-se na Newsletter de {person.firstName}</>,
  description: (<>Ocasionalmente, escrevo sobre design, tecnologia e compartilho reflexões sobre a interseção entre criatividade e engenharia.</>),
};

const contact = {
  display: true,
  title: <>Fale comigo</>,
  description: (<>Para solicitações de orçamentos, consultoria, manutenção e desenvolvimento de sites e plataformas, envie uma mensagem.</>),
};

const social = [
  // Os links são exibidos automaticamente.
  // Importe novos ícones em /once-ui/icons.ts
  {
    name: "",
    icon: "github",
    link: "https://github.com/gabriersdev",
  },
  {
    name: "",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gabrielmpribeiro",
  },
  {
    name: "",
    icon: "email",
    link: "mailto:gabriel@lts.app.br",
  },
];

const home = {
  label: "Início",
  title: `Portfólio de ${person.name}`,
  description: `Site de portfólio que apresenta meu trabalho como ${person.role}`,
  headlineMediumScreen: <>Desenvolvedor Full Stack</>,
  headlineSmallScreen: <>Meu nome é Gabriel e eu sou um Desenvolvedor Full Stack</>,
  subline: (
    <p>
      Desenvolvedor Web especializado na construção de aplicações web interativas e escaláveis usando React, TypeScript e ferramentas modernas. Entreguei soluções do mundo real como um aplicativo de transporte público, um sistema de validação de dados para correspondentes bancários e bots de automação.
    </p>
  ),
};

const about = {
  label: "Sobre",
  // title: "Sobre mim" + ` - ${home.title}`,
  title: "Sobre mim",
  description: `Conheça ${person.name}, ${person.role} do ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "mailto:devgabrielribeiro@gmail.com",
  },
  schedule: {
    display: true,
    link: "https://calendly.com/devgabrielribeiro/30min",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        <p>Sou Desenvolvedor Web com formação técnica em Informática para Internet e atualmente cursando Análise e Desenvolvimento de Sistemas. Especializo-me na construção de interfaces responsivas e aplicações interativas usando React, TypeScript, JavaScript, HTML e CSS, além de ferramentas como Next.js e Vite.</p>
        
        <p>Desenvolvi soluções do mundo real, como uma plataforma de mobilidade para usuários de transporte público (Mobilidade), uma ferramenta de validação de dados para correspondentes bancários (CCA), um sistema de competição de clipes baseado em votação (BattleTube) e bots para Discord de automação e notificações de conteúdo. Esses projetos demonstram minha capacidade de projetar e entregar aplicações com impacto prático, integrando APIs, manipulando dados dinâmicos e focando na experiência do usuário.</p>
        
        <p style={{marginBottom: 0, paddingBottom: 0}}>Valorizo código limpo, componentes reutilizáveis e aprendizado contínuo, sempre visando entregar soluções escaláveis e de fácil manutenção.</p>
      </>
    ),
  },
  work: {
    display: true, // defina como false para ocultar esta seção
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Desenvolvedor Freelancer",
        timeframe: "2024 - Atualmente",
        role: "Suporte técnico, manutenção e desenvolvimento de aplicativos e sites",
        achievements: [
          <>
            Redesenhei a UI/UX da plataforma FLY, resultando em um aumento de 20% no engajamento do usuário e tempos de carregamento 30% mais rápidos.
          </>,
          <>
            Liderei a integração de ferramentas de IA nos fluxos de trabalho de design, permitindo que os designers iterassem 50% mais rápido.
          </>,
        ],
        images: [
          // opcional: deixe o array vazio se não quiser exibir imagens
          // {
          //   src: "/img/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "CHR Despachante Imobiliário",
        timeframe: "2023 - 2024",
        role: "Técnico em Informática",
        achievements: [
          <>Realizei a manutenção dos equipamentos da empresa, além de ser responsável pela atualização, configuração e instalação dos computadores da empresa.</>,
          <>Fui responsável por implementar um sistema de compartilhamento de arquivos, que transformou o fluxo de financiamento habitacional da empresa e aumentou a conclusão das vendas em 40%.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // defina como false para ocultar esta seção
    title: "Estudos",
    institutions: [
      {
        name: (<div><span>Análise e Desenvolvimento de Sistemas (conclusão em Jan 2026)</span><br/>{/*<Text onBackground={"brand-weak"} variant={"body-default-m"}>Uninter</Text>*/}</div>),
        school: <>Uninter</>,
        description: <>Estudei engenharia de software.</>,
      },
      {
        name: (<div><span>Técnico em Informática para Internet</span><br/>{/*<Text onBackground={"brand-weak"} variant={"body-default-m"}>ETEC Professor Fontes</Text>*/}</div>),
        school: <>ETEC Professor Fontes</>,
        description: <>Estudei manutenção de equipamentos e desenvolvimento web.</>,
      },
    ],
  },
  technical: {
    display: true, // defina como false para ocultar esta seção
    title: "Habilidades técnicas",
    skills: [
      {
        title: "Figma",
        description: <>Capaz de prototipar no Figma com Once UI em uma velocidade impressionante.</>,
        // opcional: deixe o array vazio se não quiser exibir imagens
        images: [
          {
            src: "/img/projects/template/img-1.png",
            alt: "Imagem do projeto",
            width: 16,
            height: 9,
          },
          {
            src: "/img/projects/battle/img-1.svg",
            alt: "Imagem do projeto",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Python",
        description: "Desenvolvi bots com Python, para anúncios no Discord com as APIs do YouTube e Twitch, moderação no Reddit e web scraping.",
        images: [
          {
            src: "https://opengraph.githubassets.com/939568c657128880d286ba1bf90d9d8496ff6822b1a389f3e97f9fb6886f4d3e/gabriersdev/bot-notificacao-video-youtube-discord",
            alt: "Imagem do projeto",
            width: 16,
            height: 9,
          },
          {
            src: "https://opengraph.githubassets.com/939568c657128880d286ba1bf90d9d8496ff6822b1a389f3e97f9fb6886f4d3e/gabriersdev/bot-notificacao-live-twitch-discord",
            alt: "Imagem do projeto",
            width: 16,
            height: 9,
          },
        ]
      },
      {
        title: "Node.js",
        description: "Construí aplicações web com Node.js + Next.js ou React + Tailwind.",
        images: [
          {
            src: "/img/projects/mobilidade/mob-1.png",
            link: "/work/mobilidade",
            alt: "Imagem do projeto",
            width: 16,
            height: 9,
          },
        ]
      },
      {
        title: "PHP",
        description: "Criei sites com PHP e prestei manutenção em sites feitos com Wordpress e Laravel.",
        images: []
      },
      {
        title: "SQL",
        description: "Construí aplicações (web ou não) e APIs com MySQL, utilizando HeidiSQL, PHPMyAdmin e Workbench.",
        images: [
          {
            src: "/img/projects/mobilidade/mob-1.png",
            link: "/work/mobilidade",
            alt: "Imagem do projeto",
            width: 16,
            height: 9,
          },
        ]
      },
      {
        title: "Scrum",
        description: "Sou certificado pela Certiproof como um profissional qualificado e conhecedor do Scrum e seus métodos.",
        images: []
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Escrevendo sobre design e tecnologia..." + ` ${home.title}`,
  description: `Leia o que ${person.name} tem feito recentemente`,
  // Crie novas postagens de blog adicionando um novo arquivo .mdx a app/blog/posts
  // Todas as postagens serão listadas na rota /blog
};

const work = {
  label: "Projetos",
  title: "Meus projetos" + ` - ${home.title}`,
  description: `Projetos de design e desenvolvimento por ${person.name}`,
  // Crie novas páginas de projeto adicionando um novo arquivo .mdx a app/blog/posts
  // Todos os projetos serão listados nas rotas /home e /work
};

const gallery = {
  label: "Galeria",
  title: "Minha galeria de fotos" + ` - ${home.title}`,
  description: `Uma coleção de fotos por ${person.name}`,
  // Imagens de https://pexels.com
  images: [
    {
      src: "/img/gallery/x.jpg",
      alt: "imagem",
      orientation: "horizontal",
    },
  ],
};

const review = {
  display: true,
  label: "",
  title: "Avaliações de Clientes",
  description: "",
  data: [
    {
      content: "\"Eu estava apreensivo por ter perdido o site, mas o Gabriel concluiu o serviço em menos de um dia e eu tive meu site totalmente recuperado com o backup e tudo mais.\n Recomendo fortemente o serviço!\"",
      author: "Willian C.",
      project: "Recuperação de site WordPress",
    },
    {
      content: "\"Trabalhar com o Gabriel foi uma boa experiência. Ele entendeu nossos requisitos e executou com habilidade o que foi solicitado.\"",
      author: "Bruno M.",
      project: "Nova identidade visual para um site de jogos",
    },
    {
      content: "\"Ele entendeu as necessidades do projeto e entregou o que foi solicitado. Eu o recomendo e trabalharia com ele novamente.\"",
      author: "Isabela H.",
      project: "Adaptação de Planilhas para WordPress",
    },
    {
      content: "\"Quero expressar minha gratidão ao Gabriel pelo incrível trabalho que ele fez no site da minha loja. Ele atendeu a todas as minhas expectativas, foi extremamente rápido, e o site ficou exatamente do jeito que eu queria - tudo perfeito! Recomendo muito o trabalho dele para quem procura qualidade e eficiência. Obrigado, Gabriel!\"",
      author: "Caroline C.",
      project: "Correção de problema no carrinho de compras",
    },
    {
      content: "\"Ele sabe o que faz e é criativo com as soluções. Com certeza trabalharei com ele novamente!\"",
      author: "Diogo G.",
      project: "Criar um plugin para busca em lote no Tiny ERP",
    },
    {
      content: "\"Um excelente profissional. Ele concluiu minha solicitação dentro do prazo.\"",
      author: "Henrique S.",
      project: "Criação de um Manual do Usuário para uma Plataforma Web",
    },
  ]
}

const CTG = {
  content: "Veja outros projetos meus",
  link: {
    href: "/pt-br/work",
    label: "clicando aqui",
  },
}

const content = {person, social, newsletter, contact, home, about, blog, work, gallery, review, CTG}
export {person, social, newsletter, contact, home, about, blog, work, gallery, review, CTG, content};
