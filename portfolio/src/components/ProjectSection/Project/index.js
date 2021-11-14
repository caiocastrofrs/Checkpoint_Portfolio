import '../../../sass/layout/project.scss';

import repoIcon from '../../img/icons/repo.svg';
import pageIcon from '../../img/icons/page.svg';

const Project = ({title,src, page, repo}) => {
    return(
        <>
        <div className="projects__div__project">
            <img src={src} alt="print of the project"  className="projects__div__project__img"/>
            <div className="projects__div__project__info">
            <h4 className="projects__div__project__info__title">{title}</h4>
            <a href={page} className="projects__div__project__info__link">
                <img src={pageIcon} alt="page icon" className="projects__div__project__info__link__icon"/>
            </a>
            <a href={repo} className="projects__div__project__info__link">
                <img src={repoIcon} alt="repo icon" className="projects__div__project__info__link__icon"/>
            </a>
            </div>   
        </div>
        </>
    );
}

export default Project;