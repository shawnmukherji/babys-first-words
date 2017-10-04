import React from 'react';
import axios from 'axios';

export default class ViewStudents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            students: []
        };
    }
    render(){
        const studentsMap = this.state.students.map((student)=> <div>{student.name}</div>)
        return (
            <div>
        <h3>ViewStudents</h3>
        {studentsMap}

            </div>
        
        
        );
    }
    componentWillMount(){
        console.log('this is before the render');
        axios('/api/students/all').then(response => {
            this.setState({
                students: response.data
            });
        });
    }
}


//list of students from server
//api route for list of students