import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";



class PlayerService {
  addPlayer(playerData) {
    let newPlayer = new Player(playerData.name)
    console.log('new', newPlayer)
    appState.players.push(newPlayer)
  }
}

export const playerService = new PlayerService()