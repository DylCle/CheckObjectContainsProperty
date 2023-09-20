
/**
 * 
 * @param {Array object} obj 
 * @param {Property} key 
 * @returns true if object has the property 
 */
function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
}
console.log(hasKey({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }, "green"));