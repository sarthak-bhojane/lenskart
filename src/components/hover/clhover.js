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
                    <h2>Brands</h2>
                    <label htmlFor="checkbox">Aqualens</label>
                    <br /><br />
                    <label htmlFor="checkbox">Bausoh Lomb</label>
                    <br /><br />
                    <label htmlFor="checkbox">Iconnoect </label>
                    <label htmlFor="checkbox">Alcon </label>
                  </div>

                  <div className="section">
                    <span>

                      <h2>Explore By Disposablity</h2>
                    </span>
                    <label htmlFor="radio">Monthly</label>
                    <label htmlFor="radio">Day & Night</label>
                    <label htmlFor="radio">Daily</label>
                    <label htmlFor="radio">Yearly Eyeglasses</label>
                    <label htmlFor="radio">Bi-weekly</label>
                    <br /><br />

                  </div>

                  <div className="section">
                    <h2>Explore By Power</h2>
                    <label htmlFor="checkbox">Spherical-(CYL-0.5)</label>
                    <label htmlFor="checkbox">Spherical-(CYL-0.5)</label>
                    <label htmlFor="checkbox">Cylindrical Power(-0.75)</label>
                    <label htmlFor="checkbox">Toric Power</label>
                    <br /><br />
                  </div>


                  <div className="section">
                    <h2>Explore By Color</h2>

                    <label htmlFor="checkbox">Green</label>
                    <label htmlFor="checkbox">Blue</label>
                    <label htmlFor="checkbox">Brown</label>
                    <label htmlFor="checkbox">Turquoise</label>
                    <label htmlFor="checkbox">View all colors</label>
                    <br /><br />
                  </div>



                  <div className="section">
                    <h2>Solution</h2>
                    <label htmlFor="checkbox">Small</label>
                    <label htmlFor="checkbox">Large</label>
                    <label htmlFor="checkbox">View all Solution</label>
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
