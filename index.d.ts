

declare module 'react-native-conekta' {
    export function setPublicKey(publicKey: String) : void;
    export function createToken( info: any, callback: (error: any, result: JSON) => void) : void;
}
