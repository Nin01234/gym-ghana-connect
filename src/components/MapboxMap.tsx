import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';

// Ghana gym locations
const ghanaGyms = [
  { name: "Accra Fitness Center", lat: 5.6037, lng: -0.1870, address: "East Legon, Accra", phone: "+233 302 123 456" },
  { name: "Kumasi Sport Complex", lat: 6.6885, lng: -1.6244, address: "Asokwa, Kumasi", phone: "+233 322 234 567" },
  { name: "Tema Gym Plus", lat: 5.6698, lng: -0.0166, address: "Community 1, Tema", phone: "+233 303 345 678" },
  { name: "Cape Coast Fitness", lat: 5.1053, lng: -1.2466, address: "Cape Coast, Central Region", phone: "+233 332 456 789" },
  { name: "Takoradi Power Gym", lat: 4.8845, lng: -1.7554, address: "Takoradi, Western Region", phone: "+233 312 567 890" },
  { name: "Tamale Fitness Hub", lat: 9.4034, lng: -0.8424, address: "Tamale, Northern Region", phone: "+233 372 678 901" }
];

export const MapboxMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [selectedGym, setSelectedGym] = useState<any>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-0.1870, 5.6037], // Accra, Ghana
      zoom: 6.5,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add gym markers
    ghanaGyms.forEach((gym) => {
      const marker = new mapboxgl.Marker({ color: '#22c55e' })
        .setLngLat([gym.lng, gym.lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(`
            <div class="p-2">
              <h3 class="font-bold text-sm">${gym.name}</h3>
              <p class="text-xs text-gray-600">${gym.address}</p>
              <p class="text-xs text-gray-600">${gym.phone}</p>
            </div>
          `)
        )
        .addTo(map.current!);

      marker.getElement().addEventListener('click', () => {
        setSelectedGym(gym);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]);
          
          if (map.current) {
            // Add user location marker
            new mapboxgl.Marker({ color: '#3b82f6' })
              .setLngLat([longitude, latitude])
              .setPopup(new mapboxgl.Popup().setHTML('<div class="p-2"><h3 class="font-bold text-sm">Your Location</h3></div>'))
              .addTo(map.current);
            
            // Zoom to user location
            map.current.flyTo({
              center: [longitude, latitude],
              zoom: 12
            });
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  if (!mapboxToken) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-muted rounded-lg">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Mapbox Token Required
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Enter your Mapbox public token to view the gym locations map.
            </p>
            <Input
              type="password"
              placeholder="Enter Mapbox token..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Get your token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <Button onClick={getCurrentLocation} variant="outline">
          <Navigation className="w-4 h-4 mr-2" />
          Find My Location
        </Button>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div ref={mapContainer} className="w-full h-[600px] rounded-lg shadow-lg" />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Gym Locations in Ghana</h3>
          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {ghanaGyms.map((gym, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-colors ${selectedGym?.name === gym.name ? 'border-primary' : ''}`}
                onClick={() => {
                  setSelectedGym(gym);
                  if (map.current) {
                    map.current.flyTo({
                      center: [gym.lng, gym.lat],
                      zoom: 14
                    });
                  }
                }}
              >
                <CardContent className="p-4">
                  <h4 className="font-semibold text-sm">{gym.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{gym.address}</p>
                  <p className="text-xs text-muted-foreground">{gym.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};