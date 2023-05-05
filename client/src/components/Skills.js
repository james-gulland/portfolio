import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faDatabase, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faSquareJs, faReact, faHtml5, faSass, faPython, faNodeJs, faNpm, faGithub } from '@fortawesome/free-brands-svg-icons'

const skills = [
  { name: 'JavaScript', icon: faSquareJs },
  { name: 'React.js', icon: faReact },
  { name: 'HTML5', icon: faHtml5 },
  { name: 'SASS', icon: faSass },
  { name: 'Python', icon: faPython },
  { name: 'Django', icon: faBolt },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'MongoDB', icon: faDatabase },
  { name: 'Express', icon: faTruckFast },
  { name: 'PostgreSQL', icon: faDatabase },
  { name: 'npm/pip', icon: faNpm },
  { name: 'Git/Github', icon: faGithub }
]

const Skills = () => {

  return (
    <ul>
      {skills.map(skill => (
        <li key={skill.name}>
          <FontAwesomeIcon className="icon" icon={skill.icon} alt={skill.name} />
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default Skills