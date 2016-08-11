import React from 'react';

class About extends React.Component {

  render() {
    return(
      <div id='about'>

        {/* mission statement */}
        <div className='row' id='about-mission-statement'>
          <div className='columns large-12'>
            <h4>About us</h4>
            <p>Our unique consultative approach helps our client’s get the most out of their investment in digital signage.</p>
          </div>
        </div>

        <hr />
        <br />

        {/* hero image */}
        <div className='row'>
          <div className='columns large-12'>
            <img src='../../images/about/about.jpg' />
          </div>
        </div>

        <br />

        {/* story */}
        <div className='row' id='about-story'>
          <div className='columns large-12'>
            <p>Digital signage is proving to be the ‘in-technology’ for in-store marketing, promotions and corporate branding. Today, digital signage is definitely a relevant and strategic tool for marketing professionals and space planners. It is emerging as the new standard when it comes to creating a strategy for in-store and corporate visual communications.
            </p>

            <p>At Gridcast, we help enhance and market the brands and environments of our clients. We are a visual communications and display media consulting agency specializing in customized digital signage solutions for a variety of industries including retail, corporate, and transportation. We work primarily with marketing professionals, store planners, space planners and architects to address display technology needs for new builds as well as retrofitting existing environments.
            </p>

            <p>Our unique consultative, design-build approach helps users get the most of their investment in digital signage. First and foremost, we build solutions based on meeting your marketing objectives by developing the right content strategy. We believe any digital signage solution should deliver tangible ROI for customers and that starts with a sound plan. A plan that bases creating a digital signage strategy around buying and installing screens like how one would buy furniture isn’t much of a strategy.
            </p>

            <p>While digital signage technologies offers tangible benefits for improving store aesthetics, there is so much more it can offer today’s marketing professionals. With the right content, it can provide immeasurable on-going benefits at point of sale by engaging customers and enriching the in-store shopping experience. Content for digital signage is dynamic and interactive with delivery that is instant and measurable. Our proven expertise in developing content across multiple digital media platforms sets Gridcast apart in the marketplace.
            </p>

            <p>As experts in digital signage solutions, Gridcast has consulted on many digital signage projects for some of Canada’s largest retail chains, corporations, out-of-home companies, store planners and architects. We provide a full service 45,000 sf facility that features an innovation center that showcases digital signage technologies from global leaders such as Samsung and LG. We have an in-house team of experts in digital signage who are second to none consisting of creative multimedia designers, digital integration strategists, audio visual specialists, IT consultants, field support technicians and an operations team to help manage and support digital signage networks across the country.
            </p>

            <p>As well, through our sister division ICON Digital Productions Inc., one of Canada’s leaders in visual communications and display graphic solutions, we have the ability to offer both display graphics and digital signage solutions under the same roof.
            </p>
          </div>
        </div>

      </div>
    );
  }

}

export default About;