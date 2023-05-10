import dogs from './data.js'


class Dog{
    constructor(data) {
        Object.assign(this, data)
    }
    
    dogHtml() {
        const { name, avatar, age, bio } = this 
        return `<div>
                <div class='dog-info'>
                <h4>${name} , ${age}</h4>
                <p class='dog-bio'>${bio}</p>
                 </div>
                 <div>
                <img class='dog-img' src='${avatar}'> 
                </div>
            </div>`
    }
}

export default Dog