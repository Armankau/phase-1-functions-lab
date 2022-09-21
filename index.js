// Code your solution in this file!
function  distanceFromHqInBlocks(start, destination = 42){
    return Math.abs(start - destination)
}

function distanceFromHqInFeet(start, destination = 42){
    return distanceFromHqInBlocks(start, destination)*264
}

function  distanceTravelledInFeet(start, destination){
    return distanceFromHqInFeet(start, destination)
}
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0}
    else if (distanceTravelledInFeet(start, destination) <= 2000){
        return (distanceTravelledInFeet(start, destination)-400)*.02}
    else if (distanceTravelledInFeet(start, destination) < 2500){
        return 25}
    else if(distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'}

}

/*`calculatesFarePrice`: Given the same starting and ending block as the
  previous test (_hint hint_), return the fare for the customer. The first four
  hundred feet are free. For a distance between 400 and 2000 feet, the price is
  2 cents per foot (not including 400, which are free!). Then Scuber charges a
  flat fare for a distance over 2000 feet and under 2500 feet.
  Finally, Scuber does not allow any rides over 2500 feet — the function returns
  `'cannot travel that far'` if a ride over 2500 feet is requested.*/