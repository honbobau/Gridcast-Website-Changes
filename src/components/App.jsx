import React from 'react';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: null
    }
  };

  renderPage = page => { this.setState({page}) }

  componentDidMount() {
    this.setState({ page: 'index' });
  }

  render() {
    let index, about, portfolio, services, whatsnew, contact;

    index = about = portfolio = services = whatsnew = contact = 'content hide'

    switch (this.state.page) {
      case 'index':
        index = 'content display'
        break;
      case 'about':
        about = 'content display'
        break;
      case 'portfolio':
        portfolio = 'content display'
        break;
      case 'services':
        services = 'content display'
        break;
      case 'whatsnew':
        whatsnew = 'content display'
        break;
      case 'contact':
        contact = 'content display'
        break;
      default:
        break;
    }

    return (
      <div id='body'>
        <div className='row'>
          <Header activeNav={ this.state.page }
                  renderPage={ this.renderPage }
          />
        </div>

        <div className={index} id="index">
          <h1>Test Index</h1>
        </div>

        <div className={about} id="about">
          <h1>Test About</h1>
        </div>

        <div className={portfolio} id="portfolio">
          <h1>Test Portfolio</h1>
        </div>

        <div className={services} id="services">
          <h1>Test Services</h1>
        </div>

        <div className={whatsnew} id="whatsnew">
          <h1>Test What's New</h1>
        </div>

        <div className={contact} id="contact">
          <h1>Test Contact</h1>
        </div>

        <div id='footer'>
          <Footer />
        </div>
      </div>
    )
  }
  
}

export default App;