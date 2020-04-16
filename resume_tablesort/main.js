
// Комментарии пока будут на русском языке, позже пофикшу это.
// Присваиваем переменным значения th и td в таблице
let th_value = document.getElementsByTagName("th");
let td_value = document.getElementsByTagName("td");
// Передаем длину массива со значениями td переменной tdLength
let tdLength = td_value.length;
// Далее присваиваем последнее значение массива td переменной last_td_value
let last_td_value = tdLength-1; 
// Вешаем простой обработчик событий и при клике задействуем функцию Sort для вычисления и сортировки данных
th_value[0].addEventListener("click", Sort);

// Создаем функцию Sort 
function Sort() {
  
  let sort_arr_td = []; // Создаем пустой массив для сохранения в него данных из цикла
  
  for(let i = 0; i < tdLength; i++){
// Сохраняем в переменную данные в соответствии с индексом их расположения в массиве td...
    let a = td_value[i].innerHTML; 
// Записываем эти данные в пустой массив
    sort_arr_td.push(a);
// Если i будет равным последнему "индексу" массива tdLength 
    if(i == tdLength-1){
// Если первый эелемент будет больше последнего - выполнить сортировку и вывести в порядке от меньшего к большему
      if(sort_arr_td[0]>sort_arr_td[last_td_value]){
          sort_arr_td.sort();//Сортировка
        for(let j = 0; j < tdLength; j++){
          td_value[j].innerHTML = sort_arr_td[j];
        }
      }
// Если первый эелемент будет меньше последнего - выполнить сортировку и вывести в обратном порядке от большего к меньшему
      else if(sort_arr_td[0]<sort_arr_td[last_td_value]){
        sort_arr_td.sort(); //Сортировка
        sort_arr_td.reverse(); //Реверсия"разворот" массива
        for(let j = 0; j < tdLength; j++){
          td_value[j].innerHTML = sort_arr_td[j];
        }
      }else{console.log("Maybe you can fix this? Error :D");}// Вывести ошибку если условия не имеют значения true "то есть если ни один из вариантов не работает"...
    }
  }
}
