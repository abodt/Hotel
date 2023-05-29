class Room {
  #isBooked = false;
  constructor(floorNum, roomNum, price) {
    this.floorNum = floorNum;
    this.roomNum = roomNum;
    this.price = price;
  }

  toString() {
    return `Room ${this.roomNum} on floor ${this.floorNum}, price: ${this.price}, booked: ${this.#isBooked}`;
  }

  book() {
    this.#isBooked = true;
  }

  isBooked() {
    return this.#isBooked;
  }
}

class Hotel {
  rooms = [];
  #minfloor;
  #maxfloor;
  constructor(Adrress, NumOfrooms, minfloor, maxfloor, rooms) {
    this.Adrress = Adrress;
    this.NumOfrooms = NumOfrooms;
    this.#minfloor = minfloor;
    this.#maxfloor = maxfloor;
    this.rooms = rooms;
  }
  printAdvertisment() {
    console.log(`Welcome to Hebron Hotel`)
    
  }

  listBookedRooms() {
    const bookedRooms = this.rooms.filter((room) => room.isBooked());
    console.log(`Total number of booked rooms: ${bookedRooms.length}`);
    if (bookedRooms.length > 0) {
      console.log(`Last booked room: ${bookedRooms[bookedRooms.length - 1].toString()}`);
    }
    return bookedRooms;
  }
}

class RoomwithView extends Room {
  constructor(floorNum, roomNum, price, view) {
    super(floorNum, roomNum, price);
    this.view = view;
  }
}

class SleepingRoom extends Room {
  constructor(floorNum, roomNum, price, numberOfBeds) {
    super(floorNum, roomNum, price);
    this.numberOfBeds = numberOfBeds;
  }
}

const room1 = new RoomwithView(1, 101, 200, 'ocean');
const room2 = new Room(1, 102, 150);
const room3 = new SleepingRoom(2, 201, 250, 2);

const hotel = new Hotel('123 Main St.', 3, 1, 2, [room1, room2, room3]);
room1.book();
room2.book();

hotel.printAdvertisment();
hotel.listBookedRooms();
