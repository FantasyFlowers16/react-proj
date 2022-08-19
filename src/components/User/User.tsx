import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { IUser } from '../../types/types'
import {useParams} from 'react-router-dom';
import cx from 'classnames'
import styles from './user.module.scss'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';


export const User: React.ElementType = () => {
  const [user, setUser] = useState<IUser> ()
  const [coords, setCoords] = useState<[number, number] | null>(null)
  const params = useParams();

  useEffect(() => {
    fetchUsers()
  }, [])
  const coordsLeafleat =   useMemo(() => {
      const L = require("leaflet");
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png")
      });
    setCoords( [Number(user?.address.geo.lng), Number(user?.address.geo.lat) ])
    return coords
  }, [user])
  async function  fetchUsers() {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      setUser(response.data)
    } catch (e) {
      console.log('error:',e)
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.photoContainer}>
          <img className={styles.photo} src="../img/profile.png" alt="" />
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.textContainer}>
            <div className={styles.maitTitle}>{user?.name}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>Имя в системе: </div>
            <div className={styles.text}>{user?.username}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>Email: </div>
            <div className={styles.text}>{user?.email}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>Телефон: </div>
            <div className={styles.text}>{user?.phone}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>Website: </div>
            <div className={styles.text}>{user?.website}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>Компания: </div>
            <div className={styles.text}>{user?.company.name}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>Место проживания: </div>
            <div className={styles.text}>{user?.address.city}, {user?.address.street} {user?.address.zipcode}</div>
          </div>
        </div>
      </div>
      {coords && user &&
        <div className={styles.cardComtainer}>
          <MapContainer center={coords} zoom={6} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coords}>
            <Popup>
            {user?.address.city}, {user?.address.street} {user?.address.zipcode} {user?.address.suite}
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      }
    </div>
  )
}
