import './workout.css'
import TemplateHeader from './TemplateHeader';
import HeaderImage from '../Images/LOGO.png';
import StoryImage from '../Images/LOGO.png'
import VisionImage from '../Images/LOGO.png'
import MissionImage from '../Images/LOGO.png'
const Workout = () => {
  return (
    <>
      <TemplateHeader title="" image={HeaderImage}>
          
      </TemplateHeader>
      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="" className='section-image' />
          </div>
          <div className="about__section-content">
            <h1>Cardio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam qui exercitationem, voluptatibus aliquam commodi pariatur nesciunt quae error eum, facere voluptates quos ullam temporibus aperiam dolor provident, placeat est?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt explicabo eaque, magni alias cupiditate adipisci quam a rerum in nisi, eos quaerat? Asperiores reiciendis illum ut quos magnam iusto nulla.
            </p>
            <p>
            Asperiores reiciendis illum ut quos magnam iusto nulla.
            </p>
          </div>
        </div>
      </section>
      <section className='about__vision'>
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>Cardio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam qui exercitationem, voluptatibus aliquam commodi pariatur nesciunt quae error eum, facere voluptates quos ullam temporibus aperiam dolor provident, placeat est?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt explicabo eaque, magni alias cupiditate adipisci quam a rerum in nisi, eos quaerat? Asperiores reiciendis illum ut quos magnam iusto nulla.
            </p>
           
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="" className='section-image' />
          </div>
        </div>
      </section>
      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="" className='section-image' />
          </div>
          <div className="about__section-content">
            <h1>Cardio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam qui exercitationem, voluptatibus aliquam commodi pariatur nesciunt quae error eum, facere voluptates quos ullam temporibus aperiam dolor provident, placeat est?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt explicabo eaque, magni alias cupiditate adipisci quam a rerum in nisi, eos quaerat? Asperiores reiciendis illum ut quos magnam iusto nulla.
            </p>
            
          </div>
        </div>
      </section>

    </>
  )
}

export default Workout;
