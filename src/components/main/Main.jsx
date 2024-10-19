import Skills from '../skills/Skills'
import Hobbies from '../hobbies/Hobbies'
import Academic from '../academic/Academic'
import Experience from '../experience/Experience'
import Services from '../services/Services'

import data from '../../data.js';

export default function Main() {
  return (
    <main className="all">
      <Skills data={data.skills} />
      <Hobbies data={data.hobbies} />
      <Academic data={data.academic} />
      <Experience />
      <Services data={data.services} />
    </main>
  )
}
