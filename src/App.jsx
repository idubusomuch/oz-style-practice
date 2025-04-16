// import './App.scss';
import { contents } from './assets/data/data';
import Content from './components/Content';
import Header from './components/Header';
import { styled } from 'styled-components';
import { FlexMixin } from './components/Style';

const Section = styled.section`
  ${FlexMixin({
    justify: 'center',
    align: 'center',
    wrap: 'wrap',
    gap: '20px',
  })}
  padding : 20px;
`;

function App() {
  return (
    <main>
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </main>
  );
}

export default App;
