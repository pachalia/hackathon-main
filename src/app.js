import './styles.css'
import {ContextMenu} from './menu'

const body = document.body;
body.addEventListener('click', event => {
    event.preventDefault();
    new ContextMenu().open(`${event.pageX}px`, `${event.pageY}px`)
})

body.addEventListener('click', event => {
    event.preventDefault();
    new ContextMenu().close();
})