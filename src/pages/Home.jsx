function Home() {
  return (
    <section className="page page-home">
      <div className="hero">
        <div className="hero-text">
          <p className="hero-badge">Только для Карины</p>
          <h2 className="hero-title">
            Любовь моя, с Днём всех влюблённых!
          </h2>
          <p className="hero-subtitle">
            Этот маленький волшебный уголок создан, чтобы напомнить тебе,
            как сильно ты любима, как ярко ты освещаешь каждый день.
          </p>
          <p className="hero-subtitle">
            Пусть каждая анимация, каждое сердечко и каждый кадр на этом сайте
            напоминают тебе, что твоя любовь — самое тёплое чудо на свете.
          </p>
          <button className="hero-button">
            Для тебя с любовью
          </button>
        </div>

        <div className="hero-card">
          <div className="hero-orbit">
            <div className="hero-heart hero-heart-main">♥</div>
            <div className="hero-heart hero-heart-1">♥</div>
            <div className="hero-heart hero-heart-2">♥</div>
            <div className="hero-heart hero-heart-3">♥</div>
          </div>
          <p className="hero-note">
            Здесь каждая деталь шепчет: «Карина, ты особенная».
          </p>
        </div>
      </div>

      <div className="grid">
        <div className="grid-card">
          <h3>Мир, где Ты — центр вселенной</h3>
          <p>
            На этом сайте День всех влюблённых длится бесконечно, а имя Карина
            сияет в каждом блоке, каждой анимации и каждом тёплом слове.
          </p>
        </div>

        <div className="grid-card">
          <h3>Анимации, созданные для тебя</h3>
          <p>
            Мягкие огни, летящие сердечки и плавные переходы — всё,
            чтобы Карина чувствовала, как бережно к ней относятся.
          </p>
        </div>

        <div className="grid-card">
          <h3>Страницы, полные чувств к тебе</h3>
          <p>
            Прогуляйся по разделам сайта: каждая страница бережно хранит эмоции,
            воспоминания и слова, посвящённые только Карине.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home

