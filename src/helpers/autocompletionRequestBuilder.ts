import { AutocompletionRequest } from '../GooglePlacesAutocomplete.types';

export default (
  autocompletionRequest: AutocompletionRequest,
  input: string,
  sessionToken?: google.maps.places.AutocompleteSessionToken,
): google.maps.places.AutocompletionRequest => {
  const { bounds, location, ...rest } = autocompletionRequest;

  const res: google.maps.places.AutocompletionRequest= {
    input,
    ...rest,
  };

  if (sessionToken) {
    res.sessionToken = sessionToken;
  }

  if (bounds) {
    res.bounds = Array.isArray(bounds)  ? new google.maps.LatLngBounds(bounds[0], bounds[1]) : bounds ;
  }

  if (location) {
    res.location = new google.maps.LatLng(location);
  }

  return res;
};
