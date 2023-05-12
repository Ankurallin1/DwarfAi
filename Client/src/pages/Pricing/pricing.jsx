import './pricingStyle.css'
import Card from '../../UI/card'
import {plans} from '../../Data'
import {AiFillCheckCircle} from 'react-icons/ai'
const pricing = () => {
  return (
    <>
      
      <section className='plans'>
      <article className='plan_header'>
      <h1 className='plan_heading'>Planing</h1>
      <h1 className='plan_aim'>The Right Place For Your Fitness Goals</h1>
      <h1 className='plan_slogan'>Work Towards The Best Version of You</h1>
      </article>
        <div className="container plans__container">
          {
            plans.map(({id,name,desc,price,features})=>{
              return <Card key={id} className='plan'>
              <h3><div className='planType'>{name}</div></h3>
              <small>{desc}</small>
              <h1>&#36;{`${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map(({feature,available},index)=>{
                  return <p key={index} className={!available ? 'disabled':''}>
                  <AiFillCheckCircle color='#1f2'/>{feature}

                  </p>
                })
              }
              <button className='btn lg'>Choose plan</button>

              </Card>
            })
          }
        </div>
      </section>
   

    </>
  )
}

export default pricing
