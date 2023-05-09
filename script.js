const arr = [1, 3, 6, { "a": 1 }, 'tushar', 'g7878', 1, "tushar", 1, 1]

function s() {
    arr.filter((item, index) => {
        console.log("item", item, "index", index)
        return arr.indexOf(item) === index;
    })
}
s()