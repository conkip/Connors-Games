/*
    Author: Connor Kippes
*/

import styles from "./List.module.css"

type Item = {
  _id: number;
  name: string;
}

interface Props {
    category: string,
    itemList: Item[],
}

const List = ({category, itemList}: Props) => {
    //itemList.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    //itemList.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    //itemList.sort((a,b) => a.id - b.id); // NUMERIC
    //itemList.sort((a,b) => b.id - a.id); // REVERSE NUMBERIC
    //const lowID = itemList.filter(item => item.id < 100); // FILTER BELOW
    //const highID = itemList.filter(item => item.id >= 100); // FILTER ABOVE

    const listItems = itemList.map(item => <li key={item._id}>
                                            {item.name}</li>);
    return (
        <>
            <h3 className={styles.listCategory}>{category}</h3>
            <ol className={styles.listItems}>{listItems}</ol>
        </>
    )
}

export default List