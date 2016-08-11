import React from 'react';

class Index extends React.Component {

  render() {
    return(
      <div id='index'>

        {/* slider */}
        <div className='row'>
          <div className='columns large-12' id='index-slider-container'>
            <img src='../../images/index/slider0.jpg' />
          </div>
        </div>

        {/* whatwedo */}
        <div className='row'>
          <div className='columns large-12'>
            <ul id='index-whatwedo' className='small-block-grid-2 large-block-grid-5'>
              <li>
                <img src='../../images/index/consult_big.png' />
                <h5>Planning + Consulting</h5>
              </li>

              <li>
                <img src='../../images/index/design_big.png' />
                <h5>Design + Develop</h5>
              </li>

              <li>
                <img src='../../images/index/procure_big.png' />
                <h5>Procurement + Sourcing</h5>
              </li>

              <li>
                <img src='../../images/index/proj_man_big.png' />
                <h5>Project Management</h5>
              </li>
              
              <li>
                <img src='../../images/index/network_big.png' />
                <h5>Network Operations</h5>
              </li>
            </ul>  
          </div>
        </div>

        <br />

        <hr />
      </div>
    );
  }

}

export default Index;