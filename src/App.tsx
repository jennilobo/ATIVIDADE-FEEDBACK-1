import CreateCards from './Components/CreateCards';
import { BoardStyle } from './Style'
import { Card } from './Style'
import './App.css'


export function App() {
  const people = [
    {
      name: 'Jennifer Lobo',
      photo: 'https://st3.depositphotos.com/1007566/18523/v/1600/depositphotos_185237668-stock-illustration-software-language-programmer-avatar.jpg',
      skills: ['Skill 1', 'Skill 2', 'Skill 3'],
      githubLink: 'https://github.com/jennilobo',
      linkedinLink: 'www.linkedin.com/in/jennifer-lobo-983bb91b2',
    },
    {
      name: 'Victor Italo',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHlODFnJ3ipylQUaC4fCwbzf3HpNnCcsBa6E3kklgziIe87O3fZXFvC30pSzfw_VmmPk&usqp=CAU',
      skills: ['Comunicativo', 'Bom Humor', 'Determinado'],
      githubLink: 'https://github.com/Victoritalo',
      linkedinLink: 'https://www.linkedin.com/in/victoritalo/',
    },
    {
      name: 'Victor Fernandes',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHlODFnJ3ipylQUaC4fCwbzf3HpNnCcsBa6E3kklgziIe87O3fZXFvC30pSzfw_VmmPk&usqp=CAU',
      skills: ['Criativo', 'Comprometido', 'Pontual'],
      githubLink: 'URL_DO_GITHUB_VICTORFERNANDES',
      linkedinLink: 'URL_DO_GITHUB_VICTORFERNANDES',
    },
    {
      name: 'Roque Junior',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHlODFnJ3ipylQUaC4fCwbzf3HpNnCcsBa6E3kklgziIe87O3fZXFvC30pSzfw_VmmPk&usqp=CAU',
      skills: ['Skill 1', 'Skill 2', 'Skill 3'],
      githubLink: 'https://github.com/roque-junior',
      linkedinLink: 'https://www.linkedin.com/in/roque-junior-da-silva-moraes-b71226273/',
    },
  ];

  return (
    <>
      <BoardStyle>
        {people.map((person, index) => (
          <Card key={index}>
            <CreateCards {...person}></CreateCards>
          </Card>
        ))}
      </BoardStyle>
    </>
  );
}
