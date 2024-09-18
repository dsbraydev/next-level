import { BudgetItemHeader, BudgetAmountItem } from "../elements";

interface Props {
  expenses: any[];
}
const ExpensesBlock = ({ expenses }: Props) => {
  const groupByType = (expenses: any[]) => {
    return expenses.reduce((groups, expense) => {
      const { type } = expense;
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(expense);
      return groups;
    }, {});
  };

  const groupedExpenses = groupByType(expenses);

  return (
    <div className="grid grid-cols-2 w-full gap-10 items-start">
      {Object.keys(groupedExpenses).map((type, index) => {
        return (
          <div key={index} className="rounded-md border-[1px] border-[#2f2d2d]">
            <BudgetItemHeader title={type} />
            {groupedExpenses[type].map((expense: any, i: number) => (
              <div key={i} className="p-3">
                <BudgetAmountItem
                  amount={expense.amount}
                  label={expense.name}
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ExpensesBlock;
