import { NumberProps } from "./types";

export const NumberComponent: React.FC<NumberProps> = ({
  numberData
}) => {
  return (
    <>
      {
        numberData.map((num, index) => (
          <li key={index}>{ num }</li>
        ))
      }
    </>
  )
};