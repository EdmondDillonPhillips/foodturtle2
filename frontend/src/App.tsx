import React from 'react';

export default function App() {
  const [screen, setScreen] = React.useState<'welcome' | 'scanning'>('welcome');

  if (screen === 'welcome') {
    return (
      <div style={{
        height: '100vh',
        backgroundColor: '#000814',
        color: '#00FF88',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4rem',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{
          fontSize: '8rem',
          fontWeight: 'bold',
          margin: 0,
          textAlign: 'center'
        }}>
          Welcome to Food Turtle
        </h1>

        <button
          onClick={() => setScreen('scanning')}
          style={{
            marginTop: '4rem',
            padding: '3rem 8rem',
            fontSize: '5rem',
            backgroundColor: '#00A86B',
            color: 'white',
            border: 'none',
            //borderRadius: '2 rem solid #00FF88',
            borderRadius: '2rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 0 50px rgba(0,255,136,0.5)'
          }}
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#000814',
      color: '#00FF88',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '6rem'
    }}>
      Scanning Screen — Ready!
    </div>
  );
}