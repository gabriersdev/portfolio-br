import './about.css'

export default function About() {
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

  const ajustarIdade = () => {
    return calcularPeriodoTempo('2004-01-27 00:00:00', 'anos') || '20 (em 2024)';
  }

  return (
    <section className="about" id="about" data-aos="fade-up" data-aos-delay="100">
      <div className="about__container">
        <h3 className="about__title">Sobre mim</h3>
        <p className="about__paragraph">
          Tenho <span>${ajustarIdade()}</span> anos e sou apaixonado por explorar e aprender coisas novas. Desde
          pequeno, sempre fui curioso sobre as configurações do PC e adorava descobrir como as coisas funcionavam. Em
          2021, tive meu primeiro contato com o desenvolvimento ao iniciar o curso técnico em Informática para a
          Internet. Foi nesse momento que percebi minha vocação para o desenvolvimento e para a criação de ferramentas
          e aplicações para a web, e desde então, tenho me dedicado a aprimorar minhas habilidades nessa área.
        </p>
      </div>
    </section>
  )
}
