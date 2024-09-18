interface IHeader {
  header: string;
}

const PageHeader = ({ header }: IHeader) => {
  return (
    <h2 className="text-2xl font-bold uppercase text-[#d36f30] mb-5">
      {header}
    </h2>
  );
};

export default PageHeader;
