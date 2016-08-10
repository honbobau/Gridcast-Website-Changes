import React from 'react';

class Header extends React.Component {

  render() {
    let index, about, portfolio, services, whatsnew, contact;

    const render = this.props.renderPage;

    switch (this.props.activeNav) {
      case 'index':
        index = 'active-nav'
        break;
      case 'about':
        about = 'active-nav'
        break;
      case 'portfolio':
        portfolio = 'active-nav'
        break;
      case 'services':
        services = 'active-nav'
        break;
      case 'whatsnew':
        whatsnew = 'active-nav'
        break;
      case 'contact':
        contact = 'active-nav'
        break;
      default:
        break;
    }

    return(
      <header id='header'>
        <div className='columns large-4'>
          <a>
            <img id='header-logo' src='../../../images/header/header_logo.png' />
          </a>
        </div>

        <div className='columns large-9'>
          <ul id='header-navbar'>
            <li className={index} id='header-home' onClick={ () => render('index') }>Home</li>
            <li className={about} id='header-about' onClick={ () => render('about') }>About</li>
            <li className={portfolio} id='header-portfolio' onClick={ () => render('portfolio') }>Portfolio</li>
            <li className={services} id='header-services' onClick={ () => render('services') }>Services</li>
            <li className={whatsnew} id='header-whatsnew' onClick={ () => render('whatsnew') }>What's New</li>
            <li className={contact} id='header-contact' onClick={ () => render('contact') }>Contact</li>
          </ul>
        </div>
      </header>
    );
  }

}

export default Header;