import { HybridProps } from "./types";

export const HybridComponent: React.FC<HybridProps> = ({
  hybridData
}) => {
  return (
    <>
      {
        hybridData.map((hybrid, index) => (
          <li key={index}>{hybrid}</li>
        ))
      }
    </>
  )
};