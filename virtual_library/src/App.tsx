import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like/Like";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const listItems = ["apples", "bananas", "oranges", "grapes", "pears"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButton = () => {
    setAlertVisible(true);
    displayAlert("Button clicked!");
  };

  const displayAlert = (text: string) => {
    console.log(text);
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
        <Button onClick={handleButton} text="Click me" />
      </div>

      <div>
        <Alert alert={alertVisible} onClose={() => setAlertVisible(false)}>
          Hello World!
        </Alert>
      </div>

      <div>
        <Like onClick={() => console.log("clicked")} />
      </div>
    </>
  );
}

export default App;
