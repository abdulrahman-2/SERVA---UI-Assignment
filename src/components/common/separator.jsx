const Separator = ({ vertical = false }) => {
  return vertical ? (
    <div className="h-9.5 w-px bg-[#F5F3EB]" />
  ) : (
    <div className="h-px w-9.5 bg-[#F5F3EB] mx-auto" />
  );
};

export default Separator;
