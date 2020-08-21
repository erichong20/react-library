import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import './fonts/Roboto-Regular.ttf'
import './fonts/Roboto-Bold.ttf'
import {Bookshelf} from './bookshelf.js';

class Library extends React.Component {
  render(){
    return(
      <div className="library">
        <div className="header">
          <Header />
        </div>
        <div className="books">
          <div>
            <Bookshelf />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return(
      <div className="headerContainer">
        <h1 className="header">React Library</h1>
        <p className="headerDescription">“I shall be miserable if I have not an excellent library.” – Jane Austen in <i>Pride and Prejudice</i></p>
      </div>
    );
  }
}

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <p>
          made by <a href="https://github.com/erichong20">eric hong</a> using{" "}
          <a href="https://reactjs.org/">React</a>
        </p>
      </footer>
    );
  }
}

function Book(title,author,pages,checked){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.checked = checked;
}

//render

ReactDOM.render(
  <Library />,
  document.getElementById('root')
);

export {Book};
