// in src/extensions/imdb-extension.ts
import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox, day: string) => {
  // grab the prompt tool from our toolbox
  const { prompt, print } = toolbox

  async function getChallengePart(name: string): Promise<Number> {
    const result = await prompt.ask({
      type: 'input',
      name: 'challengePart',
      message: 'Please enter which part of the days challenge you would like to run (1 or 2):',
    })
    const inputPart = parseInt(result.challengePart);
    if(inputPart !== 1 && inputPart !== 2) {
      print.error("Part must be equal to 1 or 2!")
      return
    }
    return inputPart;
  }

  // attach our tools to the toolbox
  toolbox.advent = { getChallengePart }
}