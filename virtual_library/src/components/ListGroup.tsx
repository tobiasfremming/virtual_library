function ListGroup() {
  const items = ["apples", "bananas", "oranges", "grapes", "pears"];

  return (
    <>
      <h1>Title</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            onClick={() => console.log(item)}
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
