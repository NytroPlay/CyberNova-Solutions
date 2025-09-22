import ServiceCard from "./ServiceCard";

export default function ServiceGrid({ items }) {
  return (
    <div className="grid">
      {items.map((s) => <ServiceCard key={s.id} s={s} />)}
    </div>
  );
}
