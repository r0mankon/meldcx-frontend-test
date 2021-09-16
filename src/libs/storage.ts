export function setItem(key: string, value: any) {
   localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string) {
   return JSON.parse(localStorage.getItem(key)!);
}

const token_key = 'meldCX';

export function setToken(value: any) {
   return setItem(token_key, value);
}

export function getToken() {
   return getItem(token_key);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   setItem,
   getItem,
   setToken,
   getToken,
};
