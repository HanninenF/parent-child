type DrawCardProps = {
  getRandomCard: () => void;
};

export const DrawCard = ({ getRandomCard }: DrawCardProps) => {
  return (
    <>
      <button onClick={getRandomCard}>Get Card</button>
    </>
  );
};
