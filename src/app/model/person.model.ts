export interface Person {
    id: number;
    name: string;
    age: number;
    homeAddress: Address;
    workAddress: Address;
    phones: string[]
}

export interface Address {
    street: string;
    city: string;
    country: string;
}