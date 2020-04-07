let argumentsFromConsole = process.argv.slice(2);
let timeInMS = 1000;
argumentsFromConsole = argumentsFromConsole.map(x => Number(x));
for (let inputTime of argumentsFromConsole) {
  if ((inputTime > 0) && !(isNaN(inputTime))) {
    setTimeout(() => {process.stdout.write(`beep ${inputTime} \n`);}, (inputTime * timeInMS)) //using visible characters because system sound is not working
  }
}