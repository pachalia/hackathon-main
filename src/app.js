import './styles.css'

import {ContextMenu} from "@/menu";

const body = document.querySelector('body')
body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    new ContextMenu().open(`${e.pageX}px`, `${e.pageY}px`)
})

body.addEventListener('click', (e) => {
    e.preventDefault()
    new ContextMenu().close()
})


