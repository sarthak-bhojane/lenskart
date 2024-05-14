import React from 'react';

function Storelocator() {
    const buttonStyle1 = {
        backgroundColor: 'white',
        color: 'black',
        padding: '10px 20px',
        border: '1px solid black',
        borderRadius: '25px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        width: '52%',
        justifyContent: 'center',
    };

    const textContainerStyle1 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '585px',
        padding: '20px',
        backgroundColor: 'white',
        marginTop: '12px',
    };

    const cardStyle = {
        // border: '1px solid #ccc',
        padding: '5px',
        marginBottom: '20px',
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    };

    const glassesImage2 = {
        backgroundImage: `url("https://static.lenskart.com/media/desktop/img/Ahmedabad1.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '86px',
        height: '80px',
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                {/* Left box containing cards with images */}

                {/* Right box containing text */}
                <div style={textContainerStyle1}>
                    <strong style={{ fontSize: '37px' }}>Over 1100+ Lenskart Store</strong>
                    <p> Experience eyewear in a whole new way: Visit your nearest store and treat yourself to 5000+ eyewear styles.</p>
                    <button style={buttonStyle1}>Locate a Store</button>
                </div>

                <div>
                    <div>
                        {/* First row with cards and text */}
                        <div style={rowStyle}>
                            {/* First card with text */}
                            <div style={{ ...cardStyle, marginRight: '20px' }}>
                                <div style={{ ...glassesImage2 }}></div>
                                <div>Delhi</div>
                            </div>
                            

                            {/* Second card with text */}
                            <div style={{ ...cardStyle, marginRight: '20px' }}>
                                <div style={{ ...glassesImage2 }}></div>
                                <div>Bangalore</div>
                            </div>
                           

                            {/* Third card with text */}
                            <div style={{ ...cardStyle, marginRight: '20px' }}>
                                <div style={{ ...glassesImage2 }}></div>
                                <p>Mumbai</p>
                            </div>
                           

                            {/* Fourth card with text */}
                            <div style={{ ...cardStyle, marginRight: '20px' }}>
                                <div style={{ ...glassesImage2 }}></div>
                                <p>Ahmedabad</p>
                            </div>
                         

                            {/* Fifth card with text */}
                            <div style={{ ...cardStyle, marginRight: '20px' }}>
                                <div style={{ ...glassesImage2 }}></div>
                                <p>Chennai</p>
                            </div>
                           

                            {/* Sixth card with text */}
                            <div style={{ ...cardStyle, marginRight: '20px' }}>
                                <div style={{ ...glassesImage2 }}></div>
                                <p>Hyderabad</p>
                            </div>
                           

                            {/* Seventh card with text */}
                            <div style={{ ...cardStyle, marginRight: '20px' }}>
                                <div style={{ ...glassesImage2 }}></div>
                                <p>1100+ Cities</p>
                            </div>
                           
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Storelocator;