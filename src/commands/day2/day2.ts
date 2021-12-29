import { GluegunToolbox } from 'gluegun'

module.exports = {
  run: async (toolbox: GluegunToolbox) => {
    const { advent, filesystem } = toolbox
    const inputData = filesystem.read('src\\commands\\day2\\input.txt');
    const inputArray = inputData.split(/\r?\n/);

    const part = await advent.getChallengePart();
    advent.calculateDay2(inputArray, part);
}}