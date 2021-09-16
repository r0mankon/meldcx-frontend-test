import { getToken } from '../libs/storage';
import { URL } from './config';

type Info = {
   name: string;
   email: string;
   repoUrl: string;
   message: string;
};

export default async function notify(info: Info) {
   const token = getToken();

   return await fetch(`${URL}/notify`, {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
      },
   }).then(res => res.text());
}
