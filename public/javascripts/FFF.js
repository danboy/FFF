var FFF = function(){
  this.div = document.createElement('div');
  this.body = document.getElementsByTagName('body')[0];
  this.images = [
  "/images/fff-1.png",
  "/images/fff-2.png",
  "/images/fff-3.png",
  "/images/fff-4.png",
  "/images/fff-5.png",
  "/images/fff-6.png",
  "/images/fff-7.png",
  "/images/fff-8.png",
  "/images/fff-8.png",
  "/images/fff-10.png"
  ];

};

FFF.prototype= {

  floydify: function(){
    this.getWindow();
    fffSrc=this.images[Math.round(Math.random()*this.images.length)];
    if ( fffSrc == undefined )
      fffSrc= this.images[0];
    var fffImage = document.createElement('img');
    fffImage.src =  fffSrc;
    fffImage.style.position = 'absolute';
    fffImage.style.left = (Math.round( Math.random()*this.windowWidth )-fffImage.width) + 'px';
    fffImage.style.top = (Math.round( Math.random()*this.windowHeight  ) -fffImage.height)+ 'px';

    this.body.appendChild(fffImage);
  },
  getWindow: function(){

	this.windowHeight = 768;
	this.windowWidth = 1024;

	var de = document.documentElement;
	if ( typeof(window.innerHeight) == 'number' ) {
		this.windowHeight = window.innerHeight;
		this.windowWidth = window.innerWidth;
	} else if( de && de.clientHeight ) {
		this.windowHeight = de.clientHeight;
		this.windowWidth = de.clientWidth;
	}

  },
  autoFFF: function(timer){
  var self = this;
  setInterval ( function(){self.floydify()}, timer*1000 );
  }

}
