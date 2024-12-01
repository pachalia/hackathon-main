import {Module} from "@/core/module";
import {random} from '@/utils'
import keyboard from '@/sound/keyboard.mp3'
import eralash from '@/sound/eralash(end).mp3'
import error from '@/sound/error_windows_xp.mp3'
import cartoon from '@/sound/cartoon_smile.mp3'
import agent from '@/sound/smile_agent.mp3'
import cash from '@/sound/cash_register.mp3'


export class SoundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const audioArray = [keyboard, eralash, error, cartoon, agent,cash]
        const randomAudio = audioArray[random(0, audioArray.length-1)]
        const myAudio = new Audio(randomAudio)
        myAudio.play()
    }
}