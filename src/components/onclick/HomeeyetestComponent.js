import React from 'react';

function HomeeyetestComponent() {
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
        border: '1px solid #ccc',
        padding: '5px',
        marginBottom: '20px',
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    };

    const glassesImage2 = {
        backgroundImage: `url("https://static1.lenskart.com/media/desktop/img/HomeTryOut.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '650px',
        height: '430px',
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                {/* Left box containing cards with images */}
                <div>
                    {/* First row with two cards */}
                    <div style={rowStyle}>
                        {/* First card */}
                        <div style={{ ...cardStyle, marginRight: '20px' }}>
                            <div style={{ ...glassesImage2 }}></div>
                        </div>
                    </div>
                </div>
                {/* Right box containing text */}
                <div style={textContainerStyle1}>
                    <strong style={{ fontSize: '44px' }}>Get your eyes checked at home</strong>
                    <p> A certified refractionist will visit you with latest eye testing machines & 100 trial frames</p>
                    <button style={buttonStyle1}> Book appointment</button>
                </div>
            </div> 
        </div>    
    );
}

export default HomeeyetestComponent;