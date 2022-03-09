import { allInvestments } from "../data/Investiments";
import { allReports } from "../data/Reports";
import Header from "../components/Header";
import Main from "../components/Main";
import Investments from "../components/Investiments";
import Investment from "../components/Investment";
const ReactInvestmentsPage = () => {
  return (
    <div>
      <Header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            React Investments
          </h1>
        </div>
      </Header>

      <Main>
        <div className="container mx-auto p-4">
          Investimentos
          <Investments>
            {allInvestments.map((investment) => {
              return (
                <Investment
                  id={investment.id}
                  description={investment.description}
                  reports={allReports}
                ></Investment>
              );
            })}
          </Investments>
        </div>
      </Main>
    </div>
  );
};

export default ReactInvestmentsPage;
