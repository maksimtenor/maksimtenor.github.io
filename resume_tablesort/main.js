
// Комментарии пока будут на русском языке, позже пофикшу это.
// Присваиваем переменным значения th и td в таблице
let th_value = document.getElementsByTagName("th");
let td_value = document.getElementsByTagName("td");
// Передаем длину массива со значениями td переменной tdLength
let tdLength = td_value.length;
let thLength = th_value.length;
// Далее присваиваем последнее значение массива td переменной last_td_value
let last_td_value = tdLength-1; 
let last_th_value = thLength-1;
// Вешаем простой обработчик событий и при клике задействуем функцию Sort для вычисления и сортировки данных
th_value[1].addEventListener("click", SortName);
// Создаем функцию Sort 
function SortName() {
  
  var sort_arr_th = []; // Создаем пустой массив для сохранения в него данных из цикла
  for(let i = 4; i < thLength; i++){
// Сохраняем в переменную данные в соответствии с индексом их расположения в массиве td...
    let a = th_value[i].innerHTML; 
// Записываем эти данные в пустой массив
    sort_arr_th.push(a);
// Если i будет равным последнему "индексу" массива tdLength 
    if(i == last_th_value){
      var sortarrlength = sort_arr_th.length;
      var sortarrlast = sort_arr_th.length-1;
      // console.log(sortarrlength);
// Если первый эелемент будет больше последнего - выполнить сортировку и вывести в порядке от меньшего к большему
      if(sort_arr_th[0]>sort_arr_th[sortarrlast]){
          sort_arr_th.sort();//Сортировка
        for(let j = 4; j < thLength; j++){
            th_value[j].innerHTML = sort_arr_th[j-4];
        }
      }
// Если первый эелемент будет меньше последнего - выполнить сортировку и вывести в обратном порядке от большего к меньшему
      else if(sort_arr_th[0]<sort_arr_th[sortarrlast]){
        sort_arr_th.sort(); //Сортировка
        sort_arr_th.reverse(); //Реверсия"разворот" массива
        back:
        for(let j = 4; j < thLength; j++){
            th_value[j].innerHTML = sort_arr_th[j-4];
            continue back;
        }
      }else{console.log("Maybe you can fix this? Error :D");}// Вывести ошибку если условия не имеют значения true "то есть если ни один из вариантов не работает"...
    }
  }
}





let tr_value = document.getElementsByTagName("tr");
let trLength = tr_value.length;
let last_tr_value = trLength-1; 

th_value[0].addEventListener("click", SortNumber);

function SortNumber() {
  
  var sort_arr_tr = []; 

  for(let i = 1; i < trLength; i++){

    let a = tr_value[i].innerHTML; 

    sort_arr_tr.push(a);

    if(i == last_tr_value){
      var sortarrlength = sort_arr_tr.length;
      var sortarrlast = sort_arr_tr.length-1;
      // console.log(sortarrlength);

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
      }else{console.log("Maybe you can fix this? Error :D");}// Вывести ошибку если условия не имеют значения true "то есть если ни один из вариантов не работает"...
    }
  }
}