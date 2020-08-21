(this["webpackJsonpreact-library"]=this["webpackJsonpreact-library"]||[]).push([[0],[,,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){e.exports=a.p+"static/media/Roboto-Regular.11eabca2.ttf"},function(e,t,a){e.exports=a.p+"static/media/Roboto-Bold.e07df86c.ttf"},function(e,t,a){"use strict";a.r(t),a.d(t,"Book",(function(){return v}));var n=a(2),o=a(3),l=a(5),r=a(4),c=a(0),s=a.n(c),i=a(9),h=a.n(i),d=(a(6),a(7),a(16),a(17),a(1)),m=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"bookCard"},s.a.createElement("div",{className:"cardHeader"},s.a.createElement("h2",{className:"bookTitle"},this.props.title),s.a.createElement("button",{id:"deleteBook",className:"deleteBook",onClick:function(){e.props.deleteBook(e.props.title)}},"\xd7")),s.a.createElement("p",{className:"bookAuthor"},"by ",this.props.author),s.a.createElement("p",{className:"bookPages"},this.props.pages," pages"),s.a.createElement("div",{className:"checkboxContainer"},s.a.createElement("label",{htmlFor:"hasRead",className:"hasReadLabel"},"completed"),s.a.createElement("input",{type:"checkbox",id:"hasRead",className:"hasRead",checked:this.props.checked,onClick:this.props.onClick,name:this.props.title})))}}]),a}(s.a.Component),u=a(10),b=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={title:"",author:"",pages:0,checked:!1,showModal:e.showModal},o.handleCheckboxChange=o.handleCheckboxChange.bind(Object(d.a)(o)),o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(d.a)(o)),o.clearForm=o.clearForm.bind(Object(d.a)(o)),o}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"handleCheckboxChange",value:function(e){"yesHasRead"===e.target.name?this.setState({checked:!0}):this.setState({checked:!1})}},{key:"handleSubmit",value:function(e){this.props.passFormData(this.state.title,this.state.author,this.state.pages,this.state.checked),this.clearForm(),this.props.toggleModal(),e.preventDefault()}},{key:"clearForm",value:function(){this.setState({title:"",author:"",pages:0,checked:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"modal",className:this.props.showModal},s.a.createElement("div",{className:"formContainer"},s.a.createElement("div",{className:"formHeader"},s.a.createElement("h1",null,"Add a book"),s.a.createElement("button",{id:"closeForm",onClick:function(){e.clearForm(),e.props.toggleModal()}},"\xd7")),s.a.createElement("form",{class:"formInputContainer",onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"title",className:"formLabel"},"Title"),s.a.createElement("input",{id:"title",name:"title",className:"formTitle",type:"text",value:this.state.title,onChange:this.handleChange,required:!0}),s.a.createElement("label",{htmlFor:"author",className:"formLabel"},"Author"),s.a.createElement("input",{id:"author",name:"author",className:"formAuthor",type:"text",value:this.state.author,onChange:this.handleChange,required:!0}),s.a.createElement("label",{htmlFor:"pages",className:"formLabel"},"Pages"),s.a.createElement("input",{id:"pages",name:"pages",className:"formPages",type:"number",value:this.state.pages,onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"hasRead",className:"formLabel"},"Completed"),s.a.createElement("div",{className:"radioButtonContainer",name:"hasRead"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"yesHasRead"},"Yes"),s.a.createElement("input",{type:"radio",className:"hasRead",name:"yesHasRead",checked:this.state.checked,onChange:this.handleCheckboxChange})),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"noHasRead"},"No"),s.a.createElement("input",{type:"radio",className:"hasRead",name:"noHasRead",checked:!this.state.checked,onChange:this.handleCheckboxChange}))),s.a.createElement("input",{className:"formSubmit",type:"submit",value:"Submit"}))))}}]),a}(s.a.Component),p=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={books:[],showModal:"hide"},o.getFormData=o.getFormData.bind(Object(d.a)(o)),o.handleCheckboxChange=o.handleCheckboxChange.bind(Object(d.a)(o)),o.openForm=o.openForm.bind(Object(d.a)(o)),o.toggleModal=o.toggleModal.bind(Object(d.a)(o)),o.deleteBook=o.deleteBook.bind(Object(d.a)(o)),o.handleUnload=o.handleUnload.bind(Object(d.a)(o)),o.initializeBooks(),o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.handleUnload)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.handleUnload)}},{key:"addBook",value:function(e,t,a,n){var o=new v(e,t,a,n);this.state.books.push(o)}},{key:"deleteBook",value:function(e){var t=this.state.books.filter((function(t){if(t.title!==e)return t}));this.setState({books:t})}},{key:"handleCheckboxChange",value:function(e){var t=e.target,a=this.state.books.map((function(e){return e.title===t.name&&(e.checked=!e.checked),e}));this.setState({books:a})}},{key:"getFormData",value:function(e,t,a,n){console.log("title: ".concat(e)),console.log("author: ".concat(t)),console.log("pages: ".concat(a)),console.log("completed: ".concat(n)),this.addBook(e,t,a,n)}},{key:"handleUnload",value:function(){localStorage.clear();var e=1;this.state.books.forEach((function(t){localStorage.setItem("@react-library/book".concat(e),JSON.stringify(Object.values(t))),e++}))}},{key:"initializeBooks",value:function(){if(localStorage.getItem("@react-library/book1"))for(var e=1;e<=localStorage.length;e++){var t=JSON.parse(localStorage.getItem("@react-library/book".concat(e)));this.addBook(t[0],t[1],t[2],t[3])}else console.log("no local storage"),this.addBook("Harry Potter","JK Rowling",321,!0),this.addBook("The Hobbit","JRR Tolkien",304,!0),this.addBook("1984","George Orwell",277,!1),this.addBook("Pale Blue Dot","Carl Sagan",421,!0)}},{key:"openForm",value:function(){this.setState({showModal:""})}},{key:"toggleModal",value:function(){this.setState({showModal:"hide"})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(b,{showModal:this.state.showModal,onSubmit:this.handleFormSubmit,toggleModal:this.toggleModal,passFormData:this.getFormData}),s.a.createElement("button",{className:"newBook",onClick:this.openForm},"+ Add Book"),s.a.createElement("div",{className:"bookContainer"},this.state.books.map((function(t){return s.a.createElement(m,{title:t.title,author:t.author,pages:t.pages,checked:t.checked,onClick:e.handleCheckboxChange,deleteBook:e.deleteBook})}))))}}]),a}(s.a.Component),k=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"library"},s.a.createElement("div",{className:"header"},s.a.createElement(g,null)),s.a.createElement("div",{className:"books"},s.a.createElement("div",null,s.a.createElement(p,null))),s.a.createElement(f,null))}}]),a}(s.a.Component),g=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"headerContainer"},s.a.createElement("h1",{className:"header"},"React Library"),s.a.createElement("p",{className:"headerDescription"},"\u201cI shall be miserable if I have not an excellent library.\u201d \u2013 Jane Austen in ",s.a.createElement("i",null,"Pride and Prejudice")))}}]),a}(s.a.Component),f=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("footer",null,s.a.createElement("p",null,"made by ",s.a.createElement("a",{href:"https://github.com/erichong20"},"eric hong")," using"," ",s.a.createElement("a",{href:"https://reactjs.org/"},"React")))}}]),a}(s.a.Component);function v(e,t,a,n){this.title=e,this.author=t,this.pages=a,this.checked=n}h.a.render(s.a.createElement(k,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.35f34efe.chunk.js.map