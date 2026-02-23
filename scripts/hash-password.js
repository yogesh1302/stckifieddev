// Run this script to hash a password
// Usage: node scripts/hash-password.js "yourpassword"

const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.log('Please provide a password as argument');
  console.log('Usage: node scripts/hash-password.js "yourpassword"');
  process.exit(1);
}

const hashedPassword = bcrypt.hashSync(password, 10);
console.log('\nHashed password:');
console.log(hashedPassword);
console.log('\nUse this in your MongoDB User table password field');
