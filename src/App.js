import React from 'react';
import List from './components/list';
import AddForm from './components/add-form';
import './styles.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {list: ["Первое", "Второе", "Третье"]}
  }

  addItem = e => {
    e.preventDefault();
    const item = e.target.item.value;
    document.getElementById("input").value = "";
    if(item){
      if(this.state.list.length > 6){
        alert("Дыбил, куда тебе столько задач? Хоть то доделай...");
      }
      else{
        let updatedList = this.state.list;
        updatedList.push(item);
        this.setState({list: updatedList});
      }
    }
  }
  deleteItem = id => {
    let updatedList = this.state.list;
    updatedList.splice(id, 1);
    this.setState({list: updatedList});
  }

  render(){
    return (
      <div className="todo-panel">
        <AddForm AddMethod={this.addItem}/>
        <List Items={this.state.list} DeleteMethod={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
