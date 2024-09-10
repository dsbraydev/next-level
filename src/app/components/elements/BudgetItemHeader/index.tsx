interface IHeader {
  title: string;
}

const BudgetItemHeader = ({ title }: IHeader) => {
  return <div className="bg-[#0fd3cf] p-2 border-b-2 w-full">{title}</div>;
};

export default BudgetItemHeader;
