const Item = ({ children: value = "Valor", label = "Nome:" }) => {
  return (
    <span className="text-sm">
      <strong>{label}</strong> {value}
    </span>
  );
};

export default Item;
