import axios from "axios";
import { API_KEY, API_URL } from "@/constants/weather";
import { type LOCATION } from "@/types/weather";

const locationsEndpoint = (cityName: string) => `${API_URL}/search.json?key=${API_KEY}&q=${cityName}`;

export const fetchLocations =  async (cityName: string): Promise<Array<LOCATION>> =>  {
  if (!API_KEY) { // Fake data for testing purpose
    return fakeLocations()
  }

  try {
    const res = await axios.get(locationsEndpoint(cityName))
    return res.data
  } catch(err) {
    console.error('fetchLocations error: ', err)
    return []
  }
}

export const fetchForecast = () => {
  return new Promise(r => setTimeout(r, 2000));
}

function fakeLocations() {
  return [
      {
        "id": 2796590,
        "name": "London, City of London, Greater London, United Kingdom",
        "country": "United Kingdom",
      },
      {
        "id": 2796591,
        "name": "Holborn, Camden, Greater London, United Kingdom",
        "country": "United Kingdom",
      },
      {
        "id": 27965901,
        "name": "London, City of London, Greater London, United Kingdom",
        "country": "United Kingdom",
      },
    ]
}