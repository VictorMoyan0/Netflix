// Recommendations.jsx
const recommendations = [
  {
    title: "ÉLITE",
    img: "https://i.imgur.com/elite.jpg",
  },
  {
    title: "EL IRLANDÉS",
    img: "https://i.imgur.com/irishman.jpg",
  },
  {
    title: "CHICAS DEL CABLE",
    img: "https://i.imgur.com/chicas.jpg",
  },
  {
    title: "THE WITCHER",
    img: "https://i.imgur.com/witcher.jpg",
  },
  {
    title: "Klaus",
    img: "https://i.imgur.com/klaus.jpg",
  },
  // ...agrega más si quieres
];

function Recommendations() {
  return (
    <section className="recommendations">
      <h2>Recomendaciones para ti</h2>
      <div className="recommendations-row">
        {recommendations.map((rec, idx) => (
          <div className="recommendation-card" key={idx}>
            <img src={rec.img} alt={rec.title} />
            {/* <span>{rec.title}</span> Si quieres mostrar el título */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommendations;