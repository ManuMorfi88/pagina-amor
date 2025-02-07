import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleNoClick = () => {
    if (noCount < 4) {
      setNoCount(noCount + 1);
      const newX = Math.random() * 200 - 100; // Mueve el botón en un rango de -100px a 100px en X
      const newY = Math.random() * 200 - 100; // Mueve el botón en un rango de -100px a 100px en Y
      setButtonPosition({ x: newX, y: newY });
    } else {
      setAccepted(true); // Convierte el botón "No quiero" en "Sí quiero"
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-heart">
      <div className="card text-center p-4 shadow-lg" style={{ maxWidth: '500px', background: 'rgba(255, 255, 255, 0.9)' }}>
        {/* Espacio para la foto */}
        <div className="mb-4">
          <img
            src="/diaana.jpg"  // Cambia esta URL por la foto de Diana
            alt="Diana"
            className="img-fluid rounded-circle border border-danger"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>

        <h1 className="text-danger mb-4">💖 Para Diana 💖</h1>
        <p className="lead mb-4">
          Hola Diana,<br />
          Hoy quiero decirte algo que llevo en mi corazón. Eres una persona increíbl. Cada momento que he estado contigo me ha encantado y es especial para mi, y cada vez que te veo me gustas mas.
        </p>
        <p className="h4 mb-4">
          <strong>¿Quieres ser mi San Valentín?</strong>
        </p>
        <p className="mb-4">
          No necesito un día específico para recordar lo mucho que deseo estar contigo, pero este 14 de febrero quiero que seas tú, aunque no estemos cerca o podamos vernos pues podemos hacer llamada y tener una date virtual y ver una peli ahora si jaja.
        </p>
        <p className="h5 text-danger">
          Me gustas mucho, Diana. 💕
        </p>

        {/* Mensaje de aceptación */}
        {accepted && (
          <div className="alert alert-success mt-4">
            <h4>💌 ¡Cita aceptada! 💌</h4>
            <p>Te quiero mucho, Diana. 💖</p>
            <div className="heart-effect">💖</div>
          </div>
        )}

        {/* Botones */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-danger btn-lg heart-beat" onClick={handleAccept}>
            💌 ¡Sí quiero!
          </button>
          <button
            className="btn btn-danger btn-lg "
            onClick={handleNoClick}
            style={{
              transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {noCount < 4 ? 'No quiero' : '¡Sí quiero!'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;