// Banner.jsx
function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h4 className="banner-subtitle">N SERIE</h4>
        <h1 className="banner-title">INCONTROLABLES</h1>
        <div className="banner-buttons">
          <button className="banner-btn play">▶ Reproducir</button>
          <button className="banner-btn info">ℹ Más información</button>
        </div>
        <p className="banner-description">
          Ocho atracadores toman rehenes en la Fábrica Nacional de Moneda y Timbre española. Desde el encierro, su líder manipula a la policía para llevar a cabo un ambicioso plan.
        </p>
      </div>
    </section>
  );
}

export default Banner;