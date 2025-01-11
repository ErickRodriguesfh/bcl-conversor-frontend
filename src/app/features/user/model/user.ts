export class User {
  username: string;
  password: string;
  sector: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  gender: string;
  ramal: number;
  position: string;
  birthDate: Date;

  constructor(
    username: string,
    password: string,
    sector: string,
    name: string,
    email: string,
    gender: string,
    ramal: number,
    position: string,
    createdAt: Date,
    updatedAt: Date,
    birthDate: Date
  ) {
    this.username = username;
    this.password = password;
    this.sector = sector;
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.ramal = ramal;
    this.position = position;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.birthDate = birthDate;
  }
}
