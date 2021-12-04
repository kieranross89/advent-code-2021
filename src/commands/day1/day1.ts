import { GluegunToolbox } from 'gluegun'

module.exports = {
  run: async (toolbox: GluegunToolbox) => {
    const { print, filesystem } = toolbox
    const inputData = filesystem.read('src\\commands\\day1\\input.txt');
    const inputArray = inputData.split(/\r?\n/)
    const results = inputArray.map((value, index) => {
        const current = parseInt(value);
        // skip first
        if(index == 0 )
        {
            return 'start';
        }
        
        const previous = parseInt(inputArray[index - 1])

        return previous > current ? "decreased" 
            : previous < current ? "increased"
            : "same";
    });
    print.info(results.filter(x => x === "increased").length)
}}