import React, {useState} from "react";
import "./App.css";
import Person from "./Person/Person.js";

function App() {

  const state = useState({
    persons: [
            { name: "max", age: 11 },
            { name: "xam", age: 17 },
            { name: "axm", age: 24 },
          ],
  });

  return (
    <div className="App">
      <h1>Hi, This is React</h1>
      <Person name={state.persons[0].name} age={state.persons[0].age}/>
      <Person name={state.persons[1].name} age={state.persons[1].age}>I'm the god</Person>
      <Person name={state.persons[2].name} age={state.persons[2].age}/>
    </div>
  );
}

// class App extends React.Component {
//   state = {
//     persons: [
//       { name: "max", age: 11 },
//       { name: "xam", age: 17 },
//       { name: "axm", age: 24 },
//     ],
//   };

//   switchNameHandler = () => {
//     // console.log("Switch");
//     // this.state.persons[0].name = "SuperA"; //this is so f*cking sh*t react wont recognize this change dont do it!!!
//     this.setState({
//       persons: [
//         { name: "SuperMax", age: 28 },
//         { name: "SuperXam", age: 42 },
//         { name: "axm", age: 24 },
//       ],
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, This is React</h1>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         >
//           I'm the god
//         </Person>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//   }
// }

export default App;
