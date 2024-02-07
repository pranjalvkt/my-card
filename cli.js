#!/usr/bin/env node
import chalk from 'chalk';

// Sample JavaScript object
const profile = {
  name: 'Pranjal Tripathi',
  title: 'Software Engineer',
  code: ["Javascript", "Java", "Dart"],
  askMeAbout: ["web dev", "tech", "singing", "travelling"],
  technologies: {
    backEnd: ["Node", "Express"],
    frontEnd: ["React.js", "Vanila JS", "Knockout.js"],
    mobileApp: ["Android Development"],
    devOps: ["GCP", "Docker🐳"],
    databases: ["mongoDB", "MySql", "sqlite"],
    misc: ["Firebase", ]
  },
  urls: [
    'https://github.com/pranjalvkt',
    'https://twitter.com/pranjalvkt',
    'https://www.linkedin.com/in/pranjalvkt'
  ]
};

function createSpaces(numSpaces) {
    return ' '.repeat(numSpaces);
}
  

function printCard(profile) {
    console.log(chalk.yellow('┌──────────────────────────────────────────────────┐'));
    console.log(chalk.yellow(`│ ${chalk.bold('Name:')} ${profile.name} ${createSpaces(42 - profile.name.length)}│`));
    console.log(chalk.yellow(`│ ${chalk.bold('Title:')} ${profile.title} ${createSpaces(41 - profile.title.length)}│`));
    console.log(chalk.yellow(`│ ${chalk.bold('Codes in:')} ${profile.code.join(', ')} ${createSpaces(33 - profile.title.length)}│`));
    console.log(chalk.yellow(`│ ${chalk.bold('Ask Me About:')} ${profile.askMeAbout.join(', ')} │`));
    console.log(chalk.yellow('│                                                  │'));
    console.log(chalk.yellow(`│ ${chalk.bold('Technologies:')}                                    │`));
    console.log(chalk.yellow(`│   ${chalk.bold('backEnd')}: ${profile.technologies.backEnd.join(', ')} ${createSpaces(37 - profile.technologies.backEnd.join(', ').length)}│`));
    console.log(chalk.yellow(`│   ${chalk.bold('frontEnd')}: ${profile.technologies.frontEnd.join(', ')} ${createSpaces(36 - profile.technologies.frontEnd.join(', ').length)}│`));
    console.log(chalk.yellow(`│   ${chalk.bold('mobileApp')}: ${profile.technologies.mobileApp.join(', ')} ${createSpaces(35 - profile.technologies.mobileApp.join(', ').length)}│`));
    console.log(chalk.yellow(`│   ${chalk.bold('devOps')}: ${profile.technologies.devOps.join(', ')} ${createSpaces(38 - profile.technologies.devOps.join(', ').length)}│`));
    console.log(chalk.yellow(`│   ${chalk.bold('databases')}: ${profile.technologies.databases.join(', ')} ${createSpaces(35 - profile.technologies.databases.join(', ').length)}│`));
    console.log(chalk.yellow(`│   ${chalk.bold('misc')}: ${profile.technologies.misc.join(', ')} ${createSpaces(40 - profile.technologies.misc.join(', ').length)}│`));


    console.log(chalk.yellow('│                                                  │'));
    console.log(chalk.yellow(`│ ${chalk.bold('Links:')}                                           │`));
    console.log(chalk.yellow(`│   ${profile.urls[0]}                  │`));
    console.log(chalk.yellow(`│   ${profile.urls[1]}                 │`));
    console.log(chalk.yellow(`│   ${profile.urls[2]}         │`));
    console.log(chalk.yellow('└──────────────────────────────────────────────────┘'));
  }

// Main function
function main() {
  printCard(profile);
}

main();