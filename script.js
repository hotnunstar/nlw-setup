const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button .addEventListener('click', add)
form.addEventListener('change', saveDays)

function add() {
    const today = new Date().toLocaleDateString('pt').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) alert('O dia já existe ❌')
    else {
        nlwSetup.addDay(today)
        alert('Dia adicionado com sucesso ✅')
    }
}

function saveDays(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()