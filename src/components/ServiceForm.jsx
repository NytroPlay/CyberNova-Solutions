import { useState } from "react";

export default function ServiceForm({ initial, onSubmit, onCancel }) {
  const [name, setName] = useState(initial?.name || "");
  const [price, setPrice] = useState(initial?.price || 0);
  const [stock, setStock] = useState(initial?.stock || 0);
  const [description, setDescription] = useState(initial?.description || "");
  const [promo, setPromo] = useState(!!initial?.promo);

  function handle(e) {
    e.preventDefault();
    onSubmit({ id: initial?.id, name, price: Number(price), stock: Number(stock), description, promo });
  }

  return (
    <form className="form" onSubmit={handle}>
      <div className="field">
        <label className="label">Nombre</label>
        <input className="input" value={name} onChange={(e)=>setName(e.target.value)} required />
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
        <div className="field">
          <label className="label">Precio</label>
          <input className="input" type="number" value={price} onChange={(e)=>setPrice(e.target.value)} required />
        </div>
        <div className="field">
          <label className="label">Stock</label>
          <input className="input" type="number" value={stock} onChange={(e)=>setStock(e.target.value)} required />
        </div>
      </div>

      <div className="field">
        <label className="label">Descripción</label>
        <textarea className="textarea" value={description} onChange={(e)=>setDescription(e.target.value)} />
      </div>

      <div className="field">
        <label className="label">
          <input type="checkbox" checked={promo} onChange={(e)=>setPromo(e.target.checked)} /> En promoción
        </label>
      </div>

      <div className="actions">
        <button className="btn primary" type="submit">Guardar</button>
        <button type="button" className="btn ghost" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}
