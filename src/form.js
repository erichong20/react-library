import React from 'react';
import './index.css';
import './reset.css';

class NewBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "", author: "", pages: 0, checked: false, showModal: props.showModal
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleCheckboxChange(event){
    if(event.target.name==="yesHasRead"){
      this.setState({"checked": true});
    } else {
      this.setState({"checked": false});
    }
  }

  handleSubmit(event) {
    this.props.passFormData(this.state.title,this.state.author,this.state.pages,this.state.checked);
    this.clearForm();
    this.props.toggleModal();
    event.preventDefault();
  }

  clearForm(){
    this.setState({title: "", author: "", pages: 0, checked: false});
  }

  render() {
    return (
      <div id="modal" className={this.props.showModal}>
        <div className="formContainer">
          <div className="formHeader">
            <h1>Add a book</h1>
            <button
              id="closeForm"
              onClick={() => {
                this.clearForm();
                this.props.toggleModal();
              }}>
              &times;
            </button>
          </div>

          <form class="formInputContainer" onSubmit={this.handleSubmit}>
            <label htmlFor="title" className="formLabel">Title</label>
            <input id="title" name="title" className="formTitle" type="text" value={this.state.title} onChange={this.handleChange} required></input>
            
            <label htmlFor="author" className="formLabel">Author</label>
            <input id="author" name="author" className="formAuthor" type="text" value={this.state.author} onChange={this.handleChange} required></input>

            <label htmlFor="pages" className="formLabel">Pages</label>
            <input id="pages" name="pages" className="formPages" type="number" value={this.state.pages} onChange={this.handleChange}></input>

            <label htmlFor="hasRead" className="formLabel">Completed</label>
            <div className="radioButtonContainer" name="hasRead">
              <div>
                <label htmlFor="yesHasRead">Yes</label>
                <input type="radio" className="hasRead" name="yesHasRead" checked={this.state.checked} onChange={this.handleCheckboxChange}/>
              </div>
              <div>
                <label htmlFor="noHasRead">No</label>
                <input type="radio" className="hasRead" name="noHasRead" checked={!this.state.checked} onChange={this.handleCheckboxChange}/>
              </div>
            </div>
            <input className="formSubmit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export {NewBookForm}