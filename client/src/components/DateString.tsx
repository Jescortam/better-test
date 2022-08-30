interface props {
  children: Date;
}

const DateString = ({ children }: props) => {
  return <>{children.toDateString()}</>;
};

export default DateString;
