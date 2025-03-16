'use client';

import Map from '@/components/lunch/Map';
import { FOOD_TYPES } from '@/constants/FoodTypes';
import { Coordinate } from '@/types/common';
import { Coffee, MapPin } from '@geist-ui/icons';
import { useEffect, useState, useCallback } from 'react';
import { throttle } from 'radash';
import { PulsatingButton } from '../ui/magicui/pulsating-button';
import InputBox from './InputBox';
import { WordRotate } from '../ui/magicui/word-rotate';
import ToggleBox from './ToggleBox';

type Location = string | null;
type QueryString = string | null;

function NestedMap() {
  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * FOOD_TYPES.length);
    return FOOD_TYPES[randomIndex];
  };

  const [item, setItem] = useState<string>(getRandomItem());
  const [inputItem, setInputItem] = useState<string>('');
  const [coordinate, setCoordinate] = useState<Coordinate | null>(null);
  const [location, setLocation] = useState<Location>(null);
  const [zoom, setZoom] = useState<number>(13);

  const [queryString, setQueryString] = useState<QueryString>(null);
  const [mapType, setMapType] = useState<string>('roadmap');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinate({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error fetching location:', error);
        },
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const updateQueryString = (food: string) => {
    if (!location) {
      setQueryString(`&center=${coordinate?.lat},${coordinate?.lng}&q=${food}`);
    } else {
      setQueryString(`&q=${food}+in+${location}`);
    }
  };

  useEffect(() => {
    if (coordinate) updateQueryString(item);
  }, [coordinate]);

  const throttledRandomSearch = useCallback(
    throttle({ interval: 2000 }, () => {
      const newItem = getRandomItem();
      setItem(newItem);
      updateQueryString(newItem);
    }),
    [coordinate],
  );

  const throttledSearch = useCallback(
    throttle({ interval: 2000 }, () => {
      if (!location || !inputItem) {
        alert('Please input values');
        return;
      }
      setItem(inputItem);
      updateQueryString(inputItem);
    }),
    [coordinate, location, inputItem],
  );

  if (!queryString) return null;

  return (
    <div className="flex flex-col justify-around items-center lg:flex-row space-y-8 lg:space-y-0 lg:space-x-4">
      <Map
        queryString={queryString}
        pcWidth={450}
        pcHeight={400}
        mbWidth={300}
        mbHeight={400}
        zoom={zoom}
        mapType={mapType}
      />
      <div className="w-full flex flex-col justify-around items-center space-y-8">

        <WordRotate
          className="text-4xl font-bold text-black dark:text-white"
          words={['Your Choice', `${item}`]}
        />

        <InputBox
          icon={<MapPin color="grey" />}
          placeholder="address"
          input={location}
          onValueChange={(e) => { setLocation(e.target.value); }}
        />
        <InputBox
          icon={<Coffee color="grey" />}
          placeholder="food type"
          input={inputItem}
          onValueChange={(e) => { setInputItem(e.target.value); }}
        />

        <ToggleBox
          label="Large / Small Scale"
          onValueChange={(e) => {
            if (e.target.checked) {
              setZoom(13);
            } else {
              setZoom(14);
            }
          }}
        />

        <ToggleBox
          label="RoadMap / Satellite"
          onValueChange={(e) => {
            if (e.target.checked) {
              setMapType('roadmap');
            } else {
              setMapType('satellite');
            }
          }}
        />

        <div className="flex space-x-8">
          <PulsatingButton
            className="w-32"
            onClick={throttledRandomSearch}
          >
            Random!
          </PulsatingButton>
          <PulsatingButton
            className="w-32"
            onClick={throttledSearch}
          >
            Search
          </PulsatingButton>
        </div>
      </div>
    </div>
  );
}

export default NestedMap;
