/**
 * Viral advertising helper class for technical test
 */
class ViralAdvertisingHelper {

    constructor() {}

    /**
     * Allows to dertermine how many people have liked the add by the end of the given day,
     * beginning with launch day as day 1
     * @param dayNumber the day number to report
     * @returns the cumulative number of likes for the given day
     */
    viralAdvertising(dayNumber: number) : number{

        let shared: number = 5;
        let cumulative: number = 0;

        for (let day = 0; day < dayNumber; day++) {
            cumulative += Math.floor(shared / 2);
            shared = Math.floor(shared / 2) * 3;
        }
        
        return cumulative;
    }

    /**
     * Allows to determine how many days are needed to reach a given number a people having
     * liked the add, beginning with launch day as day 1
     * @param numberOfLikes the number of likes to reach
     * @returns the minimum number of days to reach that objective
     */
    requiredMinimumDays(numberOfLikes: number) : number {

        let requiredNumberOfDays: number = 0;
        let shared: number = 5;
        let cumulative : number = 0;

        while( numberOfLikes > cumulative) {
            requiredNumberOfDays++;
            cumulative += Math.floor(shared / 2);
            shared = Math.floor(shared / 2) * 3;  
        }
        return requiredNumberOfDays;
    }
}

module.exports = ViralAdvertisingHelper;