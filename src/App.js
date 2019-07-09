import React,{Component} from 'react';
import SearchBar from './SearchBar';
import unsplash from './api/unsplash';
import ImageList from './ImageList';

class App extends Component{
  constructor(){
    super();

    this.state = {imageList: []};
  }

  printTheResultForApp = async (msg) => {
    console.log(msg);
  
    const response = await unsplash.get('/search/photos',
    {
      params: {query: msg},
    });
  
    // .then((response)=>{console.log(response)});
  
    // console.log(response);
    this.setState({imageList: response.data.results});
  }

  render(){
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar fun={this.printTheResultForApp}/>
        <div>
          <ImageList images={this.state.imageList}/>
        </div>
      </div>
    );
  }
}

export default App;