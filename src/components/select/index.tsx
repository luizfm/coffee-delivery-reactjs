import { useCallback, useState } from "react";
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
      <button onClick={onMinusClick}>–</button>
      {counter}
      <button onClick={onPlusClick}>+</button>
    </SelectContainer>
  );
}
