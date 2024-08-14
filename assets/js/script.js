(() => {
  
  const conteudos = {
    "skills": [
      {
        "name": "HTML 5",
        "link" : "#",
        "img": "assets/img/svgs/skills/html.svg",
        "alt": "Logo do HTML 5"
      },
      {
        "name": "Javascript",
        "link" : "#",
        "img": "assets/img/svgs/skills/js.svg",
        "alt": "Logo do Javascript"
      },
      {
        "name": "PHP",
        "link" : "#",
        "img": "assets/img/svgs/skills/php.svg",
        "alt": "Logo do PHP"
      },
      {
        "name": "Java",
        "link" : "#",
        "img": "assets/img/svgs/skills/java.svg",
        "alt": "Logo do Java"
      },
      {
        "name": "Node",
        "link" : "#",
        "img": "assets/img/svgs/skills/node.svg",
        "alt": "Logo do Node"
      },
      {
        "name": "React",
        "link" : "#",
        "img": "assets/img/svgs/skills/react.svg",
        "alt": "Logo do React"
      },
      {
        "name": "CSS",
        "link" : "#",
        "img": "assets/img/svgs/skills/css.svg",
        "alt": "Logo do CSS"
      },
      {
        "name": "Figma",
        "link" : "#",
        "img": "assets/img/svgs/skills/figma.svg",
        "alt": "Logo do Figma"
      },
      {
        "name": "CSS",
        "link" : "#",
        "img": "assets/img/svgs/skills/git.svg",
        "alt": "Logo do Git"
      },
    ],
    "hobbies": [
      {
        "name": "Ouvir música",
        "img": "assets/img/svgs/hobbies/musica.svg",
        "alt": "Ícone de música"
      },
      {
        "name": "Assistir séries",
        "img": "assets/img/svgs/hobbies/series.svg",
        "alt": "Ícone ilustrativo de uma série"
      },
      {
        "name": "Andar de bike",
        "img": "assets/img/svgs/hobbies/bicicleta.svg",
        "alt": "Ícone de uma bicileta"
      },
      {
        "name": "Programar",
        "img": "assets/img/svgs/hobbies/programar.svg",
        "alt": "Sinais de menor que (<) e maior que (>)"
      },
      {
        "name": "Assistir filmes",
        "img": "assets/img/svgs/hobbies/cinema.svg",
        "alt": "Ícone de uma tela"
      },
    ],
    "academic": [
      {
        "name": "Técnico em Informática para Internet",
        "school": "Escola Estadual Técnico Industrial Professor Fontes",
        "start": "2021-07-01",
        "finished": true,
        "finish": "2022-12-31",
        "alt": "Imagem ilustrativa de uma tela de computador",
        "img": "#"
      },
      {
        "name": "Análise e Desenvolvimento de Sistemas",
        "school": "Uninter",
        "start": "2023-07-01",
        "finished": false,
        "finish": "2026-01-01",
        "alt": "",
        "img": "#"
      },
    ],
    // Import from gist
    "projects": [
      {
        "name": "",
        "subtitle": "",
        "img": "",
        "link": "",
        "demo": "",
        "description": "",
      },
    ]
  }

  const ajustarAnoAtual = () => {
    const areas = document.querySelectorAll("[data-update='year']");
    const dataAtual = new Date();
    areas.forEach(area => {
      area.textContent = `${dataAtual.getFullYear()}`;
    })
  }

  const calcularPeriodoTempo = (inicio, forma) => {
    let dataInicio = new Date(inicio);
    let dataAtual = new Date();
    
    forma = forma.toLowerCase();
    
    let diferencaSegundos = Math.floor(dataAtual.getTime() - dataInicio.getTime());
    let diferencaAnos = null;
    
    if(forma == 'meses'){
      diferencaAnos = Math.floor(diferencaSegundos / (1000 * 3600 * 24 * 30));
    }else if(forma == 'anos'){
      diferencaAnos = Math.floor(diferencaSegundos / (1000 * 3600 * 24 * 365.3));
    }
    
    return diferencaAnos;
  }
  
  const ajustarPeriodoProgramando = () => {
    const forma = 'meses';
    const diferencaAnos = calcularPeriodoTempo('2022-01-01 00:00:00', forma);
    
    const periodoProgramando = document.querySelectorAll('[data-periodo-programando');
    periodoProgramando.forEach(periodo => {
      periodo.textContent = `${diferencaAnos} ${forma}`;
    })
  }
  
  const ajustarIdade = () => {
    const diferencaAnos = calcularPeriodoTempo('2004-01-27 00:00:00', 'anos') || '20 (em 2024)'; /* Scape: 20 (em 2024) */
    
    const areas = document.querySelectorAll("[data-update='age']");
    areas.forEach(area => {
      area.textContent = diferencaAnos;
    })
  }
  
  const controlarModal = () => {
    const botaoModal = document.querySelectorAll('[data-direito-autorais]');
    botaoModal.forEach(botao => {
      botao.addEventListener('click', (evento) => {
        const modal = document.querySelector('[data-modal]');
        modal.showModal();
        
        const btnFecha = modal.querySelector('[data-modal-fecha]');
        btnFecha.addEventListener('click', () => {
          modal.close();
        })
      })
    });
  }
  
  const botaoRecarregar = document.querySelectorAll('[data-recarrega-pagina]');
  botaoRecarregar.forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload();
    })
  })
    
  window.addEventListener("load", function () {
    // Render
    conteudos.skills.forEach(skill => {
      const skillContainer = document.querySelector(".skills");
      skillContainer.innerHTML += `
        <a href="${skill.link}" class="skill">
          <img src="${skill.img}" alt="${skill.alt}">
          <p>${skill.name}</p>
        </a>
      `;
    });
    
    conteudos.hobbies.forEach(hobbie => {
      const hobbieContainer = document.querySelector(".hobbies");
      hobbieContainer.innerHTML += `
        <div class="hobbie">
          <img src="${hobbie.img}" alt="${hobbie.alt}">
          <p>${hobbie.name}</p>
        </div>
      `;
    });

    conteudos.academic.forEach(academic => {
      const academicContainer = document.querySelector(".academic");
      academicContainer.innerHTML += `
        <div class="academic-item">
          <h3>${academic.name}</h3>
          <p>${academic.school}</p>
          <p>Início: ${academic.start}</p>
          <p>Conclusão: ${academic.finished ? academic.finish : 'Em andamento'}</p>
        </div>
      `;
    });

    // Projects
    fetch('https://gist.github.com/gabriersdev/c2136e42374bf2b78eac871b840543ad').then((response) => {
      return response.json();
    }).then((ret) => {
      // console.log(ret);

      if (!Array.isArray(ret)) {
        console.log('Nada encontrado');
        return;
      }
      else if (ret.length == 0) {
        // console.log('Nenhum projeto encontrado');
        return;
      }

      ret.forEach(project => {
        const projectContainer = document.querySelector(".projects");
        projectContainer.innerHTML += `
          <div class="project">
            <h3>${project.name}</h3>
            <p>${project.subtitle}</p>
            <img src="${project.img}" alt="${project.name}">
            <a href="${project.link}" target="_blank">Repositório</a>
            <a href="${project.demo}" target="_blank">Demonstração</a>
            <p>${project.description}</p>
          </div>
        `;
      });

    }).catch((error) => {
      console.error(error);
    });

    const overlay2 = document.querySelector(".overlay-2");
    overlay2.style.display = "none";

    ajustarAnoAtual();
    ajustarPeriodoProgramando();
    ajustarIdade();
    controlarModal();
  })

})();