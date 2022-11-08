import { appState } from "../AppState.js"
import { playerService } from "../Services/PlayerService.js"



export class PlayersController {
  constructor() {
    // console.log('this runs when the keyword "new" is used')
    this.drawPlayers()
  }
  addPlayer() {
    console.log('drawing characters')
    window.event.preventDefault()
    const form = window.event.target
    let player = {
      name: form.name.value
    }
    playerService.addPlayer(player)
    form.reset()
    this.drawPlayers()
  }
  drawPlayers() {
    let template = ''
    appState.players.forEach(p => template += p.Template)
    document.getElementById('app').innerHTML = template
  }
}