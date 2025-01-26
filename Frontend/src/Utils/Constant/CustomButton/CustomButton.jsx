import React from 'react';
import "./CustomButton.css"

const CustomButton = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        padding: '20px',
        minHeight: '50vh',
        marginTop: '20px',
        backgroundColor: '#f5f5f5',
        boxSizing: 'border-box',
        overflow: 'visible',
      }}
    >
      <h1
        style={{
          fontSize: '4vw',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Here is the content
      </h1>

      <img
        src="https://media.istockphoto.com/id/2148746046/photo/medical-personnel-demonstrating-cpr-on-dummy.webp?a=1&b=1&s=612x612&w=0&k=20&c=2PWErzy5JrYAeFqYNouFFyDhCfYau-TbXDIICLvMPK4="
        alt=""
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '10px',
        }}
      />

     
    </div>
  );
}

export default CustomButton;
