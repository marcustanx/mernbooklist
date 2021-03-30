(this.webpackJsonpmern_a_to_z_client=this.webpackJsonpmern_a_to_z_client||[]).push([[0],{13:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(31),r=a.n(o),c=(a(38),a(7)),s=a(8),i=a(10),m=a(9),u=a(3),h=a(12),d=(a(13),a(16)),p=a(11),b=a.n(p),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={title:e.state.title,isbn:e.state.isbn,author:e.state.author,description:e.state.description,published_date:e.state.published_date,publisher:e.state.publisher};b.a.post("http://localhost:8082/api/books",a).then((function(t){e.setState({title:"",isbn:"",author:"",description:"",published_date:"",publisher:""}),e.props.history.push("/")})).catch((function(e){console.log("Error in CreateBook!")}))},e.state={title:"",isbn:"",author:"",description:"",published_date:"",publisher:""},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"CreateBook"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("br",null),l.a.createElement(u.b,{to:"/",className:"btn btn-outline-warning float-left"},"Show BooK List")),l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("h1",{className:"display-4 text-center"},"Add Book"),l.a.createElement("p",{className:"lead text-center"},"Create new book"),l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Title of the Book",name:"title",className:"form-control",value:this.state.title,onChange:this.onChange})),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"ISBN",name:"isbn",className:"form-control",value:this.state.isbn,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Describe this book",name:"description",className:"form-control",value:this.state.description,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"date",placeholder:"published_date",name:"published_date",className:"form-control",value:this.state.published_date,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Publisher of this Book",name:"publisher",className:"form-control",value:this.state.publisher,onChange:this.onChange})),l.a.createElement("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"}))))))}}]),a}(n.Component),v=function(e){var t=e.book;return l.a.createElement("div",{className:"card-container"},l.a.createElement("img",{src:"https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3",alt:""}),l.a.createElement("div",{className:"desc"},l.a.createElement("h2",null,l.a.createElement(u.b,{to:"/show-book/".concat(t._id)},t.title)),l.a.createElement("h3",null,t.author),l.a.createElement("p",null,t.description)))},f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={books:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:8082/api/books").then((function(t){e.setState({books:t.data})})).catch((function(e){console.log("Error from ShowBookList")}))}},{key:"render",value:function(){var e,t=this.state.books;return console.log("PrintBook: "+t),e=t?t.map((function(e,t){return l.a.createElement(v,{book:e,key:t})})):"there is no book recored!",l.a.createElement("div",{className:"ShowBookList"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("br",null),l.a.createElement("h2",{className:"display-4 text-center"},"Books List")),l.a.createElement("div",{className:"col-md-11"},l.a.createElement(u.b,{to:"/create-book",className:"btn btn-outline-warning float-right"},"+ Add New Book"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null))),l.a.createElement("div",{className:"list"},e)))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={book:{}},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:8082/api/books/"+this.props.match.params.id).then((function(t){e.setState({book:t.data})})).catch((function(e){console.log("Error from ShowBookDetails")}))}},{key:"onDeleteClick",value:function(e){var t=this;b.a.delete("http://localhost:8082/api/books/"+e).then((function(e){t.props.history.push("/")})).catch((function(e){console.log("Error form ShowBookDetails_deleteClick")}))}},{key:"render",value:function(){var e=this.state.book,t=l.a.createElement("div",null,l.a.createElement("table",{className:"table table-hover table-dark"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Title"),l.a.createElement("td",null,e.title)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Author"),l.a.createElement("td",null,e.author)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"ISBN"),l.a.createElement("td",null,e.isbn)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"4"),l.a.createElement("td",null,"Publisher"),l.a.createElement("td",null,e.publisher)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"Published Date"),l.a.createElement("td",null,e.published_date)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"6"),l.a.createElement("td",null,"Description"),l.a.createElement("td",null,e.description)))));return l.a.createElement("div",{className:"ShowBookDetails"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 m-auto"},l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(u.b,{to:"/",className:"btn btn-outline-warning float-left"},"Show Book List")),l.a.createElement("br",null),l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("h1",{className:"display-4 text-center"},"Book's Record"),l.a.createElement("p",{className:"lead text-center"},"View Book's Info"),l.a.createElement("hr",null)," ",l.a.createElement("br",null))),l.a.createElement("div",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-lg btn-block",onClick:this.onDeleteClick.bind(this,e._id)},"Delete Book"),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(u.b,{to:"/edit-book/".concat(e._id),className:"btn btn-outline-info btn-lg btn-block"},"Edit Book"),l.a.createElement("br",null)))))}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t={title:n.state.title,isbn:n.state.isbn,author:n.state.author,description:n.state.description,published_date:n.state.published_date,publisher:n.state.publisher};b.a.put("http://localhost:8082/api/books/"+n.props.match.params.id,t).then((function(e){n.props.history.push("/show-book/"+n.props.match.params.id)})).catch((function(e){console.log("Error in UpdateBookInfo!")}))},n.state={title:"",isbn:"",author:"",description:"",published_date:"",publisher:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:8082/api/books/"+this.props.match.params.id).then((function(t){e.setState({title:t.data.title,isbn:t.data.isbn,author:t.data.author,description:t.data.description,published_date:t.data.published_date,publisher:t.data.publisher})})).catch((function(e){console.log("Error from UpdateBookInfo")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"UpdateBookInfo"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("br",null),l.a.createElement(u.b,{to:"/",className:"btn btn-outline-warning float-left"},"Show BooK List")),l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("h1",{className:"display-4 text-center"},"Edit Book"),l.a.createElement("p",{className:"lead text-center"},"Update Book's Info"))),l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",placeholder:"Title of the Book",name:"title",className:"form-control",value:this.state.title,onChange:this.onChange})),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"isbn"},"ISBN"),l.a.createElement("input",{type:"text",placeholder:"ISBN",name:"isbn",className:"form-control",value:this.state.isbn,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"author"},"Author"),l.a.createElement("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("input",{type:"text",placeholder:"Describe this book",name:"description",className:"form-control",value:this.state.description,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"published_date"},"Published Date"),l.a.createElement("input",{type:"date",placeholder:"published_date",name:"published_date",className:"form-control",value:this.state.published_date,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"publisher"},"Publisher"),l.a.createElement("input",{type:"text",placeholder:"Publisher of this Book",name:"publisher",className:"form-control",value:this.state.publisher,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-outline-info btn-lg btn-block"},"Update Book")))))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement(h.a,{exact:!0,path:"/",component:f}),l.a.createElement(h.a,{path:"/create-book",component:E}),l.a.createElement(h.a,{path:"/edit-book/:id",component:N}),l.a.createElement(h.a,{path:"/show-book/:id",component:k})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[61,1,2]]]);
//# sourceMappingURL=main.718b5183.chunk.js.map