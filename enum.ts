enum Status {
  Active = 1,
  Inactive,
  Pending,
}

console.log(Status.Pending);

enum Colors {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}

console.log(Colors.Blue);

enum Users {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest',
}

function messageByRole(user: Users): string {
  switch (user) {
    case Users.Admin:
      return 'Welcome! u have admin access';
    case Users.User:
      return 'Welcome u have normal access';
    case Users.Guest:
      return 'Welcome u have guest access';
    default:
      return 'sorry no access for unknown person';
  }
}
console.log(messageByRole(Users.Admin));
