import ScoreCard from '../scoreCard/scoreCard'
import ActionCard from '../actionCard/actionCard'
import './resultContainer.css'

const ResultContainer = () => {
  return (
    <div className="container">
      <ScoreCard />
      <ActionCard />
    </div>
  )
}

export default ResultContainer
