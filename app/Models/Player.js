

export class Player {
  constructor(name) {
    this.name = name
    this.score = 0
    console.log('new player');
  }

  get Template() {
    return `
    <div class="card">
      <div class="card-body">
          ${this.name} - ${this.score}
      </div>
    </div>
    `
  }
}