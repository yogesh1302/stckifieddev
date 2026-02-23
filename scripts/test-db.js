const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('Testing database connection...');
    
    // Try to connect
    await prisma.$connect();
    console.log('✓ Successfully connected to MongoDB');
    
    // Try to query users
    const users = await prisma.user.findMany();
    console.log(`✓ Found ${users.length} users in database`);
    
    // Try to query categories
    const categories = await prisma.category.findMany();
    console.log(`✓ Found ${categories.length} categories in database`);
    
    console.log('\nDatabase connection is working!');
  } catch (error) {
    console.error('✗ Database connection failed:');
    console.error(error.message);
    console.error('\nFull error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
