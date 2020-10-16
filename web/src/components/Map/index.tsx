import Link from 'next/link';
import { Map, MapProps, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet, { LeafletMouseEvent }  from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { LinkContainer, ArrowRightIcon } from './styles';

import mapMarkerImg from '../../images/map-marker.svg'

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
}

interface MyMapProps extends Omit<MapProps, "children"> {
  token?: string;
  orphanages?: IOrphanage[];
  interactive?: boolean;
  selectedPosition?: {
    latitude: number,
    longitude: number,
  };
  onClick?: (event: LeafletMouseEvent) => void;
}

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [178, 2]
})

export default function MyMap({
  token,
  orphanages,
  interactive = true,
  selectedPosition = {
    latitude:0,
    longitude:0
  },
  onClick,
  ...rest
}: MyMapProps) {
  return (
    <Map
      onClick={onClick}
      {...rest}
    >
      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm9zb2FyZXMiLCJhIjoiY2tnNzR1ZDcyMDN0bzJycnczb2pkaXVociJ9.2cnE5DOhsfAATODYelvRsg`} />

      {selectedPosition.latitude !== 0 && (
        <Marker interactive={false} icon={mapIcon} position={[selectedPosition.latitude, selectedPosition.longitude]} />
      )}

      {orphanages && orphanages.map(orphanage => (
        <Marker
          key={orphanage.id}
          icon={mapIcon}
          interactive={interactive}
          position={[orphanage.latitude, orphanage.longitude]}
        >
          <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup">
            {orphanage.name}
            <LinkContainer>
              <Link href={`/orphanages/${orphanage.id}`} passHref >
                <ArrowRightIcon />
              </Link>
            </LinkContainer>
          </Popup>
        </Marker>
      ))}
    </Map>
  )
}
