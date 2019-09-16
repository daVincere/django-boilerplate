
// $('#datebutton').on('click', function(e) { 
//     e.preventDefault();
//     var date = $('#date').val();
//     date = date.split("-")[2]
//     $.ajax({
//       type : "POST",
//       url : "127.0.0.1:8000",
//       dataType : "text",
//       contentType: "application/json",
//       data : date,
//       success : function(response) {
//         document.getElementById("final_day").innerHTML = response.date;
//         document.getElementById("final_weight").innerHTML = response.weight;
//       },
//       error : function(error) {
//         alert("something went wrong");
//       }
//   });
// })