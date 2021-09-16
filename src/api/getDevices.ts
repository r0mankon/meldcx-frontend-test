import { URL } from './config';

export default async function getDevices() {
   return await fetch(`${URL}/devices`).then(res => res.json());
}
