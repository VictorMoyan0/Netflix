// Recommendations.jsx
const recommendations = [
  {
    title: "ÉLITE",
    img: "https://occ-0-1701-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaTXSoHzJvFHhjCTOItv6QwpniecvLz1dCpoMIOo-FDsmxVLqKpG3GmosQIQfmwiudoewrO2Wr8uNpgDnWoWeAWAk87j82XxCe7-1_vaGNvpcYKLt4uubdgq10RB_Dq6K-zK.webp?r=fb1",
  },
  {
    title: "EL IRLANDÉS",
    img: "https://occ-0-1701-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZV5_xggSMWI-J3Ei7MmKGtF6KYcp9EC2wUYHxQ8G-f6db3-5RYAsurSCBtOZFlZULAubbkn4rYd2C_mxcQ8KcqsxxVnvESB9vrwErC1VKVzbSINyrPFJ1iKVSLfbnfV8Nwj.webp?r=272",
  },
  {
    title: "CHICAS DEL CABLE",
    img: "https://occ-0-1701-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQV1zHMJvEsUJ6kOdLDyniBx2aoUM-2tECI6LCjdOQPjaj6g10ae97_DvruC9Aq485B3o0O81d_x8v_2n3okvuxo8YnHGMzXoFk74ieh_4InYXJtcuraOHf1UP8ICKY5v0_i.webp?r=603",
  },
  {
    title: "TAXI DRIVER",
    img: "https://occ-0-1701-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcruX3rfx5ovikpNHMVQ4bki09QSS6n3BLft063KmQMmnYK1jM5umofQCqJZPJ5fayBmNK7sgXkvCpxi6bcHCoRJBFkX9MpcJMc.webp?r=73f",
  },
  {
    title: "BREAKING BAD",
    img: "https://occ-0-1701-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABafEkwgV-ddaqb-IzfVJPCI7Kc4kSddq7NjUsnrOePu5t6IicZvd_lkxEjYiQkQ2sIpsVBC7Gk653tPkWAy9X9ef9dg3q7LDLpg.webp?r=c30",
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