import { GluegunToolbox } from 'gluegun'

const calculateFromMeasurements = (measurements: string[]) => {
    return measurements.map((value, index) => {
        const current = parseInt(value);
        // skip first
        if(index == 0 )
        {
            return 'start';
        }
        
        const previous = parseInt(measurements[index - 1])

        return previous > current ? "decreased" 
            : previous < current ? "increased"
            : "same";
    });
}

module.exports = {
  run: async (toolbox: GluegunToolbox) => {
    const { advent, print, filesystem } = toolbox
    const inputData = filesystem.read('src\\commands\\day1\\input.txt');
    const inputArray = inputData.split(/\r?\n/);

    const part = await advent.getChallengePart();    

    if(part === 1) {
        const results = calculateFromMeasurements(inputArray)
        print.info(results.filter(x => x === "increased").length)
    }

    if(part === 2) {
        //create new array of measurements as strings
        const sumOfWindows = inputArray.map((value, index) => {
            const length = inputArray.length
            if(index + 2 > length){
                return "no more windows"
            }
            const sum = parseInt(value) + parseInt(inputArray[index + 1]) + parseInt(inputArray[index + 2])
            return sum.toString()
        })

        const results = calculateFromMeasurements(sumOfWindows);
        print.info(results.filter(x => x === "increased").length)
    }
}}