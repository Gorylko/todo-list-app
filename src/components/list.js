import React from 'react';


class List extends React.Component{
    render(){
        return(
            <div className="todo-list">
                {this.props.Items.map((item, i) => {
                    return <div className='todo-item' key={i} onClick={() => this.props.DeleteMethod(i)}>{item}</div>
                })}
            </div>
        );
    }
}

export default List;