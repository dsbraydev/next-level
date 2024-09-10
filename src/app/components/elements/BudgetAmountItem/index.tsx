interface IBudgetAmountItem {
  amount: number;
  label: string;
}
const BudgetAmountItem = ({ amount, label }: IBudgetAmountItem) => {
  return (
    <div className="flex justify-between">
      <p>{label}:</p>
      <p>R {amount}</p>
    </div>
  );
};
export default BudgetAmountItem;
