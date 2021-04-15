import React from 'react';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex justify-content-center align-items-center">
           <div className="col-md-12 text-center">
        <h1 style={{color: '#ffffff', fontSize: '100px', fontWeight: '900'}}> Clean & Green </h1>
        <p style={{fontSize: '25px', color: '#ffffff', letterSpacing: '10px', fontWeight: '700'}} >is our Perfect Dream </p>
        <button style={{fontWeight: '700'}} className="btn btn-success text-uppercase pl-3 font-weight-bold">Contact Us</button>
           </div>
       </main>
    );
};

export default HeaderMain;