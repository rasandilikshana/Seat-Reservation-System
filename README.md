#Seat Reservation System

Holds expire. A held seat must automatically become available 60 seconds after it was held,
unless it has been booked in the meantime. This must work without relying on a request coming in to
"notice" the expiry — i.e. if a client polls GET /seats 90 seconds after a hold, the seat must already
be available.

Group holds are atomic. A user can request to hold up to 4 seats in a single call. Either all requested
seats are held, or none are. If even one seat is unavailable, the whole request fails and no seats
change state.

Adjacency rule. When holding 2 or more seats, they must all be in the same row and contiguous
(e.g. B3, B4, B5 is valid; B3, B5 is not; B8, C1 is not). Reject otherwise.

Confirm requires the original hold token. When a hold is created, the server returns a holdId.
Booking only succeeds if the caller presents the matching holdId for seats that are still held by that
token. A different user cannot confirm someone else's hold.
