import { Link } from "react-router-dom";

export default function ServiceCard({ s }) {
  const money = s.price.toLocaleString("es-CO", { style: "currency", currency: "COP" });
  return (
    <Link to={`/servicios/${s.id}`} className="card" style={{ display:"block", textDecoration:"none", color:"inherit" }}>
      <h3>{s.name}</h3>
      <div className="price">{money} COP</div>
    </Link>
  );
}
