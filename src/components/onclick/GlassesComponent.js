// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGlasses } from '@fortawesome/free-solid-svg-icons';

// const GlassesComponent = () => {
//     // Define styles for the cards
//     const cardStyle = {
//         border: '1px solid #ccc',
//         padding: '5px',
//         marginBottom: '20px',
//         marginRight: '20px', // Add marginRight to create space between cards
//     };

//     // Define styles for the row
//     const rowStyle = {
//         display: 'ruby-base-container',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//     };

//     // Define styles for the glasses images
//     const glassesImage2 = {
//         backgroundImage: `url("https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-gold-full-rim-rectangle-lenskart-air-essentials-la-e13517-c2-eyeglasses_csvfile-1695816767916-g_7546_27_09_2023.jpg")`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         width: '350px',
//         height: '330px',
//         marginBottom: '20px',
//     };
//     const manImage = {
//         backgroundImage: `url("https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1325x636/9df78eab33525d08d6e5fb8d27136e95//model/l/i/blue-block-phone--computer-glasses:-transparent-gold-full-rim-rectangle-lenskart-air-essentials-la-e13517-c2-eyeglasses_13_sep_m-f328617_146012_22_09_2023.jpg")`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         width: '350px',
//         height: '330px',
//         marginBottom: '20px',
//     };
//     const bgStyle = {
//         backgroundColor: rgb(247, 241, 222),
//         background: rgb(247, 241, 222),
//     };

//     return (
//         <div>
//             <br />
//             {/* First section with banner image and text */}
//             <div style={{ display: 'flex' }}>
//                 <p style={{ marginRight: '55%' }}> &nbsp; Eyewear/Eyeglasses</p>
//                 <p>Problem in placing order? Give a missed call 1800-202-4444</p>
//             </div>
//             <br />
//             {/* Second section with sidebar, glasses image, and data */}
//             <div style={{ display: 'flex', marginTop: '20px' }}>
//                 <div style={{ width: '400px', marginRight: '50%' }}>
//                     <div style={rowStyle}>
//                         {/* Glasses Cards */}
//                         <div style={cardStyle}>
//                             <div style={{ ...glassesImage2 }}></div>
//                         </div>
//                         <div style={cardStyle}>
//                             <div style={{ ...glassesImage2 }}></div>
//                         </div>

//                         <div style={cardStyle}>
//                             <h3>Lenskart Air</h3>
//                             <p>Transparent Full Rim Rectangle</p>
//                             <p>Size : Medium</p>
//                             <p>₹1700 (₹1700 with GST)</p>
//                             <p>Frame + Lens</p>
//                             <span style={bgStyle}>
//                                 <p>With Anti-Glare Lenses</p>
//                                 <p>Get it for ₹1200 with coupon: SINGLE</p>
//                             </span>
//                         </div>

//                         <div style={cardStyle}>
//                             <div style={{ ...manImage }}></div>
//                         </div>
//                         <div style={cardStyle}>
//                             <div style={{ ...manImage }}></div>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GlassesComponent;



