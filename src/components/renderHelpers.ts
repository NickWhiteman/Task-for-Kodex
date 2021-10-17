export const renderJSX = (
  renderList: string[] | number[],
  insertHtml: (name: string | number, index: number) => JSX.Element,
  isSortTime: boolean,
  isSortAlphabet: boolean) => {
  const copyArray = [...renderList];
  if (isSortTime)
    return copyArray.reverse().map((name, index) =>
      insertHtml(name, index));
  if (isSortAlphabet)
    if (typeof copyArray[0] === 'number')
      return copyArray.sort((a, b) => a > b ? 1 : -1).map((name, index) =>
        insertHtml(name, index));
    return copyArray.sort().map((name, index) =>
      insertHtml(name, index));
};
