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
    public is_in: CarLocation,
    public booked_by: User | null = null
  ) {}
}

class CarLocation {
  constructor(public location_id: number, public address: string) {}
}

class Trip {
  public duration: string;
  public cost: number;

  constructor(
    public trip_id: number,
    public start_time: Date,
    public end_time: Date,
    public start_location: CarLocation,
    public end_location: CarLocation,
    public car: Car,
    public user: User,
  ) {
    const diffMs = this.end_time.getTime() - this.start_time.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;
    
    this.duration = `${hours}h ${minutes}m`;

    this.cost = this.car.price * diffMins;
  }
}

class Booking {
  constructor(
    public book_id: number,
    public status: string,
    public user: User,
    public car: Car,
  ) {}
}

class Payment {
  constructor(
    public payment_id: number,
    public date: Date,
    public amount: number,
    public type: string,
    public method: string,
    public status: string,
    public trip: Trip,
    public paid_by: User
  ) {}
}
