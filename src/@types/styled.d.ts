declare module '*.otf';

declare interface Paginated<T> {
  page: number;
  results: T;
  total: number;
  limit: number;
}

declare interface LatLng {
  lat: number;
  lng: number;
}

declare type Translator = Record<string, string>;
