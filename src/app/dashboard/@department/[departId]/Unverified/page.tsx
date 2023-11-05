'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define interfaces to represent the structure of your response data
interface Teacher {
  _id: string;
  teacher: {
    _id: string;
    name: string;
  };
  description: string;
}

export default function Page() {
  const [responseData, setResponseData] = useState<Teacher[]>([]);

  useEffect(() => {
    // Make an Axios GET request
    axios
      .get("http://localhost:8001/api/department/unverified/qualification/6502c95d9a5663b5e8a0aadb")
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to handle the "Validate" button click
  const handleValidateClick = (qualificationId: string, departmentId: string) => {
    // Define the request object
    const requestObject = {
      qualificationId,
      departmentId,
      option: true,
    };

    // Make a POST request to validate the qualification
    axios
      .post("http://localhost:8001/api/qualification/validate", requestObject)
      .then((response) => {
        // Handle the response as needed
        console.log("Validation response:", response.data);
      })
      .catch((error) => {
        console.error("Error validating qualification:", error);
      });
  };

  return (
    <div>
      <h1>Table of Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Validate</th>
          </tr>
        </thead>
        <tbody>
          {responseData.map((data) => (
            <tr key={data._id}>
              <td>{data.teacher.name}</td>
              <td>{data.description}</td>
              <td>
                <button onClick={() => handleValidateClick(data._id, '6502c95d9a5663b5e8a0aadb')}>
                  Validate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
