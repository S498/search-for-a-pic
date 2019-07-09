import React,{Component} from 'react';

class ImageCard extends Component{
    constructor(){
        super();

        this.imageRef = React.createRef();
        this.state = {noOfSpans: 0}
    }

    correctRowHeights=()=>{
        console.log(this.imageRef.current.clientHeight);

        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({noOfSpans: spans});
    }

    componentDidMount(){
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load',this.correctRowHeights);
    }

    render(){
        const {urls, alt_description} = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.noOfSpans}`}}>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={alt_description}
                />
            </div>
        );
    }
}

export default ImageCard;