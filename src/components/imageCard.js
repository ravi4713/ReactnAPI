import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {span:0}
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setspans)
    }
    setspans = () =>{
        const height = this.imageRef.current.clientHeight

        const span = Math.ceil(height/10)

        this.setState({span:span})
    }
    render(){
        return(
            <div style = {{gridRowEnd: `span ${this.state.span}`}}>
                <img alt={this.props.image.descrption} src={this.props.image.urls.small} ref={this.imageRef}/>
            </div>
        )
    }
}

export default ImageCard;