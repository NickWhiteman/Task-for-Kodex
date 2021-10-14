export const AppHeader: React.FC = () => {
  return (
    <div className='header'>
      <select className='sort-select'>
        <option>Not sort</option>
        <option>Sort by time of addition</option>
        <option>Sort alphabetically</option>
      </select>
    </div>
  )
};