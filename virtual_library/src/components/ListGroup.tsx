function ListGroup() {
  const items = ["apples", "bananas", "oranges", "grapes", "pears"];

  const handleClick = (index: number, item: string) => console.log(index, item);

  return (
    <>
      <h1>Title</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            onClick={handleClick.bind(null, index, item)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
