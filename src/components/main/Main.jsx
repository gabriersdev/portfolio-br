import Skills from '../skills/Skills'
import Academic from '../academic/Academic'
import Experience from '../experience/Experience'
import Services from '../services/Services'

import data from '../../old/data.js';

export default function Main() {
  return (
    <main className="all">
      <Skills data={data.skills} />
      <Academic data={data.academic} />
      <Experience />
      <Services data={data.services} />
    </main>
  )
}
