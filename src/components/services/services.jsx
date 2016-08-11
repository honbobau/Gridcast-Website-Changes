import React from 'react';

class Services extends React.Component {

  render() {
    return(
      <div id='services'>
        {/* header */}
        <div className='row'>
          <div className='column large-12' id='services-header'>
            <h4>Our Services</h4>
            <p className='blue'>We are a full service organization, operating to service our client’s marketing and branding objectives.</p>
          </div>
        </div>

        <hr />

        {/* services - planning + consulting */}
        <div className='row services-align'>
          <div className='column large-3'>
            <img src='../../images/services/consult_big.png' />
          </div>

          <div className='column large-9 services-info'>
            <h4>Planning + Consulting</h4>
            <p className='blue'>Thought Leadership</p>
            <p>As consultants, we assess your requirements, formulate a strategic plan, and build accordingly to ensure all your objectives are met. The plan represents a detailed assessment of your needs, a digital content strategy, an implementation plan, and a list of equipment and software essential for deployment. We really pride ourselves in being able to provide the most value to our clients.
            </p>
          </div>
        </div>      

        <hr />

        {/* services - design + development */}
        <div className='row services-align'>
          <div className='column large-3'>
            <img src='../../images/services/design_big.png' />
          </div>

          <div className='column large-9 services-info'>
            <h4>Design + Development</h4>
            <p className='blue'>Out-of-the-Box Thinking</p>
            <p>We will help you design, develop, test and deploy creative content with the right messages to effectively target and engage your customers. After deployment, we will manage your content assets and schedule content play.
            </p>
          </div>
        </div>

        <hr />

        {/* services - procurement + sourcing */}
        <div className='row services-align'>
          <div className='column large-3'>
            <img src='../../images/services/procure_big.png' />
          </div>

          <div className='column large-9 services-info'>
            <h4>Procurement + Sourcing</h4>
            <p className='blue'>Best Fit Technology</p>
            <p>Based on the strategic plan and digital content strategy we create for you, we will recommend and source the best fit technology for the application. This includes all the necessary hardware and software to allow your content to run smoothly, ensuring a successful installation.
            </p>
          </div>
        </div>

        <hr />

        {/* services - project management */}
        <div className='row services-align'>
          <div className='column large-3'>
            <img src='../../images/services/proj_man_big.png' />
          </div>

          <div className='column large-9 services-info'>
            <h4>Project Management</h4>
            <p className='blue'>Careful Execution</p>
            <p>We make it a priority to maintain constant communication with you through the planning stages of your project and will provide support services to ensure your project plan is executed on time and on budget. We are extremely disciplined from start to finish and execute our tasks to perfection to make sure your needs are fulfilled every single time.
            </p>
          </div>
        </div>

        <hr />

        {/* services - network operations */}
        <div className='row services-align'>
          <div className='column large-3'>
            <img src='../../images/services/network_big.png' />
          </div>

          <div className='column large-9 services-info'>
            <h4>Network Operations</h4>
            <p className='blue'>Full Support</p>
            <p>Smart content management is the heart of all networks and we commit ourselves to providing full monitoring and technical support for your network to ensure maximum uptime. We will schedule content playlists for you and can provide weekly reports, proof of play, and metrics to gauge success.
            </p>
          </div>
        </div>

        <hr />

      </div>
    );
  }

}

export default Services;
