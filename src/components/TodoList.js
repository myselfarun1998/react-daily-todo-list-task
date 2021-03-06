import React from 'react';
import { Component } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

class TodoList extends Component {
  constructor() {
    super();
    this.formBasicDate = React.createRef();
    this.formBasicTime = React.createRef();
    this.formBasicTaskTitle = React.createRef();
    this.state = {
      todoList: [],
      edited: false,
    };
    this.edit = false;
  }

  addTodo = (event) => {
    event.preventDefault();

    const data = event.target,
      newTodo = {
        taskTitle: data.taskTitle.value,
        date: data.date.value,
        time: data.time.value,
        emoji: data.emjio.value,
      };

    data.taskTitle.value = '';
    data.date.value = '';
    data.time.value = '';
    data.emjio.value = '';
    this.state.todoList.push(newTodo);

    this.setState({
      todoList: this.state.todoList,
    });
  };

  editTodo = (event) => {
    this.edit = true;
    const indexvalue = parseInt(event.target.value);
    console.log('indexvalue:', indexvalue);
    const { date, emoji, taskTitle, time } = this.state.todoList.filter(
      (el, ind) => ind === indexvalue
    )[0];
    console.log('time:', time);
    console.log('taskTitle:', taskTitle);
    console.log('emoji:', emoji);
    console.log('date:');

    const elementDate = this.formBasicDate.current;
    elementDate.value = date;
    const elementTime = this.formBasicTime.current;
    elementTime.value = time;
    const elementTitle = this.formBasicTaskTitle.current;
    elementTitle.value = taskTitle;
    this.state.todoList.splice(event.target.value, 1);
    this.setState({
      todoList: this.state.todoList,
    });
  };

  deleteTodo = (event) => {
    this.edit = false;
    this.state.todoList.splice(event.target.value, 1);
    this.setState({
      todoList: this.state.todoList,
    });
  };

  render() {
    console.log(this.state.todoList);
    return (
      <>
        <Form onSubmit={this.addTodo}>
          <Form.Group controlId="formBasicDate">
            <Form.Label className="lab">Select The date:</Form.Label>
            <Form.Control
              className="text"
              type="date"
              placeholder="mm/dd/yyyy"
              name="date"
              ref={this.formBasicDate}
            />
          </Form.Group>
          <Form.Group controlId="formBasicTime">
            <Form.Label className="lab">Select The Time:</Form.Label>
            <Form.Control
              className="text"
              type="time"
              placeholder="Enter the Time"
              name="time"
              ref={this.formBasicTime}
            />
          </Form.Group>
          <Form.Group controlId="formBasicTaskTitle">
            <Form.Label className="lab">write your today task:</Form.Label>
            <Form.Control
              className="text"
              type="text"
              placeholder="write something about your Task"
              name="taskTitle"
              ref={this.formBasicTaskTitle}
            />
          </Form.Group>
          <label>Whats your feeling today</label> <br />
          {/* <input
            className="radio-btn"
            name="emjio"
            type="radio"
            value="????"
          />{' '}
          <label>????</label>
          <input
            className="radio-btn"
            name="emjio"
            type="radio"
            value="????"
          />{' '}
          <label>????</label>
          <input
            className="radio-btn"
            name="emjio"
            type="radio"
            value="????"
          />{' '}
          <label>????</label>
          <br /> */}
          <div className="">
            <Button
              className="emo"
              name="emjio"
              value="????"
              style={{ backgroundColor: '#041562' }}
              class="btn btn-primary btn-lg active"
            >
              ????
            </Button>
            <Button
              className="emo"
              name="emjio"
              value="????"
              style={{ backgroundColor: '#041562', borderStyle: 'dotted' }}
              class="btn btn-primary btn-lg active"
            >
              ????
            </Button>
            <Button
              className="emo"
              name="emjio"
              value="????"
              style={{ backgroundColor: '#041562' }}
              class="btn btn-primary btn-lg active"
            >
              ????
            </Button>
          </div>
          {!this.edit && (
            <Button
              type="submit"
              style={{ marginTop: '12%' }}
              className="success"
            >
              Submit
            </Button>
          )}
          {this.edit && (
            <Button
              type="submit"
              style={{ marginTop: '12%' }}
              className="success"
            >
              update
            </Button>
          )}
        </Form>
        <div className="box">
          <ListGroup className="list text-white">
            {this.state.todoList.length
              ? this.state.todoList.map((task, index) => {
                  return (
                    <ListGroup.Item
                      style={{ backgroundColor: '#041562', color: 'white' }}
                      key={index}
                      variant="success"
                    >
                      <div className="emoji">{task.emoji}&nbsp;&nbsp;</div>
                      <div className="disc">{task.taskTitle}&nbsp;&nbsp; </div>
                      <p className="txt">
                        {' '}
                        {task.date}&nbsp;&nbsp; {task.time}
                      </p>
                      <Button
                        style={{ marginLeft: '50px' }}
                        className="edit"
                        type="button"
                        onClick={this.editTodo}
                        value={index}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{ marginLeft: '20px' }}
                        className="delete"
                        type="button"
                        variant="danger"
                        onClick={this.deleteTodo}
                        value={index}
                      >
                        Delete
                      </Button>
                    </ListGroup.Item>
                  );
                })
              : "You  dont have Any Todo's Today"}
          </ListGroup>
        </div>
      </>
    );
  }
}

export default TodoList;
