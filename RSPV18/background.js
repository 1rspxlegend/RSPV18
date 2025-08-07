const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Hide command prompt on Windows
const options = {
  detached: true,
  stdio: 'ignore',
  windowsHide: true
};

function startBot() {
  const bot = spawn('node', ['botController.js'], options);
  
  bot.unref(); // Allows parent to exit independently
  
  bot.on('error', (err) => {
    fs.writeFileSync('error.log', `[${new Date()}] ERROR: ${err}\n`, { flag: 'a' });
    setTimeout(startBot, 5000);
  });

  bot.on('exit', (code) => {
    if (code === 1) {
      fs.writeFileSync('restart.log', `[${new Date()}] RESTARTING...\n`, { flag: 'a' });
      cleanSession();
      setTimeout(startBot, 3000);
    }
  });
}

function cleanSession() {
  try {
    const pathsToClean = [
      path.join(__dirname, 'session'),
      path.join(__dirname, 'database', 'baileysDB.json.bak')
    ];

    pathsToClean.forEach(p => {
      if (fs.existsSync(p)) {
        fs.rmSync(p, { recursive: true, force: true });
      }
    });
  } catch (err) {
    fs.writeFileSync('cleanup-error.log', `[${new Date()}] CLEANUP FAILED: ${err}\n`, { flag: 'a' });
  }
}

startBot();