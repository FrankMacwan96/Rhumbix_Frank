import React, {Component} from 'react';



//importing components


class App extends Component{
    constructor(props){
        super(props);
        this.state = { posts: [] }
    };   
        
    searchGif = () => {
        var text = document.getElementById('gif').value;
        console.log(text);
        fetch(`http://api.giphy.com/v1/gifs/search?q=${text}&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1`).then(res => res.json()).then(data => console.log(data['data']));
    }    

    render(){
        var post = this.state.posts
        return (
            <div>
                
                <input
                    type='text'
                    id='gif'
                />
                <input type="submit" value="search" onClick={this.searchGif}/>
                
            </div>
        );
    }
}

export default App;