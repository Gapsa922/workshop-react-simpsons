import Avatar from "./components/Avatar/Avatar";
// import {homer, bart} from "./data"
import { simpsons } from "./data";

function App() {
  return (
    <div>
      <h1>Avatar components</h1>
      {/* <Avatar {...homer} />
      <Avatar {...bart} /> */}
      {simpsons.map((simpson) => (
        <Avatar {...simpson} />
      ))}
    </div>
  );
}

export default App;
