import React from 'react';
import './index.css';
import './reset.css';
import {Card} from "./card.js"
import {NewBookForm} from "./form.js"
import {Book} from "./index.js"

class Bookshelf extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      books: [],
      showModal: "hide"
    }
    this.getFormData = this.getFormData.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.openForm = this.openForm.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.handleUnload = this.handleUnload.bind(this);
    //populating bookshelf
    this.initializeBooks();
  }

  componentDidMount(){
    window.addEventListener("beforeunload", this.handleUnload);
  }

  componentWillUnmount(){
    window.removeEventListener("beforeunload", this.handleUnload);
  }

  addBook(title,author,pages,checked){
    const newBook = new Book(title,author,pages,checked);
    this.state.books.push(newBook);
    //add a book object to the books array when the form is submitted
  }

  deleteBook(title){
    const filtered = this.state.books.filter(book => {
      if(book.title !== title){
        return book;
      }
    });
    this.setState({"books": filtered});
  }

  handleCheckboxChange(e){
    let target = e.target;

    const updated = this.state.books.map(book => {
      if(book.title === target.name){
        book.checked = !book.checked;
      }
      return book;
    });
    this.setState({books: updated});

    /*console.log(JSON.stringify(Object.values(this.state.books[0])))
    if (localStorage.getItem("@react-library/book1")){
      console.log("book stored");
    }*/
  }

  getFormData(title,author,pages,checked){
    console.log(`title: ${title}`);
    console.log(`author: ${author}`);
    console.log(`pages: ${pages}`);
    console.log(`completed: ${checked}`);
    this.addBook(title,author,pages,checked);
  }

  handleUnload(){
    localStorage.clear();
    let i = 1;
    this.state.books.forEach(book => {
      localStorage.setItem(
        `@react-library/book${i}`,
        JSON.stringify(Object.values(book))
      );
      i++;
    });
  }

  initializeBooks(){
    if (!localStorage.getItem("@react-library/book1")) {
      console.log("no local storage");
      this.addBook("Harry Potter","JK Rowling", 321, true);
      this.addBook("The Hobbit","JRR Tolkien", 304, true);
      this.addBook("1984","George Orwell", 277, false);
      this.addBook("Pale Blue Dot", "Carl Sagan", 421, true);
    } else {
      for (let i = 1; i <= localStorage.length; i++) {
        let bookArr = JSON.parse(localStorage.getItem(`@react-library/book${i}`)
        );
        this.addBook(bookArr[0], bookArr[1], bookArr[2], bookArr[3]);
      }
    }
  }

  openForm(){
    this.setState({showModal: ""});
  }

  toggleModal(){
    this.setState({showModal: "hide"});
  }

  //loops through the books array and renders all books
  render(){
    return(
      <div>
        <NewBookForm showModal={this.state.showModal} onSubmit={this.handleFormSubmit} toggleModal={this.toggleModal} passFormData={this.getFormData}/>
        <button className="newBook" onClick={this.openForm}>&#43; Add Book</button>
        <div className="bookContainer">
          { this.state.books.map(book => (
            //render book
            <Card title={book.title} author={book.author} pages={book.pages} checked={book.checked} onClick={this.handleCheckboxChange} deleteBook={this.deleteBook}/>
          ))}
        </div>
      </div>
    );
  }

}

export {Bookshelf}