import React, { Component } from 'react';
import { ClickImage, Header, Navbar } from "./components";

class App extends Component {

  importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  images = this.importAll(require.context('./components/assets/images', false, /\.(png|jpe?g|svg)$/));

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <div class="container">
          <ClickImage src={this.images['Brian.jpg']} />
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
          <ClickImage src={this.images['Stewie2.jpeg']} />
        </div>

      </React.Fragment>
    );
  }
}

export default App;
