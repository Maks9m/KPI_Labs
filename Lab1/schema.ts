class User {
  constructor(
    public user_id: string,
    public email: string,
    public first_name: string,
    public last_name: string,
    public driver_license: string
  ) {}
}

class Car {
  constructor(
    public car_id: string,
    public license_plate: string,
    public car_type: string,
    public fuel: string,
    public price: number,
    public status: string,
    public is_in: CarLocation["location_id"],
    public booked_by: User["user_id"] | null = null
  ) {}
}

class CarLocation {
  constructor(public location_id: string, public address: string) {}
}

class Trip {
  public duration: string;
  public cost: number;

  constructor(
    public trip_id: string,
    public start_time: Date,
    public end_time: Date,
    public start_location: CarLocation["location_id"],
    public end_location: CarLocation["location_id"],
    public car_id: Car["car_id"],
    public user_id: User["user_id"]
  ) {
    const milliseconds = this.end_time.getTime() - this.start_time.getTime();
    const minutes = Math.ceil(milliseconds / (1000 * 60));
    const hours = Math.ceil(minutes / 60);

    this.duration = `${hours}h`;
    this.cost = hours * 10; // Counts cost using price from Car class
  }
}

class Booking {
  constructor(
    public book_id: string,
    public status: string,
    public user_id: User["user_id"],
    public car_id: Car["car_id"]
  ) {}
}

class Payment {
  constructor(
    public payment_id: string,
    public date: Date,
    public amount: number,
    public type: string,
    public method: string,
    public status: string,
    public trip: Trip["trip_id"],
    public paid_by: User["user_id"]
  ) {}
}
