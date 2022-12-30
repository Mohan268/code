
let input = document.querySelector('#Input');
let search = document.querySelector('#search');

fetch("./data.json")
.then(response=>{
    response.json()
    .then(data=>{
        console.log(data);
        if(data.length > 0){
            var temp = "";

           data.forEach((item)=>{
            search.addEventListener('click', ()=>{
                if(input.value.toLowerCase() == item.first_name.toLowerCase() || input.value.toLowerCase() == item.last_name.toLowerCase()){
                temp += "<tr>";
                temp += "<td>"+item.id+"</td>"
                temp += `<td><img style="height:38px; width:38px; border:1px solid #000000; border-radius:1000px; margin-bottom:-10px; margin-right:20px;" src="${item.img_src}"/>${item.first_name} ${item.last_name}</td>`
                temp += "<td>"+item.gender+"</td>"
                temp += "<td>"+item.class+"</td>"
                temp += "<td>"+item.marks+"</td>"
                temp += "<td>"+item.passing+"</td>"
                temp += "<td>"+item.email+"</td></tr>"  
                }
              document.querySelector('#tabbody').innerHTML = temp;
             })
          })
        }
    })
})