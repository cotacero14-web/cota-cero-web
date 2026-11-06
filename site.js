(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};

  /* Encabezado: sólido al salir del hero */
  var top=document.getElementById('top'),hero=document.querySelector('.hero');
  function hdr(){top.classList.toggle('solid',scrollY>hero.offsetHeight*0.55)}
  addEventListener('scroll',hdr,{passive:true});hdr();

  /* Declaración: relleno palabra por palabra con el scroll */
  var decl=document.getElementById('decl');
  if(decl&&!reduce){
    var words=decl.textContent.trim().split(/\s+/);
    decl.setAttribute('aria-label',decl.textContent.trim());
    decl.innerHTML=words.map(function(w){return '<span class="w" aria-hidden="true">'+w+'</span>'}).join(' ');
    var ws=$('.w',decl),ticking=false;
    var fill=function(){
      ticking=false;
      var r=decl.getBoundingClientRect(),vh=innerHeight;
      var p=(vh*0.82-r.top)/(r.height+vh*0.28);
      p=Math.max(0,Math.min(1,p));
      var n=Math.round(p*ws.length);
      ws.forEach(function(el,i){el.classList.toggle('on',i<n)});
    };
    addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(fill)}},{passive:true});
    addEventListener('resize',fill);fill();
  }

  /* Metodología: fase activa cambia el fondo */
  var fases=$('.fase'),imgs=$('.stage img');
  function activate(i){
    fases.forEach(function(f,k){f.classList.toggle('on',k===i)});
    imgs.forEach(function(m,k){m.classList.toggle('on',k===i)});
  }
  fases.forEach(function(f,i){
    f.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')activate(i)});
    f.addEventListener('focusin',function(){activate(i)});
    f.addEventListener('click',function(e){if(!e.target.closest('a'))activate(i)});
  });

  /* Revelado de imágenes (clip-path) al entrar en pantalla */
  var clips=$('.rv-clip');
  if(reduce||!('IntersectionObserver' in window)){clips.forEach(function(c){c.classList.add('static')});return}
  /* Se observa el contenedor: un elemento con clip-path al 100% nunca se considera visible */
  var groups=new Map();
  clips.forEach(function(c){var p=c.parentElement;if(!groups.has(p))groups.set(p,[]);groups.get(p).push(c)});
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting)return;
      groups.get(e.target).forEach(function(c,i){c.style.transitionDelay=i*110+'ms';c.classList.add('in')});
      io.unobserve(e.target);
    });
  },{rootMargin:'0px 0px -10% 0px',threshold:.08});
  groups.forEach(function(_,p){io.observe(p)});
})();
