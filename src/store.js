//creating a class that holds functions for store
class Store {
  //constructor holds a empty object
  constructor(){
    this.store = {

    }
  }
  //add gets a object pass thought it and pushes the object to this.store object
  add(object){
    for(let key in object){
      this.store[key] = object[key];
    }
    this.render();
  }
  //remove can take a string or array and remove the keys from this.store
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
    this.render();
  }
  //render is taking data-store that could be anywhere on the html page and take the data key give to it and push the value to html
  render(){
    let nodes = document.querySelectorAll("[data-store]");
    for(let i = 0; i < nodes.length; i++){
      let key = nodes[i].getAttribute("data-store");
      nodes[i].innerHTML = this.store[key] || '';
    }
  }
  //working on localStorage
  storage(object){
    for(let key in object){
      localStorage.setItem = (object);
    }
  }
}
