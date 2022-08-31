const nums =  (num) => { // num = 9, num = 7
   const inputEl = document.getElementById('screen')
   inputEl.value += num;
}

const operations = (symbol) => {
    const inputEl = document.getElementById('screen')
    inputEl.value += symbol
}
const clearr = () => {
    const inputEl = document.getElementById('screen')
    inputEl.value = ''
}

const del = () => {
    const inputEl = document.getElementById('screen')
    inputEl.value = inputEl.value.slice(0, -1)
}


const equall = () => {
    const inputEl = document.getElementById('screen')
    try{
        inputEl.value = eval(inputEl.value)
    }
    catch(error){
        inputEl.value = "Error"
    }
}