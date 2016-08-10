import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import About from './about/about.jsx';
import Index from './index/index.jsx';
import Contact from './contact/contact.jsx';
import Portfolio from './portfolio/portfolio.jsx';
import Services from './services/services.jsx';
import WhatsNew from './whats_new/whats_new.jsx';

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
    let contentRender;
    const page = this.state.page;

    switch (this.state.page) {
      case 'index':
        contentRender = <Index />
        break;
      case 'about':
        contentRender = <About />
        break;
      case 'portfolio':
        contentRender = <Portfolio />
        break;
      case 'services':
        contentRender = <Services />
        break;
      case 'whatsnew':
        contentRender = <WhatsNew />
        break;
      case 'contact':
        contentRender = <Contact />
        break;
      default:
        break;
    }

    return (
      <div id='body'>
        <div className='row'>
          <Header activeNav={ page }
                  renderPage={ this.renderPage }
          />
        </div>

        <div className='row'>
          <ReactCSSTransitionGroup 
            transitionName='content' 
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500} 
            transitionLeaveTimeout={300}
          >
            <div id={ page } key={ page }>{ contentRender }</div>
          </ReactCSSTransitionGroup>
        </div>

        <div id='footer'>
          <Footer />
        </div>
      </div>
    )
  }
  
}

export default App;