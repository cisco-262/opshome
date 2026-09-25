(function(){
  var stage=document.querySelector('[data-theme-stage]');
  var themeButtons=document.querySelectorAll('[data-console-theme]');
  if(stage&&themeButtons.length){
    var paths={dark:'assets/images/console/overview-dark.webp',light:'assets/images/console/overview-light.webp'};
    themeButtons.forEach(function(btn){btn.addEventListener('click',function(){
      var theme=btn.getAttribute('data-console-theme');
      if(!paths[theme])return;
      themeButtons.forEach(function(other){other.setAttribute('aria-selected',other===btn?'true':'false')});
      stage.style.opacity='.22';
      var preload=new Image();
      preload.onload=function(){stage.src=paths[theme];stage.alt='OpsHome Console overview in '+theme+' theme';requestAnimationFrame(function(){stage.style.opacity='1'})};
      preload.src=paths[theme];
    })});
  }

  var deviceStage=document.querySelector('[data-device-stage]');
  var deviceButtons=Array.prototype.slice.call(document.querySelectorAll('[data-device-focus]'));
  var deviceCards=Array.prototype.slice.call(document.querySelectorAll('[data-device-card]'));
  if(!deviceStage||!deviceButtons.length||!deviceCards.length)return;

  function isMobileDeck(){return window.matchMedia('(max-width: 760px)').matches}
  function setDevice(name,scroll){
    var card=null;
    deviceCards.forEach(function(item){
      var active=item.getAttribute('data-device-card')===name;
      item.classList.toggle('is-active',active);
      if(active)card=item;
    });
    deviceButtons.forEach(function(btn){btn.setAttribute('aria-pressed',btn.getAttribute('data-device-focus')===name?'true':'false')});
    if(scroll&&card&&isMobileDeck()){
      card.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    }
  }

  deviceButtons.forEach(function(btn){btn.addEventListener('click',function(){setDevice(btn.getAttribute('data-device-focus'),true)})});
  deviceCards.forEach(function(card){
    var name=card.getAttribute('data-device-card');
    card.addEventListener('click',function(){setDevice(name,false)});
    card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();setDevice(name,true)}});
  });

  var raf=0;
  deviceStage.addEventListener('scroll',function(){
    if(!isMobileDeck())return;
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(function(){
      var viewport=deviceStage.getBoundingClientRect();
      var center=viewport.left+viewport.width/2;
      var closest=null,dist=Infinity;
      deviceCards.forEach(function(card){var r=card.getBoundingClientRect();var d=Math.abs((r.left+r.width/2)-center);if(d<dist){dist=d;closest=card}});
      if(closest)setDevice(closest.getAttribute('data-device-card'),false);
    });
  },{passive:true});
})();
