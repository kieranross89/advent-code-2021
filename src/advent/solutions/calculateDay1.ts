import { print } from 'gluegun/print';

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

const calculateDay1 = (inputData: string[], part: number) => {
    if(part === 1) {
        const results = calculateFromMeasurements(inputData)
        print.info(results.filter(x => x === "increased").length)
    }

    if(part === 2) {
        //create new array of measurements as strings
        const sumOfWindows = inputData.map((value, index) => {
            const length = inputData.length
            if(index + 2 > length){
                return "no more windows"
            }
            const sum = parseInt(value) + parseInt(inputData[index + 1]) + parseInt(inputData[index + 2])
            return sum.toString()
        })

        const results = calculateFromMeasurements(sumOfWindows);
        print.info(results.filter(x => x === "increased").length)
    }
}

export { calculateDay1 }