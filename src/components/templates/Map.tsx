import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  return (
    <div className=" m-12 md:m-0  flex justify-center items-center ">
      <MapContainer 
        center={[51.505, -0.09]} 
        zoom={13} 
        className="h-custom w-80 md:w-custom shadow-lg rounded-lg"
      >
      
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        
        <Marker position={[51.505, -0.09]}>
          <Popup>📍 Hello from London!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