// import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import React from 'react';
// import { ImTextColor } from 'react-icons/im';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const GlassesComponent = () => {
    // Define styles for the cards
    const cardStyle = {
        border: '1px solid #ccc',
        padding: '5px',
        marginBottom: '20px',
    };

    // Define styles for the row
    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    };

    // Define styles for the glasses images
    const glassesImage2 = {
        backgroundImage: `url("https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-gold-full-rim-rectangle-lenskart-air-essentials-la-e13517-c2-eyeglasses_csvfile-1695816767916-g_7546_27_09_2023.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '350px',
        height: '330px',
    };

    // Define styles for the text container
    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align text to the left
        width: '450px',
        padding: '20px',
        backgroundColor: '#f7f1de', // Adjust background color as needed
        marginTop: '30px',
        borderRadius: '3px',
    };
    const textContainerStyle1 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align text to the left
        width: '485px',
        padding: '20px',
        backgroundColor: 'white', // Adjust background color as needed
        marginTop: '12px',
    };
    const paraContainer = {
        display: 'flex',
    };
    const buttonStyle = {
        backgroundColor: 'turquoise', // Set background color to green
        color: 'white', // Set text color to white
        padding: '10px 20px', // Add padding to the button
        border: 'none', // Remove border
        borderRadius: '5px', // Add border radius
        cursor: 'pointer', // Set cursor to pointer
        width: '102%',
    };

    const buttonStyle1 = {
        backgroundColor: 'white', // Set background color to white
        color: 'black', // Set text color to black
        padding: '10px 20px', // Add padding to the button
        border: '1px solid black', // Remove border
        borderRadius: '5px', // Add border radius
        cursor: 'pointer', // Set cursor to pointer
        display: 'flex', // Use flex display for aligning text and image
        alignItems: 'center', // Align items vertically
        width: '102%',
        justifyContent: 'center',
    };

    // Define styles for the image
    const imageStyle = {
        maxWidth: '30px', // Set max width for the image
        marginLeft: '10px', // Add margin to separate text and image
    };

    
    return (
        <div>
            <div style={paraContainer}>
                <p style={{ marginRight: '33%' }}> &nbsp; Eyewear/Eyeglasses/Brands/Lenskart Air/Transparent Gold Full Rim Rectangle Lenskart Air Essentials LA E13517-C2 Eyeglasses - 146012</p>
                <p>Problem in placing order? Give a missed call 1800-202-4444</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                {/* Left box containing cards with images */}
                <div>
                    {/* First row with two cards */}
                    <div style={rowStyle}>
                        {/* First card */}
                        <div style={{ ...cardStyle, marginRight: '20px' }}>
                            <div style={{ ...glassesImage2 }}></div>
                        </div>
                        {/* Second card */}
                        <div style={cardStyle}>
                            <div style={{ ...glassesImage2 }}></div>
                        </div>
                    </div>
                    {/* Second row with two cards */}
                    <div style={rowStyle}>
                        {/* Third card */}
                        <div style={{ ...cardStyle, marginRight: '20px' }}>
                            <div style={{ ...glassesImage2 }}></div>
                        </div>
                        {/* Fourth card */}
                        <div style={cardStyle}>
                            <div style={{ ...glassesImage2 }}></div>
                        </div>
                    </div>
                </div>


                {/* Right box containing text */}
                <div style={textContainerStyle1}>
                    <p>Lenskart Air &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faHeart} />
                    </p>
                    <strong>Transparent Full Rim Rectangle</strong>
                    <p>Size: Medium</p>
                    <p>₹1700 (₹1700 with GST)</p>
                    <p>Frame + Lens</p>
                    <div style={textContainerStyle}>
                        <p>With Anti-Glare Lenses</p>
                        <p>Get it for ₹1200 with coupon: SINGLE</p>
                    </div> <p></p>
                    <button style={buttonStyle}>
                        SELECT LENSES <br /> (with 1 year warrenty and 14 day return)
                    </button> <p></p>
                    <button style={buttonStyle1}>
                        Try On
                        <img
                            src='https://static1.lenskart.com/media/desktop/img/Mar23/air-ess/airess-2.jpg'
                            alt='Try On'
                            style={imageStyle}
                        />
                    </button>
                    <br /> <p></p> <p></p> <p></p>
                    <p>Technical information</p> <br />
                    <p>Product &nbsp;&nbsp;&nbsp;&nbsp; id146012</p>
                    <p>Model No. &nbsp;&nbsp;&nbsp;&nbsp; LA E13517</p>
                    <p>Frame Size &nbsp;&nbsp;&nbsp;&nbsp; Medium</p>
                    <p>Frame Width &nbsp;&nbsp;&nbsp;&nbsp; 134 mm</p>
                    <p>Frame Dimensions &nbsp;&nbsp;&nbsp;&nbsp; 54-16-148</p>
                    <p>Frame colour &nbsp;&nbsp;&nbsp;&nbsp; Transparent</p>
                    <br /> <p></p> <p></p>

                    <p>Visit Nearby Store</p> <br />
                    <p>Check Delivery Options</p> <br />
                    <p>Review(148)</p> <br />
                </div>
            </div>
        </div>
    );
};

export default GlassesComponent;
