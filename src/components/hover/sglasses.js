import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Hover() {

  return (
    <div className="main">
      <div className="bar">
        <section id="interface">
          <div class="navigation">
            <div class="n1">
              <div>
                <i id="menu-btn" class="fas fa-bars"></i>
                <div className="container">
                  <div className="section">
                    <h2>Frame Type</h2>
                    <label htmlFor="checkbox"> <FontAwesomeIcon icon={faUser} /> &nbsp; Men</label><br /><br />
                    <label htmlFor="checkbox"> <FontAwesomeIcon icon={faUser} /> &nbsp; Women</label><br /><br />
                    <br /><br />
                  </div>
                  <div className="section">
                    <h2>SELECT CATEGORY</h2>
                    <label htmlFor="checkbox">Classic eyeglasses start from $1200</label>
                    <br /><br />
                    <label htmlFor="checkbox">Premium eyeglasses start from $2500</label>
                    <br /><br />
                     </div>

                  <div className="section">
                    <span>

                      <h2>Our Top Picks</h2>
                    </span>
                    <label htmlFor="radio">New Arrival</label>
                    <label htmlFor="radio">Best Seller</label>
                    <label htmlFor="radio">Power Sunglasses</label>
                    <br /><br />

                  </div>

                  <div className="section">
                    <h2>Shape</h2>
                     <label htmlFor="checkbox">Wayfarer Frame</label>
                    <label htmlFor="checkbox">Round Frame</label>
                    <label htmlFor="checkbox">Aviator Frame</label>
                    <label htmlFor="checkbox">Cat Frame</label>
                    <label htmlFor="checkbox">Rimless Frame</label>
                    <br /><br />
                  </div>


                  <div className="section">
                    <h2>Collection</h2>

                    <label htmlFor="checkbox">Maverick</label>
                    <label htmlFor="checkbox">Fasion Essentials</label>
                    <label htmlFor="checkbox">Aerodynamics</label>
                    <label htmlFor="checkbox">Petite Sunglasses</label>
                    <label htmlFor="checkbox">Havana</label>
                    <label htmlFor="checkbox">Weeding Edit</label>
                    <label htmlFor="checkbox">Pilot</label>
                    <br /><br />
                  </div>



                  <div className="section">
                    <h2>Brands</h2>
                    <label htmlFor="checkbox">Vincent Chase</label>
                    <label htmlFor="checkbox">OJOS</label>
                    <br /><br />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>




    </div>
  );
}

export default Hover;
