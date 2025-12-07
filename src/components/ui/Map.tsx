'use client';

import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

interface MapProps {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
}

export default function Map({ lat, lng, zoom = 15, className }: MapProps) {
  const [MapComponent, setMapComponent] = useState<React.ReactNode>(null);

  useEffect(() => {
    // Dynamic import for Leaflet (client-side only)
    const loadMap = async () => {
      const L = await import('leaflet');
      const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
      
      // Fix for default marker icon
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      // Custom icon
      const customIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      setMapComponent(
        <MapContainer
          center={[lat, lng]}
          zoom={zoom}
          scrollWheelZoom={true}
          className="h-full w-full rounded-2xl"
          style={{ minHeight: '400px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]} icon={customIcon}>
            <Popup>
              <div className="text-center p-2">
                <strong className="text-primary-800">Arian Data</strong>
                <br />
                <span className="text-sm text-gray-600">Tehran, Iran</span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      );
    };

    loadMap();
  }, [lat, lng, zoom]);

  return (
    <div className={className}>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
        integrity="sha512-h9FcoyWjHcOcmEVkxOfTLnmZFWIH0iZhZT1H2TbOq55xssQGEJHEaIm+PgoUaZbRvQTNTluNOEfb1ZRy6D3BOw=="
        crossOrigin="anonymous"
      />
      {MapComponent || (
        <div className="h-[400px] w-full rounded-2xl bg-gray-100 dark:bg-primary-900 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3 animate-pulse" />
            <p className="text-gray-500">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
}
