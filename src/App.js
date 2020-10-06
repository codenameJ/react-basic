import React from "react";
import "./App.css";
import Person from "./Person/Person.js";

// function App() {

//     const switchNameHandler = () => {
//     // console.log("Switch");
//     // this.state.persons[0].name = "SuperA"; //this is so f*cking sh*t react wont recognize this change dont do it!!!
//     setPersonsState({
//       persons: [
//         { name: "SuperMax", age: 28 },
//         { name: "SuperXam", age: 42 },
//         { name: "Junior axm", age: 4 },
//       ],
//     });
//   };

//   const [puersonsState, setPersonsState] = useState({
//     persons: [
//             { name: "max", age: 11 },
//             { name: "xam", age: 17 },
//             { name: "axm", age: 24 },
//           ],
//   });

//   return (
//     <div className="App">
//       <h1>Hi, This is React</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={puersonsState.persons[0].name} age={puersonsState.persons[0].age}/>
//       <Person name={puersonsState.persons[1].name} age={puersonsState.persons[1].age}>I'm the god</Person>
//       <Person name={puersonsState.persons[2].name} age={puersonsState.persons[2].age}/>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    persons: [
      { name: "max", age: 11 },
      { name: "xam", age: 17 },
      { name: "axm", age: 24 },
    ],
  };

  switchNameHandler = (NewName) => {
    // console.log("Switch");
    // this.state.persons[0].name = "SuperA"; //this is so f*cking sh*t react wont recognize this change dont do it!!!
    this.setState({
      persons: [
        { name: NewName, age: 28 },
        { name: "SuperXam", age: 42 },
        { name: "axm", age: 24 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 42 },
        { name: "axm", age: 24 },
      ],
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, This is React</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler("GodMax!!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          click={this.switchNameHandler.bind(this, "JuniorMax")}
          changed={this.nameChangeHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          I'm the god
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
