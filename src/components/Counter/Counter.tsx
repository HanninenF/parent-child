type CounterProps = {
  counter: number;
};

export const Counter = ({ counter }: CounterProps) => {
  return (
    <>
      <h1> {counter} </h1>
    </>
  );
};
