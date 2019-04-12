function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
    }
    this.moveDown = function () {
        this.top +=30
    }
    this.moveLeft = function () {
        this.left -= 20;
    }
    this.moveUp = function () {
        this.top -= 30;
    }

};

var hero = new Hero('anh/songoku.jpg',20,30, 200);
function start(){
      if(hero.left < window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size ){
        hero.moveRight();
     }else if (hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight -hero.size ) {
          hero.moveDown();
      }else if (hero.top >= window.innerHeight - hero.size &&hero.left >=hero.size -3*hero.left ){
          hero.moveLeft();
      }else  if (  hero.left <=0 && ) {
          hero.moveUp();
      }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 20)
}
start();