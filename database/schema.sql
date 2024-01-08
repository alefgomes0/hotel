CREATE TABLE "rooms" (
  "id": INT,
  type: VARCHAR(32) NOT NULL,
  "num_of_adultst": INT NOT NULL,
  "num_of_children": INT NOT NULL,
  "total_rooms": INT NOT NULL
)

CREATE TABLE "availability" (
  "id": INT,
  "price": INT NOT NULL,
  "date": DATE NOT NULL,
  "number_available": INT NOT NULL,
  "available": BOOLEAN NOT NULL
  "room_id": FOREIGN KEY(`listing_id`) REFERENCES `rooms`(`id`)
)

CREATE TABLE "reviews" (
  "id": INT,
  "rating": INT NOT NULL,
  "full_name": VARCHAR(32) NOT NULL,
  "comment": TEXT NOT NULL,
  "date": DATE
)