import React from 'react';

class Searchbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {term: ''}
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.setState({term:e.target.value})
    
    }
    onSubmitForm = (e)=>{
        e.preventDefault();
        this.props.onSubmitSearch(this.state.term) 
    }
    render(){
        return (
            <div className="ui segment">
                <form className='ui form' onSubmit={this.onSubmitForm}>
                    <div className='ui field'>
                        <label>Image search</label>
                        <input type='text' onChange={this.onInputChange} value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;

