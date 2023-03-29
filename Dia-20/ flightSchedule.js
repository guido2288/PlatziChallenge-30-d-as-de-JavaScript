class Reservation {
  constructor(flight, passenger) {
    // Tu código aquí 👈
    this.flight = flight,
      this.passenger = passenger
  }

  reservationDetails() {
    // Tu código aquí 👈
    const { origin, destination, date } = this.flight;
    const { name, lastName } = this.passenger;

    return {
      origin,
      destination,
      date,
      reservedBy
    }
  }
};

class Passenger {
  // Tu código aquí 👈
  constructor(name, lastName, age) {
    this.name = name,
      this.lastName = lastName,
      this.age = age
    this.flights = []

  };

  addFlight(flight) {
    const { origin, destination, date, price } = this.flights

    this.flights.push({
      origin,
      destination,
      date,
      price
    });
  }
}


class Flight {
  constructor(origin, destination, date, capacity, price) {
    // Tu código aquí 👈
    this.origin = origin,
      this.destination = destination,
      this.date = date,
      this.capacity = capacity,
      this.price = price,
      this.passenger = []
  };

  addFlightToPassenger(passenger) {
    passenger.addFlight(this);
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    if (this.capacity > 0) {
      this.passenger.push({
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age
      });
      this.capacity -= 1;
    }
    this.addFlightToPassenger(passenger);
    return new Reservation(this, passenger);
  }
};

class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    // Tu código aquí 👈
    super(origin, destination, date, capacity, price);
    this.specialService = specialService;
  }

  addFlightToPassenger(passenger) {
    this.price += this.specialService;
    passenger.addFlight(this);
  }
};

class EconomicFlight extends Flight {
  addFlightToPassenger(passenger) {
    if (passenger.age < 18 || passenger.age > 65) {
      this.price *= 0.8;
    }
    passenger.addFlight(this);
  }
}