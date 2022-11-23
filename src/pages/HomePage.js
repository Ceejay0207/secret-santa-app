import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact/Contact';
import '../components/skills/Skills.css';
import '../components/content/Content.css';
import '../components/header/Header.css';
import '../components/contact/Contact.css';

function HomePage() {

    
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default HomePage;