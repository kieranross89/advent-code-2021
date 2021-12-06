import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'advent2021',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to the Advent of Code 2021 CLI')
  }
}

module.exports = command
