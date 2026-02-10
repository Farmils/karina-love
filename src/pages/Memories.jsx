const memories = [
  'Тот момент, когда ты улыбнулась так, что время будто остановилось.',
  'Как ты смеялась над чем-то мелким, а смех запомнился надолго.',
  'Прогулка, после которой в голове остались только мысли о тебе.',
  'Вечер, когда ты просто была рядом — и этого оказалось достаточно.',
]

function Memories() {
  return (
    <section className="page page-memories">
      <header className="page-header">
        <h2>Наши воспоминания</h2>
        <p>
          Небольшие мгновения, в которых сердце запомнило тебя особенно ярко.
          Эти моменты живут здесь и мягко переливаются в анимациях.
        </p>
      </header>

      <ul className="memories-timeline">
        {memories.map((memory, index) => (
          <li key={memory} className="memory-item">
            <span className="memory-dot" />
            <div className="memory-content">
              <span className="memory-index">
                0{index + 1}
              </span>
              <p>{memory}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="memories-bottom">
        <p>
          С каждым новым днём появляется ещё один повод сказать:
          «Котик, ты невероятная».
        </p>
      </div>
    </section>
  )
}

export default Memories

