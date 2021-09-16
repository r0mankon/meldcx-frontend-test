import { URL } from './config';

async function getlogIn(user: { email: string; password: string }) {
   const res = await fetch(`${URL}/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
         'Content-Type': 'application/json',
      },
   });

   if (!res.ok) {
      throw new Error(res.statusText);
   }

   return await res.text();
}

export default getlogIn;
