//date process
    let d = new Date();
    let output = document.getElementById('today_date');
      output.innerHTML += ` ${d.toDateString()}`;


      let data_one = document.getElementById("data_one");
      let data_two = document.getElementById("data_two");
      let data_three = document.getElementById("data_three");
      let data_four = document.getElementById("data_four");
      let data_five = document.getElementById("data_five");
      let data_six = document.getElementById("data_six");
      let data_seven = document.getElementById("data_seven");
      let data_eight = document.getElementById("data_eight");
      let result_one = document.getElementById("result_one");
      let result_two = document.getElementById("result_two");
      let findal_result = document.getElementById("findal_result")

      let text1 = document.getElementById("text1");
      let text2 = document.getElementById("text2");
      let history_list = document.getElementById("history_list");


function createTr(x) {
    let rowSpacer = document.getElementById("rowSpacer");
    if (rowSpacer){
        rowSpacer.remove();
    }

    let tr=document.createElement("tr");

    x.map(function (el) {
        let td=document.createElement("td");
        let text=document.createTextNode(el);
        td.appendChild(text);
        tr.appendChild(td);

    })
    history_list.appendChild(tr);
}
function store(){
    localStorage.setItem("record",history_list.innerHTML);
}
      document.getElementById("process").addEventListener("submit",
      function (e){
        e.preventDefault();
    //get state
    let a = data_one.value;
    let b = data_two.value;
    let c = data_three.value;
    let d = data_four.value;
    let i = data_five.value;
    let f = data_six.value;
    let g = data_seven.value;
    let h = data_eight.value+`ကျပ်`;
    let j = text1.value;
    let k = text2.value;


  //process

  let first= ((( parseInt(b*128) + parseInt(c*8) + parseInt(d) )*a)/128);
  let second=((( parseInt(i*128) + parseInt(f*8) + parseInt(g) )*a)/128);
  let third=   parseInt(first)+ parseInt(second)+ parseInt(h);
  let final_second = second.toFixed(0);



  result_one.innerHTML = first +` ကျပ်`;
  result_two.innerHTML = final_second +` ကျပ်`;
  final_result.innerHTML = third +` ကျပ်`;

  let l = final_result.innerHTML;
  let m = today_date.innerHTML;
  let arr =[m ,a,j,k,b,c,d,i,f,g,h,l];
  createTr(arr);
  store();

});

(function () {
    if(localStorage.getItem("record")){
        history_list.innerHTML = localStorage.getItem("record");
    }else{
        history_list.innerHTML = `<tr id="rowSpacer"  ><td colspan="12" style="text-align: center">There is no Record</td></tr>`;
    }
})();
function refresh(){
  data_two.value="";
  data_three.value="";
  data_four.value="";
  data_five.value="";
  data_six.value="";
  data_seven.value="";
  data_eight.value="";
  text1.value="";
  text2.value="";
  result_one.innerHTML="0.00 ကျပ်";
  result_two.innerHTML="0.00 ကျပ်";
    final_result.innerHTML="0.00 ကျပ်";
  text1.focus();

};


