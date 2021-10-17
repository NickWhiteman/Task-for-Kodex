export const renderJSX = (
  renderList: string[],
  insertHtml: (name: string, index: number) => JSX.Element,
  isSortTime: boolean,
  isSortAlphabet: boolean) => {
  const copyArray = [...renderList]
  if (isSortTime)
    return copyArray.reverse().map((name, index) =>
      insertHtml(name, index));
  if (isSortAlphabet)
    return copyArray.sort().map((name, index) =>
      insertHtml(name, index));
};
