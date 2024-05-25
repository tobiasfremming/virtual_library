import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const listItems = ["apples", "bananas", "oranges", "grapes", "pears"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <ListGroup
          items={listItems}
          heading={"Fruits"}
          onSelectItem={handleSelectItem}
        />
      </div>

      <div>
        <Alert>Hello World!</Alert>
      </div>
    </>
  );
}

export default App;
