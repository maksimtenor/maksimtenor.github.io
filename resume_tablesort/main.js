let ths = document.getElementsByTagName("th");
let trs = document.getElementsByTagName("tr");
let tds = document.getElementsByTagName("td");
let f = tds.length;
let min = f-1;
ths[0].addEventListener("click", Sort);
function Sort() {
  var g = [];
  for(let i = 0; i < f; i++){
    var a = tds[i].innerHTML;
    g.push(a);
    if(i == f-1){
         console.log(g);
      if(g[0]>g[min]){
        g.sort();
        for(let j = 0; j < f; j++){
          let b = g[j];
          tds[j].innerHTML = g[j];
        }
      }else if(g[0]<g[min]){
        g.sort();
        g.reverse();
      for(let j = 0; j < f; j++){
        let b = g[j];
        tds[j].innerHTML = g[j];
      }
      }else{console.log("Что то пошло не так");}
    }
  }
}
