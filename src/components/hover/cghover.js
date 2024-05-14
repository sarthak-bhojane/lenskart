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
                    <label htmlFor="checkbox"> <FontAwesomeIcon icon={faUser} /> &nbsp; Kids</label>
                    <br /><br />
                  </div>
                  <div className="section">
                    <h2>SELECT CATEGORY</h2>
                    <label htmlFor="checkbox">Classic eyeglasses start from $1200</label>
                    <br /><br />
                    <label htmlFor="checkbox">Premium eyeglasses start from $2500</label>
                    <br /><br />
                    <label htmlFor="checkbox">Computer eyeglasses start from $500 <br /> </label>
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
