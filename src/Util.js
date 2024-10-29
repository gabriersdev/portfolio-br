export default class Util {
  static ajustarPeriodoProgramando = () => {
    const forma = 'meses';
    // const diferencaAnos = calcularPeriodoTempo('2022-01-01 00:00:00', forma);
    const diferencaAnos = null;

    const periodoProgramando = document.querySelectorAll('[data-periodo-programando');
    periodoProgramando.forEach(periodo => {
      periodo.textContent = `${diferencaAnos} ${forma}`;
    })
  }

  static getUniqueElements = (array, prop, obs) => {
    try {
      if (!array || !Array.isArray(array)) return;
      if (!prop) prop = Object.keys(array[0])[0];

      let result = array.map(e => e[prop]).filter((value, index, self) => self.indexOf(value) === index);
      const newArray = [];

      for (let p of result) {
        const correspondence = array.filter(e => e[prop] === p)
        if (!correspondence) continue;
        else newArray.push(correspondence[0]);
      }

      if (obs === 'no-sorted') return newArray;
      else return newArray.toSorted((a, b) => a[prop].localeCompare(b[prop]));
    } catch (error) {
      console.error(error);
      return [];
    }
  }

}
