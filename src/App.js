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
      { id: "1", name: "max", age: 11 },
      { id: "2", name: "xam", age: 17 },
      { id: "3", name: "axm", age: 24 },
    ],
  };

  // console.log("Switch");
  // this.state.persons[0].name = "SuperA"; //this is so f*cking sh*t react wont recognize this change dont do it!!!

  deletePersonHandler = (index) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]; // new javaScript ES6
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]); // Old version to assign object to arr

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red"
    }

    // let classes = ['red', 'bold'].join(' '); // assign by join with white space
    // let classes = "red bold" // result is same as previous line

    let classes = [];
    if(this.state.persons.length <=2){
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, This is React</h1>
        <p className={classes.join(' ')}>hey, you see?</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
