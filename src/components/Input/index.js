export default function Input({ label, type, id, onChange }) {
  return (
    <div class="mb-3">
      <label for={id} class="form-label">
        {label}
      </label>
      <input
        type={type}
        class="form-control"
        id={id}
        onChange={onChange}
      />
    </div>
  );
}
