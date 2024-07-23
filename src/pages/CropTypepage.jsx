import React, { useState, useEffect } from 'react';
import { getcroptypes} from "../api/croptype";
import Table from "../components/Table"; 

const CropTypePage = () => {
  const [croptype, setcroptype] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getcroptypes();
        console.log("Data fetched:", data);

        const data1 = data.map(item => {
          return {
            "id": item.id,
            "name": item.name,
          
          };
        });
        console.log(data1);

        setcroptype(data1);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Table
        headers={[
          "id",
          "name"
         
        ]}
        data={croptype}
      />
    </>
  );
};

export default CropTypePage;
