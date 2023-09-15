export function setItem(key: string, value: string) {
   if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
   }
}

export function getItem(key: string) {
   if (typeof window !== "undefined") {
      return localStorage.getItem(key);
   }
   return null;
}