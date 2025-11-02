import { useRef } from "react";
import { MapContainer, TileLayer, useMap, ZoomControl } from "react-leaflet"
import { MdFullscreen } from "react-icons/md";
import 'leaflet/dist/leaflet.css'

function MyLocation(){
    // const map=useMap();

    const handleClick=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((pos)=>{
                const {latitude,longitude}=pos.coords;
                map.setView([latitude,longitude],15);
            },
            ()=>alert ('دسترسی به موقعیت ممکن نیست')
        );
        }
    }

    return(
        <button onClick={handleClick} className=" bg-white shadow p-2 hover:bg-gray-100 transition absolute right-[450px] top-[1280px] -translate-y-1/2 text-lg w-20" title="my location">Map</button>
    )
}

function FullScreenButton(){
    const mapContainerRef=useRef(null);

    const handleFullScreen=()=>{
        const el=mapContainerRef.current || document.querySelector('.leaflet-container');
        if (el.requestFullscreen)
            el.requestFullscreen()
    }

    return(
        <div>
        <button onClick={handleFullScreen} className="bg-white shadow p-1 hover:bg-gray-100 transition absolute right-[110px] top-[1280px] -translate-y-1/2 text-3xl"><MdFullscreen /></button>
        </div>
    )
}

function CustomZoomControls(){
    // const map=useMap();
    

    const handleZoomIn=()=>{
        map.zoomIn();
    }
        const handleZoomOut=()=>{
            map.zoomOut();
        }
        return(
            <div>
                <button onClick={handleZoomIn} className="bg-white shadow p-1 hover:bg-gray-100 transition absolute right-[105px] top-[1440px] -translate-y-1/2 text-4xl text-gray-500 font-semibold">+</button>
                <button onClick={handleZoomOut} className="bg-white shadow p-1 hover:bg-gray-100 transition absolute right-[105px] top-[1480px] -translate-y-1/2 text-4xl text-gray-500 font-semibold w-8">-</button>
            </div>
        )
}

function MapWithControls(){
    return(
        <div>
        <MapContainer center={[35.6892,51.3890]} zoom={13} zoomControl={false} className=" h-full w-full rounded">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <ZoomControl position="bottomright"/>
            </MapContainer>

                <CustomZoomControls/>
                <MyLocation/>
                <FullScreenButton/>
            <div>
            </div>
        </div>
    )
}
export default MapWithControls
