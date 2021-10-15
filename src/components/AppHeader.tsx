import { useDispatch } from "react-redux";
import { sagaActions } from "../saga/sagaActions";
// import { getStore } from "../selectors";
import { RootState } from "../store";

export const AppHeader: React.FC = () => {
  const dispatch = useDispatch();
  // const appState = useSelector((state: RootState) => getStore(state))

  const sortTime = () => {
    // dispatch(sagaActions.sortTime());
  };

  const sortAlphabet = () => {
    dispatch(sagaActions.sortAlphabet());
  };

  return (
    <div className='header'>
      {/* <select className='sort-select'> */}
        <button onClick={(state: RootState) => console.log(state)}>Sort by time</button>
        <button onClick={sortAlphabet}>Sort by alphabetically</button>
      {/* </select> */}
    </div>
  )
};