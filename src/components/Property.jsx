import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const PropertyDetails = ({ property }) => {
  const containerStyle = {
    width: '100%',
    height: '500px'
  };

  const center = {
    lat: parseFloat(property.location.split(', ')[0]),
    lng: parseFloat(property.location.split(', ')[1])
  };

  return (
    <div>
      <h1>{property.title}</h1>
      <div className="property-images">
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`Property ${index + 1}`} />
        ))}
      </div>
      <div className="property-info">
        <h3>Description</h3>
        <p>{property.description}</p>
        <h3>Features</h3>
        <ul>
          {property.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3>Location</h3>
        <LoadScript
          googleMapsApiKey="YOUR_API_KEY"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
        <h3>Contact Information</h3>
        <ul>
          <li>Name: {property.contact.name}</li>
          <li>Phone: {property.contact.phone}</li>
          <li>Email: {property.contact.email}</li>
        </ul>
        <h3>Additional Information</h3>
        <p>Asking Price: {property.price}</p>
        <p>Property History: {property.history}</p>
        <p>Disclosures: {property.disclosures}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;