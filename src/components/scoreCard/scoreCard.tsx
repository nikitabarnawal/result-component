import './scoreCard.css'
const ScoreCard = () => {
  return (
    <div className="scoreCard">
      <section className="result-txt">Your Result</section>
      <section className="circle">
        <span className="score">
          <span className="score-num">76</span>
          <span className="total-num">of 100</span>
        </span>
      </section>
      <section className="third-bravo-section">
        <span className="grt-text">Great</span>
        <article className="desc">
          Your performance exceed 65% of the people conducting the test here!
        </article>
      </section>
    </div>
  )
}

export default ScoreCard
