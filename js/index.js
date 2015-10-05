$(document).ready(function(){
  // console.log("document ready");

  var students = ["Riona", "Drew", "Andrew", "Ben"];
  var target = ["r", "d", "a", "b"];
  var aid = [];
  // console.log(students);

  // create list of students with help buttons
  for(i=0; i<students.length; i++){
    $("#studentList").append("<li class='row student'><span class='studentName col-md-6' id='"+ target[i] +"'>"+ students[i] + "</span><button class='aid col-md-2' id='"+ students[i] + "'> Help </button></li>");
    // console.log(students[i]);
  }

  // add functionality to click function
  $("span").click(function(){
    // console.log("click");
    var value = this.id;
    // console.log(value);
    if($(this).hasClass('ready')){
      $(this).removeClass('ready');
      console.log("red");
    }
    else{
      $(this).addClass("ready");
      console.log("green");
    }
  });

  $(".aid").click(function(){
    // console.log("help");
    var student = this.id;
    console.log(student);
    $("#studentAid").append("<li>"+ student +"</li>");
    // aid.push(student);
    // console.log(aid);
    // return help(student);
  });

  // function help(student){
  //   // for(i=0; i<aid.length; i++){
  //     $("#studentAid").append("<li>"+ aid[i] +"</li>");
  //   // }
  // }
});