import _ from 'lodash'
import printaa from './print'
function component(){
    const element = document.createElement('div')
    const btn = document.createElement('button')
    element.innerHTML = _.join(['hello','webpack'],' ')
    btn.innerHTML  = 'click me'
    btn.onclick = printaa
    element.appendChild(btn)
    return element
}
document.body.appendChild(component())