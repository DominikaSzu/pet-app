type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, onChange }: Props) => {
  return (
    <label id="film_search">
      <input type="text" name="film_search" value={value} onChange={onChange} />
    </label>
  );
};
