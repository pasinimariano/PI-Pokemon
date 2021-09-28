const FormGroup = ({
  id,
  type,
  name,
  className,
  placeholder,
  value,
  onChange,
  onBlur
}) => {
  return (
    <div>
      <div>
        <input
          id={id}
          type={type}
          name={name}
          className={className}
          placeholder={`${placeholder}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  )
}

export default FormGroup
