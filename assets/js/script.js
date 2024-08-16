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
    const getUniqueElements = (array, prop, obs) => {
      let result = array.map(e =>  e[prop]).filter((value, index, self) => self.indexOf(value) === index);
      const newArray = [];

      for (let p of result) {
        const correspondence = array.filter(e => e[prop] === p)
        if (!correspondence) continue;
        else newArray.push(correspondence[0]);
      }

      if (obs === 'no-sorted') return newArray;
      else return newArray.toSorted((a, b) => a[prop].localeCompare(b[prop]));
    }

    getUniqueElements(conteudos.skills, 'name').forEach(skill => {
      const skillContainer = document.querySelector('.skills [data-target="load-content"]');
      skillContainer.innerHTML += `
        <div class="skills__box hover-scale">
          <ul>
            <li class="skills__img"><img src="${skill.img}" alt="${skill.alt}"></li>
            <li class="skills__name">${skill.name}</li>
          </ul>
        </div>
      `;
    });
    
    getUniqueElements(conteudos.hobbies, 'name').forEach(hobbie => {
      const hobbieContainer = document.querySelector('.hobbies [data-target="load-content"]');
      hobbieContainer.innerHTML += `
        <div class="hobbies__box hover-scale">
          <ul>
            <li class="hobbies__img"><img src="${hobbie.img}" alt="${hobbie.alt}"></li>
            <li class="hobbies__name">${hobbie.name}</li>
          </ul>
        </div>
      `;
    });
    
    getUniqueElements(conteudos.academic.toSorted((a, b) => new Date(a.start) < new Date(b.start)), 'name', 'no-sorted').forEach(academic => {
      const academicContainer = document.querySelector('.academic [data-target="load-content"]');
      academicContainer.innerHTML += `
        <div class="academic__courses__box">
          <ul class="academic__courses__list">
            <li class="academic__courses__item__img "><img src="./assets/img/codigo.jpg"></li>
            <li class="academic__courses__item__title"><h4>${academic.name}</h4></li>
            <li class="academic__courses__item__subtitle"><p>${new Date(academic.start).getFullYear()} - ${academic.finished ? new Date(academic.finish).getFullYear() : 'Em andamento' }</p></li>
          </ul>
        </div>
      `;
    });
    
    // Projects
    fetch('https://gist.githubusercontent.com/gabriersdev/c2136e42374bf2b78eac871b840543ad/raw/').then((response) => {
      return response.json();
    }).then((ret) => {      
      if (!Array.isArray(ret.projects)) {
        // TODO - Add. visualização em tela
        console.log('Nada encontrado');
        return;
      }
      else if (ret.projects == 0) {
        // TODO - Add. visualização em tela
        alert('Nenhum projeto encontrado');
        console.log('Nenhum projeto encontrado');
        return;
      }
      
      getUniqueElements(ret.projects.filter(e => e.visible && e.active), 'name').forEach(project => {
        const projectContainer = document.querySelector('.experience [data-target="load-content"]');
        projectContainer.innerHTML += `
          <div class="experiencie__box">
            <img class="experience__midia hover-scale" src="${project.img || 'https://via.placeholder.com/600x400.png?text=Imagem...'}" alt="Captura de tela do projeto '${project.name.trim()}'">
            <div class="experience__info">
              <h2 class="experience__title">${project.name.trim()}</h2>
              <h3 class="experience__text">${project.subtitle.trim() }</h3>
              <h3 class="experience__text">${project.description.trim() }</h3>
              <div class="experience__description">
                <span class="experience__repo"><a href="${project.link.trim()}"><button class="experiencia__botao--repo">Repositório</button></a></span>
                ${project.demo && project.demo.length > 0 && project.demo !== '#' ? '<span class="experience__demo"><a href="' + project.demo.trim() + '"><button class="experiencia__botao--demo">Ver demo</button></a></span>' : ''}
              </div>
            </div>
          </div>
        `;
      });
      
    }).catch((error) => {
      // TODO - Add. visualização em tela
      alert(`Um erro ocorreu ${error.message}`);
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