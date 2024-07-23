import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CropType = () => {
  const [cropTypes, setCropTypes] = useState([]);

  useEffect(() => {
    axios.get('https://agro-admin-dashboard-api.vercel.app/api/crop-types')
      .then(response => setCropTypes(response.data))
      
      .catch(error => console.error(error));
  }, []);


  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {cropTypes.map(type => (
          <tr key={type.id}>
            <td>{type.id}</td>
            <td>{type.name}</td>
            {/* <td>{type.crop_type}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CropType;