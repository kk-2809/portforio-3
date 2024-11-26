'use strict';

{
  function callback(entrys,obs){
    entrys.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }
  const options = {
    threshold:0.2,
  };
  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll(".feature");

  targets.forEach(target =>{
    observer.observe(target);
  });
}

{
  function scrollCallBack(entrys){
    entrys.forEach(entry =>{
      if(!entry.isIntersecting){
        header.classList.add("scrolled");
        toTop.classList.add("scrolled");
      }else{
        header.classList.remove("scrolled");
        toTop.classList.remove("scrolled"); 
      }
    });
  }
  const toTop = document.getElementById("to_top");

  toTop.addEventListener("click", e =>{
    e.preventDefault();
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  });

  const header = document.querySelector("header");
  const scrollObserver = new IntersectionObserver(scrollCallBack);
  scrollObserver.observe(document.getElementById("target-2"));
}