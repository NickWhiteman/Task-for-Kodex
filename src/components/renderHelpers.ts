export const renderJSX = (
    renderList: string[],
    insertHtml: (name: string, index: number) => JSX.Element,
) => {
    return renderList.map((name, index) => insertHtml(name, index));
};

// const customSorting = (a: string, b: string) => {
//     let result: string[] = [];
//     let aItem: number = Number(a.split(/[0-9]/g).join(''));
//     let bItem: number = Number(b.split(/[0-9]/g).join(''));
//     let aWortItem = a.split(/[A-Za-zА-Я-а-я]/g).join('');
//     let bWortItem = b.split(/[A-Za-zА-Я-а-я]/g).join('');

//     (aItem > bItem) ? result.push(String(aItem), aWortItem) : result.push(String(bItem), bWortItem)
//         ? (aItem < bItem) ? result.push(String(bItem), bWortItem) : result.push(String(aItem), aWortItem)

// };