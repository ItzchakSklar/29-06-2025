
// TODO: Add documentation
export function CheckTime(now) {
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hour = now.getHours();
    seconds += minutes * 60;
    seconds += hour * 60 * 60;
    return seconds
}
