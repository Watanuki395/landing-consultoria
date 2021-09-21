import React, { Component } from "react";

export class Contact extends Component {
constructor(props){
  super(props);
  this.state = {
    UserName :'',
    UserEmail :'',
    UserMessage : '',
    UserSubmit : false
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
};

handleChange(event) {
  const target = event.target;
  const name = target.name;
  const value = target.value;
  this.setState({
    [name]: value
  });
}

handleSubmit(event) {
  event.preventDefault();

  fetch('/api/contact', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        alert('texto va aca - - texto va aca - - texto va aca - - ');
        return response.json();
      });
}

  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Contáctanos</h2>
                  <p>
                  texto va aca - - texto va aca - - texto va aca - - 
                  </p>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="UserName"
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Nombre"
                          required="required"
                          value={this.state.UserName} 
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="UserEmail"
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                          value={this.state.UserEmail} 
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="UserMessage"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Mensaje"
                      required = "required"
                      value={this.state.UserMessage} 
                      onChange={this.handleChange}

                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button 
                  type="submit" 
                  className="btn btn-custom btn-lg"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Información de Contacto</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Dirección
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> E-mail
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "/"}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2021  Design by{" "}
              <a href="http://www.galer-ia.com" rel="nofollow">
                galerIA the company
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
