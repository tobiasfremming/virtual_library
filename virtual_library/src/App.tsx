import ListGroup from "./components/ListGroup";

function App() {
  const listItems = ["apples", "bananas", "oranges", "grapes", "pears"];
  return (
    <div>
      <ListGroup items={listItems} heading={"Fruits"} />
    </div>
  );
}

export default App;
