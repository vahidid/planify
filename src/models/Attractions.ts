export interface Attraction {
  id: number;
  name: string;
  city: string;
  country: string;
  entry_price: string;
  address: string;
  opening_time: string;
  closing_time: string;
  categories: string[];
  images: string[];
  coordinates: Coordinates;
}

export interface Coordinates {
  lat: number;
  lon: number;
}
