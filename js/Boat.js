class Boat {
  constructor(x, y, width, height, boatPos) {
    var options = {
      // Altere o valor da opção (option) dentro da classe Boat.
      restitution: 0,
      friction: 0 ,
      density: 0,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    // Adicione a variável this.boatPosition para obter as posições aleatórias do navio a partir
    // do código.
    
    
    
    World.add(world, this.body);
  }


  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
  
    // Na função display(), use push() e pop()
   
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    noTint();
    
  }
}
