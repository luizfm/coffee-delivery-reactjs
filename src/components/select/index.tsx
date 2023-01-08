import { SelectContainer } from "./styles";

interface SelectProps {
  counter?: number;
  onPlusClick?: () => void;
  onMinusClick?: () => void;
}

export function Select({
  counter = 0,
  onPlusClick,
  onMinusClick,
}: SelectProps) {
  return (
    <SelectContainer>
      <button
        onClick={onMinusClick}
        type="button"
        aria-label="Diminuir quantidade do item"
      >
        –
      </button>
      {counter}
      <button
        onClick={onPlusClick}
        type="button"
        aria-label="Aumentar quantidade do item"
      >
        +
      </button>
    </SelectContainer>
  );
}
