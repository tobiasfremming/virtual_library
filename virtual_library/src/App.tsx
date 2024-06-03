import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like/Like";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ExpandableText from "./components/ExpandableText";
import PersonForm from "./components/Form/PersonForm";
import ExpenseList from "./components/Expense/ExpenseList";
import ExpenseFilter from "./components/Expense/ExpenseFilter";
import ExpenseForm from "./components/Expense/ExpenseForm";
import categories from "./categories";

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

  // Expenses: ========================================

  const [cartItems, setCartItems] = useState(["apples", "bananas", "oranges"]);

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Coffee", amount: 20, category: "Groceries" },
    { id: 2, description: "Books", amount: 50, category: "Education" },
    { id: 3, description: "Gym", amount: 100, category: "Health" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
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
      <div>
        <ExpandableText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          maxLength={5}
        />
      </div>

      <div>
        <PersonForm />
      </div>

      <div className="mb-5">
        <ExpenseForm />
      </div>

      <div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category: string) =>
              setSelectedCategory(category)
            }
          />
        </div>

        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id: number) => {
            setExpenses(expenses.filter((expense) => expense.id !== id));
          }}
        />
      </div>
    </>
  );
}

export default App;
