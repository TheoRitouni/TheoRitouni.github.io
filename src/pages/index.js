

import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import ParticlesComponent from '../components/Particles/Particles'

const Home = () => {
  return (
    
    <div>
       <div>
      <ParticlesComponent/> 
      </div> 
    <Layout>
       <Section grid> 
        <Hero />
       </Section> 
      <Projects />
      <Technologies />
    </Layout>
  </div>

  );
};

export default Home;
