import React, { useState, useEffect } from "react";
import { getcrops } from "../api/crop";
import Table from "../components/Table";

const CropPage = () => {
  const [crop, setcrop] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getcrops();
        console.log("Data fetched:", data);

        const data1 = data.map(item => {
          return {
            "id": item.id,
            "name": item.name,
            "crop_type_id":item.crop_type_id
          
          };
        });
        console.log(data1);

        setcrop(data1);
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
          "name",
          "crop_type_id"
         
        ]}
        data={crop}/>
    </>
  );
};

export default CropPage;
