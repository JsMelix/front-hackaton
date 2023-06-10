import React, { useEffect, useState } from 'react';
import './SpotPopularesSection.css'; // Importa el archivo CSS de estilos

const SpotPopularesSection = () => {
  const [spotPopularesData, setSpotPopularesData] = useState([]);

  useEffect(() => {
    const fetchSpotPopularesData = async () => {
      try {
        const response = await fetch('https://api.example.com/spot-populares', {
          headers: {
            'Authorization': 'J6L5YY74CJ4T4APR' // Agrega tu API key aquí
          }
        });

        if (response.ok) {
          const data = await response.json();
          setSpotPopularesData(data);
        } else {
          console.error('Error al obtener los datos de Spot Populares');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud de API', error);
      }
    };

    fetchSpotPopularesData();
  }, []);

  return (
    <div className="spot-populares-section">
      {/* Mostrar los datos de Spot Populares */}
    </div>
  );
}

export default SpotPopularesSection;
