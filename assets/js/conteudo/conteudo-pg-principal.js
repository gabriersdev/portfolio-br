const conteudo = `
<nav class="menu flutuante" id="menu-flutuante">
  <a href="./index.html" class="menu__identificacao">
    <div src="" alt="" class="menu__imagem"></div>
    <div class="menu__identificacao__titulos">
      <h2 class="menu__identificacao__titulos-titulo">Portfólio</h2>
      <h2 class="menu__identificacao__titulos-titulo-secundario">Gabriel Ribeiro</h2>
    </div>
  </a>
  <ul class="menu__lista">
    <li class="menu__item-lista"><a href="https://www.behance.net/devgabrielribeiro" target="_blank"><i class="bi bi-behance"></i><span>Behance</span></a></li>
    <li class="menu__item-lista"><a href="https://github.com/gabrieszin/" target="_blank"><i class="bi bi-github"></i><span>GitHub</span></a></li>
    <li class="menu__item-lista"><a href="#contato"><i class="bi bi-person-lines-fill"></i><span>Contato</span></a></li>
  </ul>
</nav>

<header id="apresentacao">
  <section class="cabecalho">
    <nav class="menu">
    <a href="./index.html" class="menu__identificacao">
      <div src="" alt="" class="menu__imagem"></div>
      <div class="menu__identificacao__titulos">
        <h2 class="menu__identificacao__titulos-titulo">Portfólio</h2>
        <h2 class="menu__identificacao__titulos-titulo-secundario">Gabriel Ribeiro</h2>
      </div>
    </a>
    <ul class="menu__lista">
      <li class="menu__item-lista"><a href="https://www.behance.net/devgabrielribeiro" target="_blank"><i class="bi bi-behance"></i><span>Behance</span></a></li>
      <li class="menu__item-lista"><a href="https://github.com/gabrieszin/" target="_blank"><i class="bi bi-github"></i><span>GitHub</span></a></li>
      <li class="menu__item-lista"><a href="#contato"><i class="bi bi-person-lines-fill"></i><span>Contato</span></a></li>
    </ul>
    </nav>

    <section class="cabecalho__principal">
    <section class="cabecalho__principal__apresentacao">
      <h1 class="cabecalho__principal__apresentacao__titulo">Olá, meu nome é Gabriel e construo projetos web</h1>
      <p class="cabecalho__principal__apresentacao__descricao">
        Opa, tudo bom? Este é o meu porfólio. Aqui você verá um pouco do meu trabalho como desenvolvedor. Você pode navegar através dos meus projetos, ver eles funcionando, saber quais linguagens eu tenho conhecimento, a minha formação e outros detalhes :D
      </p>
    </section>

    <section class="cabecalho__principal__menu">
      <h2 class="cabecalho__principal__menu__titulo" style="text-transform: initial;">Neste Portfólio</h2>
      <ul class="cabecalho__principal__menu__lista">
        <li class="cabecalho__principal__menu__item-lista ativo">
          <a href="#apresentacao" tabindex="0" data-bs-toggle="popover" data-bs-custom-class="popover-lista" data-bs-trigger="hover focus" data-bs-title="Apresentação (Seção)" data-bs-content="Nesta seção você visualizará um breve resumo sobre o meu portfólio e também um preview das linguagens que desenvolvo">Apresentação</a>
        </li>
        <!-- <li class="cabecalho__principal__menu__item-lista">
          <a href="#sobre" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-title="Sobre Mim (Seção)" data-bs-content="Nesta seção você visualizará um resumo sobre mim, meus objetivos e as formações que tenho">Sobre mim</a>
        </li> -->
        <li class="cabecalho__principal__menu__item-lista">
          <a href="#linguagens" tabindex="0" data-bs-toggle="popover" data-bs-custom-class="popover-lista" data-bs-trigger="hover focus" data-bs-title="Linguagens (Seção)" data-bs-content="Nesta seção você vê as linguagens que eu desenvolvo, o período que eu as uso e os cursos que realizei com elas">Linguagens</a>
        </li>
        <li class="cabecalho__principal__menu__item-lista">
          <a href="#projetos" tabindex="0" data-bs-toggle="popover" data-bs-custom-class="popover-lista" data-bs-trigger="hover focus" data-bs-title="Projetos (Seção)" data-bs-content="Nesta seção você vê os principais projetos que eu realizei e pode vê-los funcionando">Projetos</a>
        </li>
        <li class="cabecalho__principal__menu__item-lista">
          <a href="#contato" tabindex="0" data-bs-toggle="popover" data-bs-custom-class="popover-lista" data-bs-trigger="hover focus" data-bs-title="Contato (Seção)" data-bs-content="Nesta seção você terá as informações necessárias para me contactar">Contato</a>
        </li>
      </ul>
    </section>
    </section>

    <section class="cabecalho__cards">
      <!-- Cards -->
      <div class="card-linguagem-transparente">
        <div class="card__header">
          <div class="card__header__principal">
            <h2 class="card__header__principal__titulo">PHP</h2>
            <div class="card__header__principal__avaliacao">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <p class="card__header__versao">
            Versão 7.4+
          </p>
        </div>
        
        <div class="card__corpo">
          <div class="marcador coloracao-back-end">
            <i class="bi bi-database marcador__icone"></i>
            <p class="marcador__descricao">Back-end</p>
          </div><br>
          
          <div class="marcador coloracao-programacao">
            <i class="bi bi-braces marcador__icone"></i>
            <p class="marcador__descricao">Programação</p>
          </div><br>
          
          <div class="marcador coloracao-desenvolvimento-web">
            <i class="bi bi-window-stack marcador__icone"></i>
            <p class="marcador__descricao">Desenv. WEB</p>
          </div>
        </div>
        
        <div class="card__rodape">
          <a data-acao-card-linguagem="php" class="card__rodape__link">Ver projetos</a>
          <div class="contador-projetos" data-toggle="tooltip" data-placement="bottom" title="Quantidade de Projetos nesta Linguagem">
            <p class="contador-projetos__quantidade" data-contador-projeto="php"></p>
            <i class="bi bi-collection contador-projetos__icone"></i>
          </div>
        </div>
      </div>
      
      <!-- <div class="card-linguagem-transparente">
        <div class="card__header">
          <div class="card__header__principal">
            <h2 class="card__header__principal__titulo">Java</h2>
            <div class="card__header__principal__avaliacao">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <p class="card__header__versao">
            Versão 9+
          </p>
        </div>
        
        <div class="card__corpo">
          <div class="marcador coloracao-back-end">
            <i class="bi bi-database marcador__icone"></i>
            <p class="marcador__descricao">Back-end</p>
          </div><br>
          
          <div class="marcador coloracao-programacao">
            <i class="bi bi-braces marcador__icone"></i>
            <p class="marcador__descricao">Programação</p>
          </div><br>
        </div>
        
        <div class="card__rodape">
          <a data-acao-card-linguagem="java" class="card__rodape__link">Ver projetos</a>
          <div class="contador-projetos" data-toggle="tooltip" data-placement="bottom" title="Quantidade de Projetos nesta Linguagem">
            <p class="contador-projetos__quantidade" data-contador-projeto="java">0</p>
            <i class="bi bi-collection contador-projetos__icone"></i>
          </div>
        </div>
      </div> -->
      
      <div class="card-linguagem-transparente">
        <div class="card__header">
          <div class="card__header__principal">
            <h2 class="card__header__principal__titulo">Python</h2>
            <div class="card__header__principal__avaliacao">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <p class="card__header__versao">
            Versão 3+
          </p>
        </div>
        
        <div class="card__corpo">
          <div class="marcador coloracao-back-end">
            <i class="bi bi-database marcador__icone"></i>
            <p class="marcador__descricao">Back-end</p>
          </div><br>
          
          <div class="marcador coloracao-programacao">
            <i class="bi bi-braces marcador__icone"></i>
            <p class="marcador__descricao">Programação</p>
          </div><br>
        </div>
        
        <div class="card__rodape">
          <a data-acao-card-linguagem="python" class="card__rodape__link">Ver projetos</a>
          <div class="contador-projetos" data-toggle="tooltip" data-placement="bottom" title="Quantidade de Projetos nesta Linguagem">
            <p class="contador-projetos__quantidade" data-contador-projeto="python"></p>
            <i class="bi bi-collection contador-projetos__icone"></i>
          </div>
        </div>
      </div>

      <div class="card-linguagem-transparente">
        <div class="card__header">
          <div class="card__header__principal">
            <h2 class="card__header__principal__titulo">MySQL</h2>
            <div class="card__header__principal__avaliacao">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <p class="card__header__versao">
            Versão 8.0+
          </p>
        </div>
        
        <div class="card__corpo">
          <div class="marcador coloracao-back-end">
            <i class="bi bi-database marcador__icone"></i>
            <p class="marcador__descricao">Back-end</p>
          </div><br>
          
          <div class="marcador coloracao-desenvolvimento-web">
            <i class="bi bi-window-stack marcador__icone"></i>
            <p class="marcador__descricao">Desenv. WEB</p>
          </div>
        </div>
        
        <div class="card__rodape">
          <a data-acao-card-linguagem="mysql" class="card__rodape__link">Ver projetos</a>
          <div class="contador-projetos" data-toggle="tooltip" data-placement="bottom" title="Quantidade de Projetos nesta Linguagem">
            <p class="contador-projetos__quantidade" data-contador-projeto="mysql"></p>
            <i class="bi bi-collection contador-projetos__icone"></i>
          </div>
        </div>
      </div>
    </section>
  </header>
</section>

<main class="conteudo container-elemento">      
  <section class="linguagens container-principal" id="linguagens">
    <h2 class="linguagens__titulo">Linguagens e Skills</h2>
    
    <div class="selecao">
      <button class="selecao-linguagens__botao coloracao-todos ativo" data-acao-linguagens="todas">Todas</button>
      <button class="selecao-linguagens__botao coloracao-front-end" data-acao-linguagens="front_end">Front-end</button>
      <button class="selecao-linguagens__botao coloracao-back-end" data-acao-linguagens="back_end">Back-end</button>
      <button class="selecao-linguagens__botao coloracao-programacao" data-acao-linguagens="programacao">Programação</button>
      <button class="selecao-linguagens__botao coloracao-desenvolvimento-web" data-acao-linguagens="desenvolvimento_web">Desenv. WEB</button>
      <button class="selecao-linguagens__botao coloracao-ux-ui" data-acao-linguagens="ux_ui">UX e UI</button>
    </div>
    
    <div class="linguagens__corpo" data-conteudo="linguagens">
      <ul class="linguagens__lista">
        <li class="linguagem" div-conteudo-linguagens="card-linguagem" data-conteudo-linguagem-desenvolvimento_web data-conteudo-linguagem-back_end data-conteudo-linguagem-programacao>
          <div class="linguagem__cabecalho">
            <i class="bi bi-filetype-php linguagem__cabecalho__icone"></i>
            <h3 class="linguagem__cabecalho__titulo">PHP</h3>
          </div>
          
          <div class="linguagem__corpo">
            <div class="marcador coloracao-desenvolvimento-web">
              <i class="bi bi-window-stack marcador__icone"></i>
              <p class="marcador__descricao">Desenv. WEB</p>
            </div>
            <div class="marcador coloracao-back-end">
              <i class="bi bi-database marcador__icone"></i>
              <p class="marcador__descricao">Back-end</p>
            </div>
            <div class="marcador coloracao-programacao">
              <i class="bi bi-braces marcador__icone"></i>
              <p class="marcador__descricao">Programação</p>
            </div>
            <p class="linguagem__corpo__descricao">
              Numa explicação de poucas palavras, PHP é uma linguagem de programação utilizada por programadores e desenvolvedores para construir sites dinâmicos, extensões de integração de aplicações e agilizar no desenvolvimento de um sistema. (Fonte: Hostinger)
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="php"></span> projetos desenvolvidos</p>
              </li>
              <li class="caracteristicas-sem-marcador__item">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Estudando 📚</p>
              </li>
            </ul>
          </div>
        </li>

        <li class="linguagem" div-conteudo-linguagens="card-linguagem" data-conteudo-linguagem-desenvolvimento_web data-conteudo-linguagem-back_end data-conteudo-linguagem-programacao>
          <div class="linguagem__cabecalho">
            <i class="bi bi-filetype-py linguagem__cabecalho__icone"></i>
            <h3 class="linguagem__cabecalho__titulo">Python</h3>
          </div>
          
          <div class="linguagem__corpo">
            <div class="marcador coloracao-back-end">
              <i class="bi bi-database marcador__icone"></i>
              <p class="marcador__descricao">Back-end</p>
            </div>
            <div class="marcador coloracao-programacao">
              <i class="bi bi-braces marcador__icone"></i>
              <p class="marcador__descricao">Programação</p>
            </div>
            <p class="linguagem__corpo__descricao">
              #
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="python"></span> projetos desenvolvidos</p>
              </li>
              <li class="caracteristicas-sem-marcador__item">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Estudando 📚</p>
              </li>
            </ul>
          </div>
        </li>
        
        <li class="linguagem" div-conteudo-linguagens="card-linguagem" data-conteudo-linguagem-back_end data-conteudo-linguagem-programacao>
          <div class="linguagem__cabecalho">
            <i class="bi bi-filetype-java linguagem__cabecalho__icone"></i>
            <h3 class="linguagem__cabecalho__titulo">Java</h3>
          </div>
          
          <div class="linguagem__corpo">
            <div class="marcador coloracao-back-end">
              <i class="bi bi-database marcador__icone"></i>
              <p class="marcador__descricao">Back-end</p>
            </div>
            <div class="marcador coloracao-programacao">
              <i class="bi bi-braces marcador__icone"></i>
              <p class="marcador__descricao">Programação</p>
            </div>
            <p class="linguagem__corpo__descricao">
              Java é um tipo de linguagem de programação criada e comercializada pela Sun Microsystems desde 1995. É definida como uma linguagem orientada a objetos. Sua intenção é permitir que os desenvolvedores escrevam o programa apenas uma vez e o executem por meio de qualquer dispositivo. (Fonte: Rock Content)
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="java"></span> projetos desenvolvidos</p>
              </li>
              <!-- <li class="caracteristicas-sem-marcador__item">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Estudando 📚</p>
              </li> -->
              <li class="caracteristicas-sem-marcador__item">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Praticando 👨‍💻</p>
              </li>
            </ul>
          </div>
        </li>
        
        <li class="linguagem" div-conteudo-linguagens="card-linguagem" data-conteudo-linguagem-back_end data-conteudo-linguagem-desenvolvimento_web>
          <div class="linguagem__cabecalho">
            <i class="bi bi-filetype-sql linguagem__cabecalho__icone"></i>
            <h3 class="linguagem__cabecalho__titulo">MySQL</h3>
          </div>
          
          <div class="linguagem__corpo">
            <div class="marcador coloracao-back-end">
              <i class="bi bi-database marcador__icone"></i>
              <p class="marcador__descricao">Back-end</p>
            </div>
            <div class="marcador coloracao-desenvolvimento-web">
              <i class="bi bi-window-stack marcador__icone"></i>
              <p class="marcador__descricao">Desenv. WEB</p>
            </div>
            <p class="linguagem__corpo__descricao">
              O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo. (Fonte: Wikipedia)
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="mysql"></span> projetos desenvolvidos</p>
              </li>
              <li class="caracteristicas-sem-marcador__item">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Estudando 📚</p>
              </li>
            </ul>
          </div>
        </li>
        
        <li class="linguagem" div-conteudo-linguagens="card-linguagem" data-conteudo-linguagem-front_end data-conteudo-linguagem-desenvolvimento_web data-conteudo-linguagem-programacao>
          <div class="linguagem__cabecalho">
            <i class="bi bi-filetype-js linguagem__cabecalho__icone"></i>
            <h3 class="linguagem__cabecalho__titulo">JavaScript</h3>
          </div>
          
          <div class="linguagem__corpo">
            <div class="marcador coloracao-front-end">
              <i class="bi bi-bar-chart-steps marcador__icone"></i>
              <p class="marcador__descricao">Front-end</p>
            </div>
            <div class="marcador coloracao-desenvolvimento-web">
              <i class="bi bi-window-stack marcador__icone"></i>
              <p class="marcador__descricao">Desenv. WEB</p>
            </div>
            <div class="marcador coloracao-programacao">
              <i class="bi bi-braces marcador__icone"></i>
              <p class="marcador__descricao">Programação</p>
            </div>
            <p class="linguagem__corpo__descricao">
              JavaScript é uma linguagem leve, interpretada e baseada em objetos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser. (Fonte: MDN - Adaptado)
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="js"></span> projetos desenvolvidos</p>
              </li>
              <li class="caracteristicas-sem-marcador__item">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Experiente</p>
              </li>
            </ul>
          </div>
        </li>
        
        <li class="linguagem" div-conteudo-linguagens="card-linguagem" data-conteudo-linguagem-front_end data-conteudo-linguagem-desenvolvimento_web data-conteudo-linguagem-ux_ui>
          <div class="linguagem__cabecalho">
            <i class="bi bi-filetype-css linguagem__cabecalho__icone"></i>
            <h3 class="linguagem__cabecalho__titulo">CSS</h3>
          </div>
          
          <div class="linguagem__corpo">
            <div class="marcador coloracao-front-end">
              <i class="bi bi-bar-chart-steps marcador__icone"></i>
              <p class="marcador__descricao">Front-end</p>
            </div>
            <div class="marcador coloracao-desenvolvimento-web">
              <i class="bi bi-window-stack marcador__icone"></i>
              <p class="marcador__descricao">Desenv. WEB</p>
            </div>
            <div class="marcador coloracao-ux-ui">
              <i class="bi bi-brush marcador__icone"></i>
              <p class="marcador__descricao">UX e UI</p>
            </div>
            <p class="linguagem__corpo__descricao">
              O CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens como SVG). Basicamente, CSS descreve como elementos são mostrados na tela e no papel, principalmente. (Fonte: MDN - Adaptado)
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="css"></span> projetos desenvolvidos</p>
              </li>
              <li class="caracteristicas-sem-marcador__item">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Experiente</p>
              </li>
            </ul>
          </div>
        </li>

        <li class="linguagem" div-conteudo-linguagens="card-linguagem" data-conteudo-linguagem-front_end data-conteudo-linguagem-desenvolvimento_web data-conteudo-linguagem-ux_ui>
          <div class="linguagem__cabecalho">
            <i class="bi bi-filetype-jsx linguagem__cabecalho__icone"></i>
            <h3 class="linguagem__cabecalho__titulo">React</h3>
          </div>
          
          <div class="linguagem__corpo">
            <div class="marcador coloracao-desenvolvimento-web">
              <i class="bi bi-window-stack marcador__icone"></i>
              <p class="marcador__descricao">Desenv. WEB</p>
            </div>
            <div class="marcador coloracao-ux-ui">
              <i class="bi bi-brush marcador__icone"></i>
              <p class="marcador__descricao">UX e UI</p>
            </div>
            <p class="linguagem__corpo__descricao">
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="react"></span> projetos desenvolvidos</p>
              </li>
              <li class="caracteristicas-sem-marcador__item">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Estudando 📚</p>
              </li>
            </ul>
          </div>
        </li>
        
        <li class="linguagem" div-conteudo-linguagens="card-linguagem" data-conteudo-linguagem-desenvolvimento_web>
          <div class="linguagem__cabecalho">
            <i class="bi bi-filetype-html linguagem__cabecalho__icone"></i>
            <h3 class="linguagem__cabecalho__titulo">HTML</h3>
          </div>
          
          <div class="linguagem__corpo">
            <div class="marcador coloracao-desenvolvimento-web">
              <i class="bi bi-window-stack marcador__icone"></i>
              <p class="marcador__descricao">Desenv. WEB</p>
            </div>
            <p class="linguagem__corpo__descricao">
              É a Linguagem de Marcação de HiperTexto é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência e apresentação (CSS) ou a funcionalidade e/ou comportamento (JavaScript) de uma página. (Fonte: MDN - Adaptado)
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="html"></span> projetos desenvolvidos</p>
              </li>
              <li class="caracteristicas-sem-marcador__item">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Experiente</p>
              </li>
            </ul>
          </div>
        </li>

        <li class="linguagem" div-conteudo-linguagens="card-linguagem" data-conteudo-linguagem-desenvolvimento_web>
          <div class="linguagem__cabecalho">
            <i class="bi bi-filetype-md linguagem__cabecalho__icone"></i>
            <h3 class="linguagem__cabecalho__titulo">Markdown</h3>
          </div>
          
          <div class="linguagem__corpo">
            <p class="linguagem__corpo__descricao">
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="MD"></span> projetos desenvolvidos</p>
              </li>
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Usando no dia a dia 📆</p>
              </li>
            </ul>
          </div>
        </li>

        <li class="linguagem" div-conteudo-linguagens="card-linguagem" data-conteudo-linguagem-ux_ui>
          <div class="linguagem__cabecalho">
            <img src="./assets/imagens/icons/figma-logo.png" class="linguagem__cabecalho__icone" alt="">
            <h3 class="linguagem__cabecalho__titulo">Figma</h3>
          </div>
          
          <div class="linguagem__corpo">
            <div class="marcador coloracao-ux-ui">
              <i class="bi bi-brush marcador__icone"></i>
              <p class="marcador__descricao">UX e UI</p>
            </div>
            <p class="linguagem__corpo__descricao">
              #
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="figma"></span> projetos desenvolvidos</p>
              </li>
            </ul>
          </div>
        </li>

        <li class="linguagem" div-conteudo-linguagens="card-linguagem">
          <div class="linguagem__cabecalho">
            <i class="bi bi-github linguagem__cabecalho__icone"></i>
            <h3 class="linguagem__cabecalho__titulo">Git e GitHub</h3>
          </div>
          
          <div class="linguagem__corpo">
            <!-- Tag Linguagem -->
            <p class="linguagem__corpo__descricao">
              É a Linguagem de Marcação de HiperTexto é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência e apresentação (CSS) ou a funcionalidade e/ou comportamento (JavaScript) de uma página. (Fonte: MDN - Adaptado)
            </p>
            
            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao"><span data-contador-projeto="git"></span> projetos desenvolvidos</p><br>
              </li>
            </ul>

            <ul class="caracteristicas-sem-marcador">
              <li class="caracteristicas-sem-marcador__item destaque">
                <i class="bi bi-check-square-fill caracteristicas-sem-marcador__item__icone"></i>
                <p class="caracteristicas-sem-marcador__item__descricao">Usando no dia a dia 📆</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>

    </div>
  </section>

  <section class="sobre container-principal" id="sobre">
    <h2 class="sobre__titulo">Sobre</h2>
    
    <div class="sobre_grupo-descricao">
      <p class="sobre__descricao">
        Eu sou o Gabriel Ribeiro, tenho <span data-idade-atual></span> anos e programo há <span data-periodo-programando></span>. Desde que tive meu primeiro contato com um computador sempre quis aprender e aprender mais sobre seu funcionamento. Enquanto eu ainda era pequeno, passava horas e horas fuçando o que já vinha baixado no computador - foi basicamente assim que eu aprendi a mexer nos programas do Office e a configurar o PC do jeitinho que eu queria.
      </p>
      
      <p class="sobre__descricao">
        Quando eu entrei no Ensino Médio, eu queria muito fazer um curso técnico na área, porém por problemas individuais acabou me impossibilitando de realizar um em 2021. Nesse momento que eu conheci um novo mundo: a programação. O ano virou e eu entrei de cabeça nisso: a criação de protótipos e layouts, de scripts mesmo que mais simples, a conexão de um formulário com um banco de dados, dentre muitos outros conhecimentos passaram a fazer parte do meu cotidiano. Confesso que no início foi bem difícil, por quê eu cometia muitos erros e os conceitos pareciam muito complicados de entender. Mas com os cursos e muita (ênfase no muita) prática eu estou me aperfeiçoando a cada dia mais.
      </p>
    </div>
    
    <ul class="sobre__lista">
      <li class="sobre__lista__item">
        <div class="sobre__lista__item__cabecalho">
          <i class="bi bi-journal-bookmark sobre__lista__item__cabecalho__icone"></i>
          <h3 class="sobre__lista__item__cabecalho__titulo">Formações</h3>
        </div>
        <div class="sobre__lista__item__corpo">
          <p class="sobre__lista__item__corpo__descricao">
            As minhas formações: <br> 
            (da formação mais recente para a mais antiga):
          </p>
          
          <ul class="caracteristicas-formacao">
            <li class="caracteristicas-formacao__item">
              <p class="caracteristicas-formacao__item__titulo">Análise e Desenvolvimento de Sistemas</p>
              <p class="caracteristicas-formacao__item__descricao">
                Uninter <br>
                2023 - atual
              </p>
            </li>

            <li class="caracteristicas-formacao__item finished" data-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-finished" title="Concluído">
              <p class="caracteristicas-formacao__item__titulo">Programa Oracle ONE<i class="bi bi-bookmark-fill"></i></p>
              <p class="caracteristicas-formacao__item__descricao">
                Alura <br>
                2022 - 2023
              </p>
            </li>

            <li class="caracteristicas-formacao__item finished" data-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-finished" title="Concluído">
              <p class="caracteristicas-formacao__item__titulo">Técnico em Informática para a Internet<i class="bi bi-bookmark-fill"></i></p>
              <p class="caracteristicas-formacao__item__descricao">
                E.E. Técnico Industrial Prof. Fontes <br>
                2021 - 2022
              </p>
            </li>
          </ul>
          
        </div>
      </li>
      
      <li class="sobre__lista__item">
        <div class="sobre__lista__item__cabecalho">
          <i class="bi bi-bullseye sobre__lista__item__cabecalho__icone"></i>
          <h3 class="sobre__lista__item__cabecalho__titulo">Objetivos</h3>
        </div>
        <div class="sobre__lista__item__corpo">
          <p class="sobre__lista__item__corpo__descricao">
            Meus objetivos e aspirações profissionais <br> 
            (do objetivo mais rápido ao mais demorado de se alcançar):
          </p>
          <ul class="caracteristicas">
            <div class="caracteristicas__itens">
              <li class="caracteristicas__item finished" data-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-finished" title="Concluído">
                <i class="caracteristicas__item__icone bi bi-check2"></i>
                <p class="caracteristicas__item__descricao">Aperfeiçoar meus conhecimentos</p>
              </li>
              <li class="caracteristicas__item finished" data-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-finished" title="Concluído">
                <i class="caracteristicas__item__icone bi bi-check2"></i>
                <p class="caracteristicas__item__descricao">Aprender a trabalhar com frameworks para JS</p>
              </li>
              <li class="caracteristicas__item studying" data-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-studying" title="Estudando">
                <i class="caracteristicas__item__icone bi bi-battery-half"></i>
                <p class="caracteristicas__item__descricao">Faculdade em ADS</p>
              </li>
              <li class="caracteristicas__item" data-toggle="tooltip" data-bs-placement="right" title="">
                <i class="caracteristicas__item__icone bi bi-arrow-right-short"></i>
                <p class="caracteristicas__item__descricao">Aprender Java</p>
              </li>
            </div>
          </ul>
        </div>
      </li>

      <li class="sobre__lista__item">
        <div class="sobre__lista__item__cabecalho">
          <i class="bi bi-check2-circle sobre__lista__item__cabecalho__icone"></i>
          <h3 class="sobre__lista__item__cabecalho__titulo">Certificações</h3>
        </div>
        <div class="sobre__lista__item__corpo">
          <p class="sobre__lista__item__corpo__descricao">
            Certificações em tecnologias, linguagens <br>
            e metodologias que possuo: 
          </p>
          <ul class="caracteristicas">
            <div class="caracteristicas__itens" style="display: flex; flex-direction: column; gap: 0.5rem">
              <!-- <li class="caracteristicas__item finished" data-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-finished" title="Concluído">
                <i class="caracteristicas__item__icone bi bi-bookmark-fill"></i>
                <p class="caracteristicas__item__descricao">Aperfeiçoar meus conhecimentos</p>
              </li> -->
              <li class="caracteristicas-formacao__item finished" data-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-finished" title="">
                <p class="caracteristicas-formacao__item__titulo">User Experience<i class="bi bi-bookmark-fill"></i></p>
                <p class="caracteristicas-formacao__item__descricao">
                  FIAP<br>
                  2022
                </p>
              </li>
              <li class="caracteristicas-formacao__item finished" data-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-finished" title="">
                <p class="caracteristicas-formacao__item__titulo">Design Gráfico<i class="bi bi-bookmark-fill"></i></p>
                <p class="caracteristicas-formacao__item__descricao">
                  FIAP<br>
                  2022
                </p>
              </li>
              <li class="caracteristicas-formacao__item finished" data-toggle="tooltip" data-bs-placement="right" data-bs-custom-class="custom-tooltip-finished" title="">
                <p class="caracteristicas-formacao__item__titulo">Design Thinking<i class="bi bi-bookmark-fill"></i></p>
                <p class="caracteristicas-formacao__item__descricao">
                  FIAP<br>
                  2022
                </p>
              </li>
            </div>
          </ul>
        </div>
      </li>
    </ul>
  </section>
  
  <section class="projetos container-principal" id="projetos">
    <h2 class="projetos__titulo">Projetos</h2>

    <div class="projetos projetos-destaque" id="projetos-destaque">
    </div>

    <div class="selecao">
      <button class="selecao__botao-projeto ativo" data-acao-projeto="todos">Todos</button>
      <button class="selecao__botao-projeto" data-acao-projeto="php">PHP</button>
      <button class="selecao__botao-projeto" data-acao-projeto="python">Python</button>
      <button class="selecao__botao-projeto" data-acao-projeto="java">Java</button>
      <button class="selecao__botao-projeto" data-acao-projeto="mysql">MySQL</button>
      <button class="selecao__botao-projeto" data-acao-projeto="js">JavaScript</button>
      <button class="selecao__botao-projeto" data-acao-projeto="css">CSS</button>
    </div>
    
    <form class="formulario-pesquisa-projeto" data-form-pesquisa-projeto>
      <label for="input-busca-projeto" class="formulario-pesquisa-projeto__label">Busque por um projeto específico</label>
      <div class="mt-2" style="display: flex; align-items: flex-start; justify-content: flex-start">
        <div class="input-group">
          <input type="text" list="listagem-projetos" id="input-busca-projeto" name="input-busca-projeto" class="input-group-text formulario-pesquisa-projeto__input" maxlength="30" placeholder="Pesquise um projeto" data-selecao-projeto required style="margin: none !important; text-align: left;">
          <button type="reset" class="btn btn-outline-secondary"><i class="bi bi-x-lg"></i></button>
          <button class="formulario-pesquisa-projeto__botao" data-recarregar-projetos data-toggle="tooltip" data-placement="bottom" title="Recarregar projetos"><i class="bi bi-arrow-clockwise"></i></button>
        </div>
      </div>
      <datalist id="listagem-projetos" name="listagem-projetos" data-lista-projetos>
      </datalist>
    </form>
    
    <div class="projetos__nenhum-projeto" data-conteudo="nenhum-projeto">
      Nenhum projeto foi encontrado
    </div>
    
    <div class="projetos__card" data-conteudo="projetos">
    </div>
  </section>
  
  <div class="chamado chamado-github container-principal">
    <div>
      <i class="bi bi-github chamado__icone"></i>
      <h2 class="chamado__titulo">Conheça <br> meu GitHub</h2>
    </div>
    <a href="https://github.com/gabrieszin/" class="chamado__link">GitHub do Gabriel</a>
  </div>
  
  <section class="contato container-principal" id="contato">
    <h2 class="contato__titulo">Contato </h2>
    
    <!-- <p class="contato__descricao">
      Se você quer falar comigo seja para esclarecer uma dúvida, solicitar um orçamento, dar uma sugestão ou fazer um elogio, entra em contato comigo. Você pode fazer isso através do meu e-mail, do Linkedin, do Telegram ou preenchendo o formulário. Independente do meio que você falar comigo eu te respondo o mais rápido que eu puder.
    </p> -->
    
    <div class="contatos">
      <div class="card-contato" id="email">
        <div class="card-contato__cabecalho">
          <i class="bi bi-at card-contato__icone"></i>
          <h3 class="card-contato__titulo">E-mail</h3>
        </div>
        <p class="card-contato__descricao">Fale comigo através do e-mail, enviando uma mensagem eletrônica. Pra fazer isso é fácil, é só clicar no botão abaixo:</p>
        <a href="mailto:devgabrielribeiro@gmail.com" class="card-contato__url">devgabrielribeiro@gmail.com</a>
        <div>
          <a href="mailto:devgabrielribeiro@gmail.com?subject=Contato do [Seu Nome]" class="card-contato__link">Enviar e-mail</a>
        </div>
      </div>
      
      <div class="card-contato" id="linkedin">
        <div class="card-contato__cabecalho">
          <i class="bi bi-linkedin card-contato__icone"></i>
          <h3 class="card-contato__titulo">Linkedin</h3>
        </div>
        <p class="card-contato__descricao">Confira meu perfil no Linkedin e minhas atribuições profissionais. Pra fazer isso é fácil, é só clicar no botão abaixo:</p>
        <a href="https://www.linkedin.com/in/gabrielribeirodev" target="_blank" class="card-contato__url">linkedin.com/in/gabrielribeirodev</a>
        <div>
          <a href="https://www.linkedin.com/in/gabrielribeirodev" target="_blank" class="card-contato__link">Visitar perfil</a>
        </div>
      </div>
      
      <div class="card-contato" id="telegram">
        <div class="card-contato__cabecalho">
          <i class="bi bi-telegram card-contato__icone"></i>
          <h3 class="card-contato__titulo">Telegram</h3>
        </div>
        <p class="card-contato__descricao">Fale comigo através do Telegram (por lá eu respondo mais rápido). Pra fazer isso é fácil, é só clicar no link ou no botão abaixo:</p>
        <a href="https://t.me/devgabrielribeiro" target="_blank" class="card-contato__url">t.me/devgabrielribeiro</a>
        <div>
          <a href="https://t.me/devgabrielribeiro" target="_blank" class="card-contato__link">Conversar pelo Telegram</a>
        </div>
      </div>
      
      <div class="card-contato-mensagem" id="mensagem">
        <h3 class="card-contato-mensagem__titulo">Mensagem</h3>
        <p class="card-contato-mensagem__descricao">Me envie uma mensagem que logo mais eu te respondo por e-mail</p>
        <div>
          <a href="#formulario" class="card-contato__link">Enviar Mensagem</a>
        </div>
      </div>
    </div>
    
    <!-- <iframe id="formulario" src="https://gabriel-ribeiro.000webhostapp.com" class="formulario-iframe"></iframe> -->
    
  </section>
</main>

<div class="modal fade" id="modal-feedback-formulario" tabindex="-1" aria-labelledby="modal-feedback-formulario-label" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content modal-estilo">
      <div class="modal-header">
        <h5 class="modal-title" id=""></h5>
        <button data-modal-fecha><i class="bi bi-x-lg"></i></button>
      </div>
      <div class="modal-body feedback-formulario__conteudo">
        <div class="feedback-formulario__conteudo__imagem" data-feedback="imagem"></div>
        <div>
          <h3 class="feedback-formulario__conteudo__descricao" data-feedback="titulo">
            
          </h3><br>
          <h3 class="feedback-formulario__conteudo__descricao" data-feedback="descricao">
            
          </h3>
        </div>
      </div>
    </div>
  </div>
</div>

<a href="#apresentacao" class="botao-subir"><i class="bi bi-arrow-up-short"></i></a>
`

export {
  conteudo
}