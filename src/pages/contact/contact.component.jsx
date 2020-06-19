// import React from "react";
// import axios from 'axios';
// import "./contact.styles.scss";

// class Contact extends React.Component{
//   handleSubmit(e){
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     axios({
//         method: "POST", 
//         url:"http://localhost:3002/send", 
//         data: {
//             name: name,   
//             email: email,  
//             messsage: message
//         }
//     }).then((response)=>{
//         if (response.data.msg === 'success'){
//             alert("Message Sent."); 
//             this.resetForm()
//         }else if(response.data.msg === 'fail'){
//             alert("Message failed to send.")
//         }
//     })
// }

// resetForm(){
//     document.getElementById('contact-form').reset();
// }

// render(){
//     return(
//         <div className="col-sm-4 offset-sm-4">
//             <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//                 <div className="form-group">
//                     <label for="name">Name</label>
//                     <input type="text" className="form-control" id="name" />
//                 </div>
//                 <div className="form-group">
//                     <label for="exampleInputEmail1">Email address</label>
//                     <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
//                 </div>
//                 <div className="form-group">
//                     <label for="message">Message</label>
//                     <textarea className="form-control" rows="5" id="message"></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
// }

// export default Contact;


// import React from 'react'

// import "./contact.styles.scss";

// const Contact = () => (
//   <form className="contact-form" method="POST" action="/contact">
//     <div className="form-field">
//       <label htmlFor="name">
//         <div className="label-content">Name:</div>
//         <input type="text" name="name" required />
//       </label>
//     </div>

//     <div className="form-field">
//       <label htmlFor="email">
//         <div className="label-content">Email:</div>
//         <input type="email" name="email" required />
//       </label>
//     </div>

//     <div className="form-field">
//       <label htmlFor="message">
//         <div className="label-content">Message:</div>
//         <textarea className="stretch" name="message" rows="5" required />
//       </label>
//     </div>

//     <button type="submit">Send</button>

//     <div>
//       { window.location.hash === '#success' &&
//         <div id="success">
//           <p>Your message has been sent!</p>
//         </div>
//       }
//       { window.location.hash === '#error' &&
//         <div id="error">
//           <p>An error occured while submitting the form.</p>
//         </div>
//       }
//     </div>
//   </form>
// )

// export default Contact



import React from 'react';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<h1>Let's see if it works</h1>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
    const templateId = 'template_id';
  
    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }
  
    sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}