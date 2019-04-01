import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts'
import Exercises from './components/exercises'
import { groups, exercises } from './store'

class App extends Component {
  state = {
    exercises
  }

  getExercisesByGroups() {
    return Object.entries( // converts to an array where the first element is the key and the second element is the value (array of objects)
        this.state.exercises.reduce((exercises, exercise) => {
          const { group } = exercise
          // Check to see if exercise group exists in array and acts accordingly
          exercises[group] = exercises[group] 
            ? [...exercises[group], exercise]
            : [exercise] 

          return exercises
      }, {})
    )
  }

  render() {
    const exercises = this.getExercisesByGroups()
    return (
      <Fragment>
        <Header />

        <Exercises 
          exercises={exercises} 
        />
        
        <Footer 
          groups={groups}
        />
      </Fragment>
    );
  }
}

export default App;
