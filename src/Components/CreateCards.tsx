import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;

  a {
    text-decoration: none;
    color: #2b385b; 
    transition: color 0.3s;

    &:hover {
      color: #333; 
    }

    svg {
      font-size: 30px; 
    }
  }
`;

interface Personprops {
  name: string;
  photo: string;
  skills: string[];
  githubLink: string;
  linkedinLink: string;
}

export default function CreateCards(props: Personprops) {
  return (
    <>
      <h2> {props.name}</h2>
      <img src={props.photo} alt="" className='profile' />
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <IconContainer>
        <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </IconContainer>
    </>
  );
}
