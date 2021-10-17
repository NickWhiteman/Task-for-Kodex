import { useDispatch, useSelector } from "react-redux";
import { AppAction } from "../reducer";
import { getIsSortAlphabet, getIsSortTime } from "../selectors";
import { RootState } from "../store";

export const AppHeader: React.FC = () => {
  const dispatch = useDispatch();

  const isSortTime = useSelector((state: RootState) =>
    getIsSortTime(state.appStore));
  
  const isSortAlphabet = useSelector((state: RootState) =>
    getIsSortAlphabet(state.appStore));

  const sortTime = () => {
    isSortTime &&
      dispatch(AppAction.setSortTime());

    isSortAlphabet &&
      dispatch(AppAction.setSortAlphabet());
    
    dispatch(AppAction.setSortTime());
  };

  const sortAlphabet = () => {
    isSortTime &&
      dispatch(AppAction.setSortTime());

    isSortAlphabet &&
      dispatch(AppAction.setSortAlphabet());
    
    dispatch(AppAction.setSortAlphabet());
  };

  return (
    <div className='header'>
        <button className={`button ${isSortTime}`} onClick={sortTime}>Sort by time of addition</button>
        <button className={`button ${isSortAlphabet}`} onClick={sortAlphabet}>Sort alphabetically</button>
    </div>
  )
};