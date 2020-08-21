import React from 'react';
import './index.css';
import './reset.css';

class Card extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="bookCard">
        <div className="cardHeader">
          <h2 className="bookTitle">{this.props.title}</h2>
          <button id="deleteBook" className="deleteBook" onClick={()=>{
            this.props.deleteBook(this.props.title);
          }}>&times;</button>
        </div>
        <p className="bookAuthor">by {this.props.author}</p>
        <p className="bookPages">{this.props.pages} pages</p>
        <div className="checkboxContainer">
          <label htmlFor="hasRead" className="hasReadLabel">completed</label>
          <input type="checkbox" id="hasRead" className="hasRead" checked={this.props.checked} onClick={this.props.onClick} name={this.props.title}></input>
        </div>
      </div>
    );
  }
}

export {Card}