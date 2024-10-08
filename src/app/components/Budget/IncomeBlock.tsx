import { BudgetItemHeader, BudgetAmountItem } from "../elements";

interface IIncome {
  income: number;
}

const IncomeBlock = ({ income }: IIncome) => {
  return (
    <div className="w-[33%] border-[#2f2d2d] rounded-md border-2 overflow-hidden">
      <BudgetItemHeader title="Overall" />
      <div className="flex gap-8 flex-col p-3">
        <div className="flex flex-col gap-2">
          <BudgetAmountItem label="Income" amount={income} />
          <BudgetAmountItem label="Expences" amount={0} />
        </div>
        <BudgetAmountItem label="Total" amount={0} />
      </div>
    </div>
  );
};

export default IncomeBlock;
