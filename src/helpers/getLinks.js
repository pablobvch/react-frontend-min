import { heroes } from "../data/heroes";

const getLinks = () => heroes.map((heroe) => `/assets/images/${heroe.id}.jpg`);

export { getLinks };
