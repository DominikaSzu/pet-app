type Props = {
    value: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({value, onInputChange}: Props) => {
    return <label id="film_search">
    <input type="text" name="film_search" value={value} onChange={onInputChange}/>
  </label>
}