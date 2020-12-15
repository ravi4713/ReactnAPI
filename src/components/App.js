import React from 'react';
import unsplash from '../api/unsplash' 
import Searchbar from './Searchbar';
import Imagelist from '../components/Imagelist'


class  App extends React.Component{
	constructor(props){
		super(props);

		this.state = { images: [] };
		this.onSearchSubmit = this.onSearchSubmit.bind(this)
		

	}
	
	async onSearchSubmit(term){
		const res = await unsplash.get('search/photos',{
			params: {
				query: term
			},
		});
		this.setState({images : res.data.results})
		
	}
	render(){
		return (
			<div className="ui container">
				<Searchbar onSubmitSearch = {this.onSearchSubmit}/>
				<Imagelist images = {this.state.images} /> 
			</div>
		);
	}
}

export default App;