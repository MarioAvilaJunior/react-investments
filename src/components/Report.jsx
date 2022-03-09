import Item from "./Item";
const Report = ({ id, investmentId, month, year, value }) => {
  const monthName = (month) => {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Fev";
      case 3:
        return "Mar";
      case 4:
        return "Abr";
      case 5:
        return "Mai";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Ago";
      case 9:
        return "Set";
      case 10:
        return "Out";
      case 11:
        return "Nov";
      case 12:
        return "Dez";
      default:
        return "Undefined";
    }
  };

  return (
    <div className="border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer">
      <ul>
        <li>
          <Item label="Mês: ">
            {monthName(month)}/{year}
          </Item>
        </li>
        <li>
          <Item label="Valor: ">R${value.toFixed(2)}</Item>
        </li>
      </ul>
    </div>
  );
};

export default Report;
