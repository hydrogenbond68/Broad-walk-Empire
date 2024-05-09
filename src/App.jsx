import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LogIn from "./components/Users";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Users from "./components/Users";
import Property from"./components/Property";

export const PropertyDetails = ({ property }) => {
  return (
    <div className="property-details-page">
      <h1 className="property-title">{property.title}</h1>
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
        <div className="map-container">
          <div className="map-canvas" id="map"></div>
        </div>
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

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <LogIn/>
        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Property />
        <Filter />
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return <SearchBar />;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
