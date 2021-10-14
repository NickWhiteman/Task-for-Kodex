import { useSelector } from "react-redux";
import { getHybrids } from "../selectors";
import { RootState } from "../store";

export const HybridComponent: React.FC = () => {
  const hybridData: string[] = useSelector((state: RootState) => getHybrids(state.appStore));

  return (
    <>
      {
        hybridData.map((hybrid, index) => (
          <dd key={index}>{hybrid}</dd>
        ))
      }
    </>
  )
};