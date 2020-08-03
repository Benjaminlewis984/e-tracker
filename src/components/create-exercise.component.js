import React, { Component } from 'react';

export default class CreateExercises extends Component {
    constructor(props){
        super(props);

    // using state instead of variables in react so that when the state is updated itll show on the site
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    onChangeUsername(e){
        this.setState({
            // target is the textbox from e. So the value of that textbox is going to be the username.
            username: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);
    }
    render(){
        return (
            <div>
                <p>This is the create exercises component</p>
            </div>
        )
    }
}