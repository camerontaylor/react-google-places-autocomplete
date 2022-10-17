/// <reference types="google.maps" />
import { LoaderOptions } from '@googlemaps/js-api-loader';
import { Props, OptionTypeBase } from 'react-select';
import LatLngLiteral = google.maps.LatLngLiteral;
export declare type GooglePlacesAutocompleteHandle = {
    getSessionToken: () => google.maps.places.AutocompleteSessionToken | undefined;
    refreshSessionToken: () => void;
};
export interface LatLng {
    lat: number;
    lng: number;
}
export interface AutocompletionRequest {
    bounds?: [LatLng | LatLngLiteral, LatLng | LatLngLiteral] | google.maps.LatLngBounds;
    componentRestrictions?: {
        country: string | string[];
    };
    location?: LatLng;
    offset?: number;
    radius?: number;
    types?: string[];
}
export interface GooglePlacesAutocompleteProps {
    apiKey?: string;
    apiOptions?: Partial<LoaderOptions>;
    autocompletionRequest?: AutocompletionRequest;
    filter?: (prediction: google.maps.places.AutocompletePrediction) => boolean;
    debounce?: number;
    minLengthAutocomplete?: number;
    onLoadFailed?: (error: Error) => void;
    selectProps?: Props<OptionTypeBase>;
    withSessionToken?: boolean;
}
