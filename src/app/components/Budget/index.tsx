import ExpensesBlock from "./ExpenseBlock";
import IncomeBlock from "./IncomeBlock";
import { PageHeader } from "@/app/components/elements";

import { INCOME, EXPENSES } from "./incomeData";

const Budget = () => {
  return (
    <div>
      <PageHeader header="Budget" />
      <div className="flex gap-10 items-start">
        <IncomeBlock income={INCOME} />
        <div className="grid grid-cols-2 w-full gap-10 items-start">
          {EXPENSES.map((group) => (
            <ExpensesBlock key={group.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
