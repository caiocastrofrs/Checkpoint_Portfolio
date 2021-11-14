import '../../sass/layout/projectSection.scss';
import '../../sass/abstracts/variables.module.scss';
import { data } from './Data/projects.js';
import Project from './Project/';

const Projects = () => {
    return(
        <>
            <section className="projects" id="projetos">
            <span className="projects__title">Projetos</span>
                <div className="projects__div">
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