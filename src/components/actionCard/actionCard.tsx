import { resultData } from '../../utils/data'
import Card from '../card/card'
import './actionCard.css'

const ActionCard = () => {
  return (
    <div className="actionCard">
      <section className="summary-txt">Summary</section>
      <section className="action">
        {resultData.map((data) => (
          <Card key={data.category} {...data} />
        ))}
      </section>
      <button type="button" className="btn-continue">
        Continue
      </button>
    </div>
  )
}

export default ActionCard
