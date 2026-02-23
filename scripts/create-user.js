const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createUser() {
  const email = process.argv[2];
  const password = process.argv[3];
  const name = process.argv[4] || 'Test User';

  if (!email || !password) {
    console.log('Usage: node scripts/create-user.js <email> <password> [name]');
    console.log('Example: node scripts/create-user.js test@example.com mypassword "John Doe"');
    process.exit(1);
  }

  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      console.log(`User with email ${email} already exists!`);
      
      // Update password
      const hashedPassword = bcrypt.hashSync(password, 10);
      await prisma.user.update({
        where: { email },
        data: { password: hashedPassword }
      });
      console.log('Password updated successfully!');
    } else {
      // Create new user
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword
        }
      });
      console.log('User created successfully!');
      console.log(`Email: ${user.email}`);
      console.log(`Name: ${user.name}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
