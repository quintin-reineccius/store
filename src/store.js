class Store {
  constructor(){
    this.store = {

    }
  }
  add(object){
    for(let key in object){
      this.store[key] = object[key];
    }
    this.rerender();
  }
  remove(data){
    if(typeof data == 'string'){
      delete this.store[data];
    }
    else {
      for(let i = 0; i < data.length; i++){
        let key = data[i];
        delete this.store[key];
      }
    }
    this.rerender();
  }
  rerender(){
    let nodes = document.querySelectorAll("[data-store]");
    for(let i = 0; i < nodes.length; i++){
      let key = nodes[i].getAttribute("data-store");
      nodes[i].innerHTML = this.store[key] || '';
    }
  }
}
