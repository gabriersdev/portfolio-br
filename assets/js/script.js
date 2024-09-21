"use strict";

import { data as conteudos } from './data.js';

(() => {
  // Block alter props of object and add props
  Object.freeze(conteudos);

  const createAlert = (type, text) => {
    const [div, strong] = [document.createElement('div'), document.createElement('strong')];
    div.classList.value = `alert alert-${type}`;
    div.setAttribute('role', 'alert')
    strong.classList.value = 'text';
    strong.textContent = text
    div.appendChild(strong)
    return div;
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

    if (forma == 'meses') {
      diferencaAnos = Math.floor(diferencaSegundos / (1000 * 3600 * 24 * 30));
    } else if (forma == 'anos') {
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
      let result = array.map(e => e[prop]).filter((value, index, self) => self.indexOf(value) === index);
      const newArray = [];

      for (let p of result) {
        const correspondence = array.filter(e => e[prop] === p)
        if (!correspondence) continue;
        else newArray.push(correspondence[0]);
      }

      if (obs === 'no-sorted') return newArray;
      else return newArray.toSorted((a, b) => a[prop].localeCompare(b[prop]));
    }

    // Populate Skills, Hobbies and Academic data
    getUniqueElements(conteudos.skills, 'name').forEach(skill => {
      const skillContainer = document.querySelector('.skills [data-target="load-content"]');
      skillContainer.innerHTML += `
        <div class="skills__box hover-scale" data-aos="fade-right">
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
        <div class="hobbies__box hover-scale" data-aos="fade-right">
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
        <div class="academic__courses__box" data-aos="fade-up">
          <ul class="academic__courses__list">
            <li class="academic__courses__item__img"><img src="${academic.img}" alt="${academic.alt}"></li>
            <li class="academic__courses__item__title"><h4>${academic.name}</h4></li>
            <li class="academic__courses__item__subtitle"><p>${academic.school}</p></li>
            <li class="academic__courses__item__subtitle"><p>${new Date(academic.start).getFullYear()} - ${academic.finished ? new Date(academic.finish).getFullYear() : 'Em andamento'}</p></li>
          </ul>
        </div>
      `;
    });

    // Projects
    const projectContainer = document.querySelector('.experience [data-target="load-content"]');
    fetch('https://gist.githubusercontent.com/gabriersdev/c2136e42374bf2b78eac871b840543ad/raw/').then((response) => {
      return response.json();
    }).then((ret) => {
      if (!Array.isArray(ret.projects)) {
        throw new Error('A resposta da API não é válida')
      }
      else if (ret.projects == 0) {
        throw new Error('Nenhum projeto encontrado');
      }

      getUniqueElements(ret.projects.filter(e => e.visible && e.active), 'name').forEach(project => {
        projectContainer.innerHTML += `
          <div class="experiencie__box" data-aos="fade-up">
            <img class="experience__midia hover-scale" src="${project.img || 'https://via.placeholder.com/600x400.png?text=Imagem...'}" alt="Captura de tela do projeto '${project.name.trim()}'">
            <div class="experience__info">
              <h2 class="experience__title">${project.name.trim()}</h2>
              <h3 class="experience__text">${project.subtitle.trim()}</h3>
              <h3 class="experience__text">${project.description.trim()}</h3>
              <div class="experience__description">
                <span class="experience__repo"><a href="${project.link.trim()}" target="_blank"><button class="experiencia__botao--repo">Repositório</button></a></span>
                ${project.demo && project.demo.length > 0 && project.demo !== '#' ? '<span class="experience__demo"><a href="' + project.demo.trim() + '" target="_blank"><button class="experiencia__botao--demo">Ver demo</button></a></span>' : ''}
              </div>
            </div>
          </div>
        `;
      });

      // Init Lib de Scroll Animation
      AOS.init();
    }).catch((error) => {
      try {
        // Init Lib de Scroll Animation
        AOS.init();
      } catch (error) {
        console.error(error);
      } finally {
        switch (error.message) {
          case 'A resposta da API não é válida':
          case 'Nenhum projeto encontrado':
            projectContainer.parentElement.appendChild(createAlert('danger', `${error.message}!`))
            projectContainer.remove()
            break;

          case 'NetworkError when attempting to fetch resource.':
            projectContainer.parentElement.appendChild(createAlert('danger', `Sem conexão com a internet! Busque uma rede, conecte-se e recarregue a página`))
            projectContainer.remove()
            break;

          default:
            projectContainer.parentElement.appendChild(createAlert('danger', `Um erro ocorreu! Erro: ${error.message}!`))
            projectContainer.remove()
            // alert(`Um erro ocorreu! ${error.message}`);
            console.error(error);
            break;
        }
      }

      console.log(error);
    }).finally(() => {
      document.querySelectorAll('a').forEach(link => link.setAttribute('rel', 'noopener noreferrer'));
    });

    const overlay2 = document.querySelector(".overlay-2");
    overlay2.style.display = "none";

    ajustarAnoAtual();
    ajustarPeriodoProgramando();
    ajustarIdade();
    controlarModal();
  })

})();