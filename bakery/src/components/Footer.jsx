import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import { RiFullscreenLine } from "react-icons/ri";
import { IoIosMan } from "react-icons/io";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Footer() {
  const redMarker = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const handleFullscreen = () => {
    const mapElement = document.getElementById("my-map");
    if (mapElement.requestFullscreen) {
      mapElement.requestFullscreen();
    } else if (mapElement.webkitRequestFullscreen) {
      mapElement.webkitRequestFullscreen();
    } else if (mapElement.msRequestFullscreen) {
      mapElement.msRequestFullscreen();
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="flex flex-row justify-between px-28 pt-12">
        <div>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Team</li>
            <li>FAQs</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <p className="text-[25px] font-[500]">Contact</p>
          <div className="flex flex-col gap-2 pt-3">
            <p>Sidhartha chowk-8</p>
            <p>Pokhara, Nepal</p>
            <p>+977-[0]61-428793</p>
          </div>
        </div>

        <div
          className="relative w-[458px] h-[265px] rounded-lg overflow-hidden shadow-md border z-0"
          id="my-map"
        >
          <MapContainer
            center={[49.67, 11.05]}
            zoom={10}
            scrollWheelZoom={true}
            zoomControl={false}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://opentopomap.org/">OpenTopoMap</a>'
            />

            <Marker position={[49.67, 11.05]} icon={redMarker}>
              <Popup>Example Location</Popup>
            </Marker>

            <ZoomControl position="bottomright" />
          </MapContainer>

          <IoIosMan className="absolute rounded-sm w-[32px] h-[40px] bg-white bottom-[120px] right-[10px] text-[#E49400] z-[1000]" />

          <div className="absolute text-center top-[10px] left-[10px] bg-white px-4 py-1 rounded shadow z-[1000]">
            <p className="font-[600] text-gray-700">Map</p>
          </div>

          <div
            onClick={handleFullscreen}
            className="absolute top-[10px] right-[10px] z-[1000] bg-white rounded shadow p-2 cursor-pointer"
          >
            <RiFullscreenLine className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between px-28 pt-20 pb-12">
        <p>Copyright @ 2021 GrandmaBakery</p>

        <div className="flex gap-4 mt-3 text-2xl">
          <FaFacebookF className="text-[#4C7AEF]" />
          <FaYoutube className="text-[#DF2424]" />
          <AiFillInstagram className="text-[#E9E9E9]" />
        </div>

        <p className="mt-3 md:mt-0">Created by Brandbuilder</p>
      </div>
    </footer>
  );
}

export default Footer;
