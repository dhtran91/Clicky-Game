import React, { Component } from 'react';
import { ClickImage, Header, Navbar } from "./components";

class App extends Component {

  state = {
    images: [
      {
        url:'Brian.jpg',
        clicked: false
      },
      {
        url:'Chris.jpg',
        clicked: false
      },
      {
        url:'Cleveland.jpg',
        clicked: false
      },
      {
        url:'Ernie.jpg',
        clicked: false
      },
      {
        url:'Quagmire2.jpg',
        clicked: false
      },
      {
        url:'Herbert.jpg',
        clicked: false
      },
      {
        url:'Herbert2.jpg',
        clicked: false
      },
      {
        url:'Lois.jpg',
        clicked: false
      },
      {
        url:'Maid.jpg',
        clicked: false
      },
      {
        url:'Meg.jpg',
        clicked: false
      },
      {
        url:'Peter-Deadpool.png',
        clicked: false
      },
      {
        url:'Peter.jpg',
        clicked: false
      },
      {
        url:'Quagmire.jpg',
        clicked: false
      },
      {
        url:'Stewie.jpg',
        clicked: false
      },
      {
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

  clickImageHandler = (e) => {
    
  }
  render() {
    return (
      <React.Fragment>
        <Navbar score="1" total="15"/>
        <Header />
        <div class="container">
        {
          this.state.images.map(x => <ClickImage src={this.images[x.url]} />)
        }
          {/* <ClickImage src={this.images['Brian.jpg']} />
          <ClickImage src={this.images['Chris.jpg']} />
          <ClickImage src={this.images['Cleveland.jpg']} />
          <ClickImage src={this.images['Ernie.jpg']} />
          <ClickImage src={this.images['Quagmire2.jpg']} />
          <ClickImage src={this.images['Herbert.jpg']} />
          <ClickImage src={this.images['Herbert2.jpg']} />
          <ClickImage src={this.images['Lois.jpg']} />
          <ClickImage src={this.images['Maid.jpg']} />
          <ClickImage src={this.images['Meg.jpg']} />
          <ClickImage src={this.images['Peter-Deadpool.png']} />
          <ClickImage src={this.images['Peter.jpg']} />
          <ClickImage src={this.images['Quagmire.jpg']} />
          <ClickImage src={this.images['Stewie.jpg']} />
          <ClickImage src={this.images['Stewie2.jpeg']} /> */}
        </div>

      </React.Fragment>
    );
  }
}

export default App;
