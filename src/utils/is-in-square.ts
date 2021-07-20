import { NUMBERS, SQUARE } from "@/types";

interface Input {
  square: SQUARE;
  value: NUMBERS;
}

export function isInSquare({ square, value }: Input): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}
