class User {
  constructor(
    public user_id: number,
    public email: string,
    public first_name: string,
    public last_name: string,
    public driver_license: string
  ) {}
}

class Car {
  constructor(
    public car_id: number,
    public license_plate: string,
    public car_type: string,
    public fuel: string,
    public price: number,
    public status: string,
    public book_user: User | null = null
  ) {}
}

class CarLocation {
  constructor(
    public location_id: number, 
    public address: string
  ) {}
}
