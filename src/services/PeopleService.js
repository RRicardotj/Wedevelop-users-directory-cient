import Http, { ENDPOINT } from './Http';

const { PEOPLE } = ENDPOINT;

export default {
  listPeople() {
    return Http.get(`${PEOPLE}`);
  },
  getPeopleByName(name) {
    return Http.get(`${PEOPLE}/by-name/${name}`);
  },
};