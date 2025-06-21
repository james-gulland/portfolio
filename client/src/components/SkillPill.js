import javacript from '../assets/icons/javascript.svg'
import typescript from '../assets/icons/typescript.svg'
import html5 from '../assets/icons/html5.svg'
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import nextjs from '../assets/icons/next-js.svg'
import nodejs from '../assets/icons/nodejs.svg'
import tailwind from '../assets/icons/tailwind.svg'
import vercel from '../assets/icons/vercel.svg'
import aws from '../assets/icons/aws.svg'
import github from '../assets/icons/github.svg'
import postgresql from '../assets/icons/postgresql.svg'
import sass from '../assets/icons/sass.svg'

const skills = [
  { name: 'React.js', icon: react },
  { name: 'Next.js', icon: nextjs },
  { name: 'JavaScript', icon: javacript },
  { name: 'TypeScript', icon: typescript },
  { name: 'Tailwind', icon: tailwind },
  { name: 'HTML5', icon: html5 },
  { name: 'CSS/SASS', icon: sass },
  { name: 'Node.js', icon: nodejs },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'Python', icon: python },
  { name: 'AWS', icon: aws },
  { name: 'Vercel', icon: vercel },
  { name: 'GitHub', icon: github }
]

const SkillPill = ({ selectedSkills }) => {
  let filteredSkills = skills

  if (selectedSkills !== 'all') {
    filteredSkills = skills.filter(skill =>
      selectedSkills.includes(skill.name)
    )
  }

  return (
    <div className="pills-container">
      <ul>
        {filteredSkills.map((skill, index) => (
          <li key={index} className="pill">
            <img className="logo" src={`${skill.icon}`} alt={skill.name} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillPill