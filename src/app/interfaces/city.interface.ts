export default interface City {
    id?: string;
    name: string;
    activities: Activities[];
}

interface Activities {
  name: string;
  place: string;
}
