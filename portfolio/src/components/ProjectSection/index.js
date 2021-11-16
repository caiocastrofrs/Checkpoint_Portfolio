import '../../sass/layout/projectSection.scss';
import '../../sass/abstracts/variables.module.scss';
import { data } from './Data/projects.js';
import Project from './Project/';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1000});
      }, []);
    return(
        <>
            <section className="projects" id="projects">
            <span className="projects__title">Projetos</span>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="projects__div">
                    {data.map(({title, src, page, repo}) => {
                        return(
                            <Project title={title} src={src} repo={repo} page={page}/>
                        )
                    })}
                </div>
            </section>
        </>
    );
}


export default Projects