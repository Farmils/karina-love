const feelings = [
  'Нежность к Карине',
  'Восхищение Кариной',
  'Тепло от улыбки Карины',
  'Счастье рядом с Кариной',
  'Мечты о будущем с Кариной',
  'Спокойствие в голосе Карины',
]

function Gallery() {
  return (
    <section className="page page-gallery">
      <header className="page-header">
        <h2>Галерея чувств для тебя</h2>
        <p>
          Вместо обычных фотографий здесь собраны эмоции, которые
          рождаешь ты — каждая вспышка света и каждое сердце
          — это отдельное чувство.
        </p>
      </header>

      <div className="feelings-grid">
        {feelings.map((item) => (
          <div key={item} className="feeling-card">
            <div className="feeling-glow" />
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="gallery-ribbon">
        <span>Карина</span>
        <span>любимая</span>
        <span>неповторимая</span>
        <span>дорогая</span>
        <span>самая родная</span>
        <span>Карина</span>
      </div>
    </section>
  )
}

export default Gallery

