const { makeWASocket } = require('@adiwajshing/baileys');
const fs = require('fs');
const P = require('pino');

// Configure logger to write to file
const logger = P({
  transport: {
    target: 'pino-pretty',
    options: {
      destination: './bot.log',
      mkdir: true,
      translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
      ignore: 'pid,hostname'
    }
  }
});

async function connectWhatsApp() {
  try {
    logger.info('🔗 Connecting to WhatsApp...');
    
    const sock = makeWASocket({
      printQRInTerminal: true,
      logger: logger,
      auth: {
        creds: require('./database/auth.json'),
        keys: require('./database/keys.json')
      }
    });

    sock.ev.on('connection.update', (update) => {
      if (update.connection === 'open') {
        logger.info(`✅ Connected as ${update.user?.id.replace('@s.whatsapp.net', '')}`);
      }
      if (update.connection === 'close') {
        logger.warn('❌ Connection closed');
        process.exit(1); // Trigger restart
      }
    });

    // Your existing bot code here
    // ...

  } catch (err) {
    logger.error(`🚨 Critical error: ${err}`);
    process.exit(1); // Trigger restart
  }
}

connectWhatsApp();