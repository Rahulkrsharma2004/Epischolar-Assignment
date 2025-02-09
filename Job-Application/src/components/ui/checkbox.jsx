export function Checkbox({ id, ...props }) {
    return (
      <input type="checkbox" id={id} {...props} className="form-checkbox" />
    );
  }
  