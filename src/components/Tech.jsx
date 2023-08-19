import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech, index) => (
        <div key={`tech-${index}`} className='w-28 h-28'>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}
export default SectionWrapper(Tech, '');