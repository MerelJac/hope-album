import React from "react";
import {useFetch} from "../hooks/useFetch";

export default function Homepage() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/artists");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
    console.log(data.data)
  return (
    <div>
      {data.data.map((artist) => (
        <div key={artist.id}>
          <p>Name: {artist.attributes.Name}</p>
          <p>Discipline: {artist.attributes.Discipline}</p>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
}
