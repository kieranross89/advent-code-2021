    import { print } from 'gluegun/print';

const calculateDay2 = (inputData: string[], part: number) => {
    
    if(part === 1) {
        const counts = inputData.reduce((accumulator, movement) => {
            const test = movement.split(' ');
            const direction = test[0];
            const value = parseInt(test[1])
            //TODO make better
            if(direction === 'forward'){
                accumulator.horizontal += value;
            }

            if(direction === 'down'){
                accumulator.vertical += value
            }

            if(direction === 'up'){
                accumulator.vertical -= value
            }
            return accumulator;
        }, { horizontal: 0, vertical: 0})

        const result = counts.horizontal * counts.vertical;
        print.info(result);
        
    }

    if(part === 2) {
        //create new array of measurements as strings
        print.info("Not implemented")
    }
}

export { calculateDay2 }