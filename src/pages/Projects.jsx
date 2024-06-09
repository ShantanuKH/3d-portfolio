import { Link } from 'react-router-dom';
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My 
        <span className='blue-gradient_text font-semibold drop-shadow pl-3'>
          Projects
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-2 text-slate-500'>
        <p>
          I am a creative and adaptable developer with extensive experience in building both web and mobile applications. I have successfully developed responsive and interactive websites, user-friendly mobile apps, and engaging WordPress sites. My projects range from e-commerce platforms to task management tools and personal portfolio websites. I am passionate about learning new technologies and quickly applying them to solve real-world problems. Whether working on the front end or back end, my strong problem-solving skills and eagerness to take on new challenges make me a valuable asset to any development team.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
}

export default Projects;
