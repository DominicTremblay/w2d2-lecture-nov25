process.stdout.write("Hello at the console\n");

process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});


process.stdin.on('end', () => {
  process.stdout.write('end');
});