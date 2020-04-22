
// Комментарии пока будут на русском языке, позже пофикшу это.
// Присваиваем переменным значения th и td в таблице
let th_value = document.getElementsByTagName("th");
let td_value = document.getElementsByTagName("td");
let tr_value = document.getElementsByTagName("tr");
// Передаем длину массива со значениями td переменной tdLength
let tdLength = td_value.length;
let thLength = th_value.length;
let trLength = tr_value.length;
// Далее присваиваем последнее значение массива td переменной last_td_value
let last_td_value = tdLength-1; 
let last_th_value = thLength-1;
let last_tr_value = trLength-1; 

th_value[0].addEventListener("click", SortNumber);

function SortNumber() {
  
  var sort_arr_tr = []; 

  for(let i = 1; i < trLength; i++){

    let a = tr_value[i].innerHTML; 

    sort_arr_tr.push(a);

    if(i == last_tr_value){
      // var sortarrlength = sort_arr_tr.length;
      var sortarrlast = sort_arr_tr.length-1;

      if(sort_arr_tr[0]>sort_arr_tr[sortarrlast]){
        sort_arr_tr.sort();//Сортировка
        for(let j = 1; j < trLength; j++){
          tr_value[j].innerHTML = sort_arr_tr[j-1];
        }
      }
      else if(sort_arr_tr[0]<sort_arr_tr[sortarrlast]){
        sort_arr_tr.sort(); //Сортировка
        sort_arr_tr.reverse(); //Реверсия"разворот" массива
        back:
        for(let j = 1; j < trLength; j++){
          tr_value[j].innerHTML = sort_arr_tr[j-1];
            continue back;
        }
      }else{console.log("Maybe you can fix this? Error :D");}
    }
  }
}
function compareNumbers(a, b) {
  return a - b;
}

th_value[1].addEventListener("click", sortTable);
// ТУТ ПРОВОДЯТЬСЯ РАБОТЫ НА ДАННОМ ЭТАПЕ РАЗРАБОТКИ!!! START!!!!!!!!!!!!!!!!!!!
  function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
// ТУТ ПРОВОДЯТЬСЯ РАБОТЫ НА ДАННОМ ЭТАПЕ РАЗРАБОТКИ!!! FINISH!!!!!!!!!!!!!!!!!


function Sor() {
  
  var sort_arr_th = []; 
  for(let i = 4; i < thLength; i++){

    let a = th_value[i].innerHTML; 

    sort_arr_th.push(a);

    if(i == last_th_value){
      var sortarrlength = sort_arr_th.length;
      var sortarrlast = sort_arr_th.length-1;
      if(sort_arr_th[0]>sort_arr_th[sortarrlast]){
          sort_arr_th.sort();//Сортировка
        for(let j = 4; j < thLength; j++){
            th_value[j].innerHTML = sort_arr_th[j-4];
        }
      }
      else if(sort_arr_th[0]<sort_arr_th[sortarrlast]){
        sort_arr_th.sort(); //Сортировка
        sort_arr_th.reverse(); //Реверсия"разворот" массива
        back:
        for(let j = 4; j < thLength; j++){
            th_value[j].innerHTML = sort_arr_th[j-4];
            continue back;
        }
      }else{console.log("Maybe you can fix this? Error :D");}
    }
  }
}
