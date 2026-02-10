const importedImages = import.meta.glob('../assets/karina-photos/*', {
  eager: true,
  as: 'url',
})

const images = Object.entries(importedImages).map(([path, url]) => ({
  path,
  url,
}))

function Surprise() {
  return (
    <section className="page page-surprise">
      <header className="page-header">
        <h2>Секретная страница‑сюрприз для тебя</h2>
      </header>
      <div className="surprise-grid">
        {images.length === 0 ? (
          <div className="surprise-empty">
            <p>
              Сейчас папка ещё пустая — как только там появятся фотографии с
              Кариной, они засияют здесь.
            </p>
          </div>
        ) : (
          images.map((image) => (
            <figure key={image.path} className="surprise-photo-card">
              <div className="surprise-photo-frame">
                <img src={image.url} alt="Мгновение с Кариной" />
                <div className="surprise-photo-glow" />
              </div>
            </figure>
          ))
        )}
      </div>
    </section>
  )
}

export default Surprise

