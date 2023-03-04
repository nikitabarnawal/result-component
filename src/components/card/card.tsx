import './card.css'

interface ChildProps {
  category: string
  score: number
  icon: string
}

const Card: React.FC<ChildProps> = ({ category, score, icon }: ChildProps) => {
  return (
    <div className="card">
      <section className="icon">
        <img src={icon} alt={category} />
      </section>
      <section className="name">{category}</section>
      <section className="result">{`${score} / 100`}</section>
    </div>
  )
}

export default Card
