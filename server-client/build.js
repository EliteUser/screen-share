const {compile} = require('nexe');
// Start-Process -WindowStyle hidden -FilePath host_screen.exe
compile({
  input: './index.js',
  target: 'windows-x64-10.16.0',
  // target: 'macos-8.4.0',
  output: 'host_screen'
}).then(() => {
  console.log('success');
});
