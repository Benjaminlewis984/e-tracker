import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// Exercise is a functional react component. Accepts props and returns JSX
const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> |
                <a href="#" onClick={() => { props.deleteExercise(props.exercise._id)}}>delete</a>
        </td>
    </tr>
);

export default class ExerciseList extends Component {

    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = { exercises: [] };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/exercise/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExercise(id) {
        Axios.delete(`http://localhost:5000/exercise/${id}`)
            .then(res => console.log(res.data));
        this.setState({
            // returns all exercises as long as they do not equal the id in question. 
            // el = every element(of array)// _id = is Mongodb's version
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    ExerciseList(){
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} 
                deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    }
    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thread className="thread-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thread>
                    <tbody>
                        { this.ExerciseList() }
                    </tbody>
                </table>
            </div>
        )
    }
}