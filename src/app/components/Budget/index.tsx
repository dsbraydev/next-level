import ExpensesBlock from "./ExpenseBlock";
import IncomeBlock from "./IncomeBlock";
import { PageHeader } from "@/app/components/elements";

interface Props {
  data: any;
}

const Budget = ({ data }: Props) => {
  const { income, expenses } = data;

  return (
    <div>
      <PageHeader header="Budget" />
      <div className="flex gap-10 items-start">
        <IncomeBlock income={income} />
        <ExpensesBlock expenses={expenses} />
      </div>
    </div>
  );
};

export default Budget;
