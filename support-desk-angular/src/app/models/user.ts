export interface ApiResponse {
  users: User[];
}

export interface User {
  "firstName": string,
  "lastName": string,
  "available": boolean,
  "phone": number,
  "email": string,
  "image": string
  "location": string
}
