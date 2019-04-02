import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts'
import Exercises from './components/exercises'
import { groups, exercises } from './store'

class App extends Component {
  state = {
    exercises,
    selectedExercise: {},
  }

  getExercisesByGroups() {

    return Object.entries( 
        this.state.exercises.reduce((exercises, exercise) => { 
          const { group } = exercise

          exercises[group] = exercises[group] // Check to see if exercise group exists in array and acts accordingly
            ? [...exercises[group], exercise] 
            : [exercise] 

          return exercises // creates an object where the key is the group and the value is an array of the objects that apply to it
      }, {})
    )
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({ 
      exercises: exercises.filter(ex => ex.id !== id ) // filters out instances where the exercise id is the same as the id passed in
    }))
  }

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({ // exercises = prevState
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ]
    }))
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({ // grabs exercises (an array of all the exercises) from state as 'prevState' as setState is asynchronous and something else in the app may change state while we are calling it
      selectedExercise: exercises.find(ex => ex.id === id)
    }))
  }

  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({ // same as handleExerciseSelect except changes editMode
      selectedExercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))
  }

  handleGroupSelect = selectedGroup => {
    this.setState({ 
       selectedGroup
    })
  }
 
  render() {
    const exercises = this.getExercisesByGroups(),
    { editMode, selectedExercise, selectedGroup } = this.state
    
    return (
      <Fragment>
        <Header 
          groups={groups}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises 
          editMode={editMode}
          exercises={exercises} 
          groups={groups}
          onDelete={this.handleExerciseDelete}
          onEdit={this.handleExerciseEdit}
          onSelect={this.handleExerciseSelect}
          onSelectEdit={this.handleExerciseSelectEdit}
          selectedExercise={selectedExercise}
          selectedGroup={selectedGroup}
        />
        
        <Footer 
          selectedGroup={selectedGroup}
          groups={groups}
          onSelect={this.handleGroupSelect}
        />
      </Fragment>
    );
  }
}

export default App;
