
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Crop = ({ cropTypeId }) => {
  const [crops, setCrops] = useState([]);
  const [cropTypes, setCropTypes] = useState([]);
  const [selectedCropType, setSelectedCropType] = useState('');

  useEffect(() => {
    axios.get('https://agro-admin-dashboard-api.vercel.app/api/crop-types')
      .then(response => setCropTypes(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const url = selectedCropType 
      ? `https://agro-admin-dashboard-api.vercel.app/api/crops?crop_type_id=${selectedCropType}` 
      : 'https://agro-admin-dashboard-api.vercel.app/api/crops';

    axios.get(url)
      .then(response => setCrops(response.data))
      .catch(error => console.error(error));
  }, [selectedCropType]);

  return (
    <div>
      <select onChange={e => setSelectedCropType(e.target.value)} value={selectedCropType}>
        <option value=''>All</option>
        {cropTypes.map(type => (
          <option key={type.id} value={type.id}>{type.name}</option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {crops.map(crop => (
            <tr key={crop.id}>
              <td>{crop.id}</td>
              <td>{crop.name}</td>
              <td>{crop.type.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crop;
