export default function Input({ label, type, id, onChange }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        onChange={onChange}
        required
      />
    </div>
  );
}
