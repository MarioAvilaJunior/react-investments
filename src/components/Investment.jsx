import Report from "./Report";
const Investment = ({ id, description, reports = [] }) => {
  const filteredReports = reports
    .sort((a, b) => a.month - b.month)
    .filter(({ investmentId }) => investmentId === id);

  const calculateTotalProfit = (filteredReports) => {
    const totalProfit = (
      filteredReports[filteredReports.length - 1].value -
      filteredReports[0].value
    ).toFixed(2);
    return totalProfit + " " + (totalProfit / 100).toFixed(2) + "%";
  };

  const calculateDifference = (filteredReports) => {
    const differenceArray = ["0%"];
    for (let i = 1; i < filteredReports.length; i++) {
      let currentElement = filteredReports[i].value;
      let previousElement = filteredReports[i - 1].value;
      differenceArray.push(
        ((currentElement - previousElement) / previousElement).toFixed(2) + "%"
      );
    }
    return differenceArray;
  };

  const differenceArray = calculateDifference(filteredReports);

  return (
    <div
      className={`border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer`}
    >
      {description}
      <br />
      Rendimento Total: R${calculateTotalProfit(filteredReports)}
      <br />
      <ul>
        <li className="items-center">
          {filteredReports.map((report, index) => {
            return (
              <Report
                key={report.id}
                month={report.month}
                year={report.year}
                value={report.value}
              ></Report>
            );
          })}
        </li>
      </ul>
      <ul>
        {differenceArray.map((value) => {
          return (
            <li className={value >= 0 ? "bg-green-400" : "bg-red-600"}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Investment;
