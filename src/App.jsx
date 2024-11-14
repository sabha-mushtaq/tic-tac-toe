import { Person, Button, display } from './person';
import Firsttry from './first';
import Header from './header';
import {List} from './list';
const items = ['Apple', 'Banana', 'Orange'];
function App() {
  return (
    <div>
      <h1>Person Information</h1>
      <Person name="Akira" age={20} />
      <Person name="Hadiya" age={22} />
      <Firsttry />
      <Button text="click me" onClick={display} />
      <Header title="Welcome to My App" />
      <h1>Fruit List</h1>
      <List items={items} />

    </div>
  );
}




export default App;


