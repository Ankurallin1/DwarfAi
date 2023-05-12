import {Link} from 'react-router-dom'
import './SloganStyle.css'
const Slogan=()=>{
    return(
        <header className="main__header">
    <div className="conatainer main__header-container">
      <div className="vision main__header-left">
        <h1>Get <span className='gradient'>fit</span> with <span className='gradient'>AI</span></h1>
        <h2>Introducing GymGenie: tailored workout routines for <span className='gradient'>you</span> </h2>
        <p>✨<b> Just Released </b>✨</p>
        <p className='meal'><b>GymGenie MealPlan 🥗 </b></p>
        <p>
        <b>Supercharge your personalized workout with AI-powered meal plans tailored to your fitness goal</b> 
        </p>
        <p style={{color:"green"}}><b>MacroTracker</b> ✏️ </p>
        <p><b>Effortlessly enter your food and snacks and get an instant analysis of calories, protein, carbohydrates, and fats</b> </p>
        
        <Link to='/pricing' className='btn lg'>Get started</Link>
      </div>
      <div className="main__header-right">
        <div className="main__header-image">
        <h1 >🧞‍♂️</h1>
        </div>
      </div>
    </div>
  
    </header>
    )
}
export default Slogan;