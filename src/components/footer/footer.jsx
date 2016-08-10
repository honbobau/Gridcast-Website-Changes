import React from 'react';

class Footer extends React.Component {

  render() {
    return(
      <footer className='row'>
        <div className='columns large-6'>
          <h4>About Us</h4>
          <p>We specialize in customized digital signage solutions, serving retail, corporate communications, transportation, digital out-of-home, and architecture industries across North America.</p>

          <a href='https://twitter.com/gridcast' target='_blank'><i id='twitter' className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
          <a href='https://www.facebook.com/gridcastmedia' target='_blank'><i id='facebook' className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
          <a href='http://www.linkedin.com/company/gridcast-media-inc' target='_blank'><i id='linkedin' className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
        </div>

        <div className='columns large-4'>
          <h4>Contact Us</h4>
          <p>General Inquiries:  inquiries@gridcast.ca</p>
          <p>Technical Inquiries:  helpdesk@gridcast.ca</p>
          <p>Phone:  (905) 889-1944</p>
          <p>Tech Support:  (905) 889-1944 ext. 351</p>
          <br />
          <p>7495 Birchmount Road, Markham ON Canada</p>

          <button>More Info</button>
        </div>
      </footer>
    );
  }

}

export default Footer;
