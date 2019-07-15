import React from 'react';

class AddForm extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.AddMethod} className="form">
                <input id="input" type="text" name="item" placeholder="New ToDo record..."/>
                <button className="button">Add</button>
            </form>
        );
    }
}

export default AddForm;