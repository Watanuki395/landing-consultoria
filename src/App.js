import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Team from './components/Team';
import Contact from './components/contact';
import Gallery from './components/gallery'
import Testimonials from './components/testimonials'

import JsonData from './data/data.json';
//import MessengerCustomerChat from 'react-messenger-customer-chat';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      landingPageData: {},
    };
  }

  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();

    fetch('/api/chatbot', {
      method: 'GET'
    }).then(function(response) {
      console.log(response)
      return response.json();
    });

  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;


