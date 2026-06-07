import { skills } from "../../data/skills";

const SkillPill = ({ selectedSkills }) => {
  let filteredSkills = skills;

  if (selectedSkills !== "all") {
    filteredSkills = skills.filter(skill => selectedSkills.includes(skill.name));
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
  );
};

export default SkillPill;
