import React from "react";
// import {useFetch} from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";

const ARTISTS_NAME = gql`
  query GetArtists {
    artists {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;

export default function Homepage() {
    const { loading, error, data } = useQuery(ARTISTS_NAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      {data.artists.data.map((artist) => (
        <div key={artist.id}>
          <p>Name: {artist.attributes.Name}</p>
        </div>
      ))}
    </div>
  );
}
