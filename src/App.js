import React, { Component } from 'react';
import { ClickImage, Header, Navbar } from "./components";

class App extends Component {

  state = {
    guess: "",
    score: 0,
    total: 0,
    images: [
      {
        id: 1,
        url:'Brian.jpg',
        clicked: false
      },
      {
        id: 2,
        url:'Chris.jpg',
        clicked: false
      },
      {
        id: 3,
        url:'Cleveland.jpg',
        clicked: false
      },
      {
        id: 4,
        url:'Ernie.jpg',
        clicked: false
      },
      {
        id: 5,
        url:'Quagmire2.jpg',
        clicked: false
      },
      {
        id: 6,
        url:'Herbert.jpg',
        clicked: false
      },
      {
        id: 7,
        url:'Herbert2.jpg',
        clicked: false
      },
      {
        id: 8,
        url:'Lois.jpg',
        clicked: false
      },
      {
        id: 9,
        url:'Maid.jpg',
        clicked: false
      },
      {
        id: 10,
        url:'Meg.jpg',
        clicked: false
      },
      {
        id: 11,
        url:'Peter-Deadpool.png',
        clicked: false
      },
      {
        id: 12,
        url:'Peter.jpg',
        clicked: false
      },
      {
        id: 13,
        url:'Quagmire.jpg',
        clicked: false
      },
      {
        id: 14,
        url:'Stewie.jpg',
        clicked: false
      },
      {
        id: 15,
        url:'Stewie2.jpeg',
        clicked: false
      }
    ]
  }
  importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  images = this.importAll(require.context('./components/assets/images', false, /\.(png|jpe?g|svg)$/));

  clickImageHandler = (id) => {
    const images = this.state.images
    const imageClicked = this.state.images.filter(x => x.id === id)

    if(imageClicked[0].clicked) {
      images.map(x => x.clicked = false);
      this.setState({
        score: 0,
        images: images,
        guess: "incorrectly"
      })
    } else {
      imageClicked[0].clicked = true;

      if(parseInt(this.state.score) >= parseInt(this.state.total)) {
        this.setState({
          total: this.state.score + 1
        })
      } 

      images.sort((a, b) => {
				return 0.5 - Math.random();
			});
      
      this.setState({
        score: this.state.score + 1,
        images: images,
        guess: "correctly"
      })
      
    } 
    
  }


  render() {
    return (
      <React.Fragment>
        <Navbar guess={this.state.guess} score={this.state.score} total={this.state.total}/>
        <Header />
        <div className="container">
        {
          this.state.images.map(x => <ClickImage id={x.id} src={this.images[x.url]} onClick ={this.clickImageHandler}/>)
        }
        </div>

      </React.Fragment>
    );
  }
}

export default App;
