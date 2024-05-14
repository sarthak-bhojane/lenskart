import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Computerglasses = () => {
    // Define an object for the glasses image
    const glassesImage = {
        backgroundImage: `url("https://static1.lenskart.com/media/desktop/img/2024/apr/vibe-badlo/desktop-plp-vc-eye.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '1345px', // Adjust the width as needed
        height: '150px', // Adjust the height as needed
    };

    const glassesImage2 = {
        backgroundImage: `url("https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-gold-full-rim-rectangle-lenskart-air-essentials-la-e13517-c2-eyeglasses_csvfile-1695816767916-g_7546_27_09_2023.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '200px', // Adjust the width as needed
        height: '200px', // Adjust the height as needed
        marginBottom: '20px', // Add margin bottom to separate cards
    };

    // Define styles for the cards
    const cardStyle = {
        border: '1px solid #ccc', // Add border to the card
        padding: '5px',
        marginBottom: '20px', // Add margin bottom to separate cards
    };
    // Define styles for the row
    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap', // Allow flex items to wrap to the next line
        justifyContent: 'space-between',
    };

    const paraContainer = {
        display: 'flex',
    };


    const cardStyle1 = {
        border: '1px solid #ccc', // Add border to the card
        padding: '5px',
        marginBottom: '2px', // Add margin bottom to separate cards
    };
    const rowStyle1 = {
        display: 'flex',
        flexWrap: 'wrap', // Allow flex items to wrap to the next line
        justifyContent: 'space-between',
    };



    const containerStyle = {
        display: 'contents',
        justifyContent: 'space-between',
    };
    const sectionStyle = {
        flexBasis: '30%', // Adjust the width of each section as needed
        textAlign: 'center',
    };
    const buttonStyle = {
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };
    const dropdownStyle = {
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };
    //on/off button


    return (
        <div>
            {/* First section with banner image and text */}
            <br />
            <div style={paraContainer}>
                <p style={{ marginRight: '40%' }}> &nbsp;Eyewear/Eyeglasses/Collections/Computer Glasses</p>
                <p>Problem in placing order? Give a missed call 1800-202-4444</p>
            </div>  <br />
            <div style={glassesImage}></div> {/* Use the object for the glasses image */}


            {/* Second section with sidebar, glasses image, and data */}
            <div style={{ display: 'flex', marginTop: '20px' }}>
                {/* Sidebar */}
                <div style={{ width: '400px', marginRight: '100px' }}>

                    <h3>AGE GROUP</h3> <br />
                    <label>  <input type="checkbox" name="ageGroup" value="2-5 yrs" /> 2-5 yrs (50) </label> <br />
                    <label> <input type="checkbox" name="ageGroup" value="5-8 yrs" /> 5-8 yrs (141)  </label>
                    <br /><br />

                    <h3>FRAME TYPE</h3> <br />
                    <div style={rowStyle1}>
                        {/* Glasses Cards */}
                        <div style={cardStyle1}>
                            <FontAwesomeIcon icon={faGlasses} /> &nbsp;
                            <div>
                                <p>Full Rim</p>
                            </div>
                        </div>
                        <div style={cardStyle1}>
                            <FontAwesomeIcon icon={faGlasses} /> &nbsp;
                            <div>
                                <p>Half Rim</p>
                            </div>
                        </div>
                        <div style={cardStyle1}>
                            <FontAwesomeIcon icon={faGlasses} /> &nbsp;
                            <div>
                                <p>Rimless</p>
                            </div>
                        </div>
                    </div>
                    <br />

                    <h3>FRAME SHAPE</h3> <br />
                    <div style={rowStyle1}>
                        {/* Glasses Cards */}
                        <div style={cardStyle1}>
                            <FontAwesomeIcon icon={faGlasses} /> &nbsp;
                            <div>
                                <p>Rectangle</p>
                            </div>
                        </div>
                        <div style={cardStyle1}>
                            <FontAwesomeIcon icon={faGlasses} /> &nbsp;
                            <div>
                                <p>Round</p>
                            </div>
                        </div>
                        <div style={cardStyle1}>
                            <FontAwesomeIcon icon={faGlasses} /> &nbsp;
                            <div>
                                <p>Square</p>
                            </div>
                        </div>
                    </div>
                    <br />

                    <h3>FRAME COLOR</h3> <br />
                    <label>  <input type="checkbox" name="ageGroup" value="2-5 yrs" /> Black(836) </label> <br />
                    <label> <input type="checkbox" name="ageGroup" value="5-8 yrs" /> Blue(384)  </label> <br />
                    <label> <input type="checkbox" name="ageGroup" value="5-8 yrs" /> Gold(368)</label>
                    <br /><br />

                    <h3>BRANDS</h3>
                    <p>John Jacobs(1121)</p>
                    <p>Vincent Chase(514)</p>
                    <p>Vincent Chase Polarized(399)</p>
                    {/* Add more sidebar data */}
                </div>
                <br />





                <div style={containerStyle}>
                    {/* First section - Sunglasses */}
                    <div style={sectionStyle}>
                        <h3>Sunglasses</h3>
                    </div>
                    {/* Second section - Button with text "View Frame" */}
                    <div className="form-check form-switch">
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">VIEW FRAMES</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">VIEW 3D TRY ON</label>
                    </div>
                    {/* Third section - Dropdown button with text "Sort By" */}
                    <span className="dropdown">
                        <label htmlFor="fname">State of supply</label>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </span>
                </div>

                {/* Glasses Cards */}
                <div style={rowStyle}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                        <div key={index} style={cardStyle}>
                            <div style={{ ...glassesImage2 }}></div>
                            <div>
                                <p>Rating: 4.7 - 148 by people</p>
                                <h3>Lenskart Air</h3>
                                <p>Size: Medium • Air Essentials</p>
                                <p>₹1700</p>
                                <p>Get For ₹1200. Coupon: SINGLE</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Computerglasses;
