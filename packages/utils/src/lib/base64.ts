export const toBase64 = (value: string): string => globalThis.btoa(encodeURIComponent(escape(value)));

export const fromBase64 = (value: string): string => unescape(decodeURIComponent(globalThis.atob(value)));
