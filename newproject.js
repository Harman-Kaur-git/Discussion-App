let subject;
let question;
let deleteS;
let deleteQ;
let addresponse;

let myQuestions = [];
let task = localStorage.getItem("myQue");
if (task != null) {
  myQuestions = JSON.parse(task);
}


let myResponses = [];
let resp = localStorage.getItem("myresponses");
if (resp != null) {
  myResponses = JSON.parse(resp);
}


function createNoMatchDiv(leftdiv) {
  let noMatchDiv = document.createElement("div");
  noMatchDiv.innerHTML = `<h3>NO MATCH FOUND</h3>`;
  noMatchDiv.id = "nomatch";
  leftdiv.appendChild(noMatchDiv);
  document.getElementById("nomatch").style.display = "none";
}

function createMainDiv() {
  let div = document.createElement("div");
  div.style.width = "850";
  div.style.border = "2px solid white";
  div.style.backgroundColor = "white";
  div.style.marginLeft = "350px";
  div.style.marginTop = "160px";
  document.body.appendChild(div);
  createTitle(div);
  createLowerBox(div);
}
createMainDiv();

function createTitle(div) {
  let title = document.createElement("div");
  title.style.width = "850";
  title.style.height = "60px";
  title.style.backgroundColor = "rgba(31, 130, 110, 1)";
  title.innerText = "Discussion Portal";
  title.style.color = "white";
  title.style.fontFamily = "verdana";
  title.style.paddingLeft = "20px";
  title.style.paddingTop = "15px";
  title.style.fontSize = "30px";
  div.appendChild(title);
}

function createLowerBox(div) {
  let lowerBox = document.createElement("div");
  lowerBox.style.display = "flex";
  lowerBox.style.width = "850";
  div.appendChild(lowerBox);
  createLeftDiv(lowerBox);
  createRightDiv(lowerBox);
}

function createLeftDiv(lowerBox) {
  let leftdiv = document.createElement("div");
  leftdiv.style.width = "350";
  leftdiv.id = "leftDiv";
  lowerBox.appendChild(leftdiv);
  createNoMatchDiv(leftdiv);
  createUpperDiv(leftdiv);
  createLowerDiv(leftdiv);
  
}

function createRightDiv(lowerBox) {
  let rightdiv = document.createElement("div");
  rightdiv.style.width = "500";
  rightdiv.id = "rightdiv";
  lowerBox.appendChild(rightdiv);
  createQuestionForm(rightdiv);
}


function createUpperDiv(leftdiv) {
  let upperdiv = document.createElement("div");
  upperdiv.style.backgroundColor = "white";
  upperdiv.style.height = "60px";
  upperdiv.style.width = "350px";
  leftdiv.appendChild(upperdiv);
  createNewQuestionButton(upperdiv);
  createSearchBar(upperdiv);
}

function createLowerDiv(leftdiv) {
  let lowerdiv = document.createElement("div");
  lowerdiv.style.width = "350px";
  lowerdiv.id = "lowerdiv";
  leftdiv.appendChild(lowerdiv);
  
}

function createQuestionForm(rightdiv) {
  let formDiv = document.createElement("div");
  formDiv.style.width = "500";
  formDiv.id = "question-form";
  rightdiv.appendChild(formDiv);
  content1(formDiv);
  content2(formDiv);
  createTextBox(formDiv);
  createQueBox(formDiv);
  createSubmit(formDiv);
}

function createResponseForm(subject, question, id) {
  let responseDiv = document.createElement("div");
  responseDiv.style.width = "500";
  responseDiv.id = "response-form";
  document.getElementById("rightdiv").appendChild(responseDiv);
  makeque(responseDiv);
  let addQue = createNewQuestions(subject, question, id);
  addQue.innerHTML =
    `<span style="font-weight:bold;font-size:20px;">${subject}</span>` +
    "<br>" +
    question;
  addQue.style.marginLeft = "60px";
  addQue.style.marginTop = "10px";
  addQue.style.width = "400px";
  addQue.style.height = "60px";
  responseDiv.appendChild(addQue);
  resolve(responseDiv, subject, question, id);
  makeres(responseDiv);
  addresponse = document.createElement("div");
  addresponse.style.marginTop = "10px";
  addresponse.style.display = "flex";
  addresponse.style.flexDirection = "column";
  addresponse.id="addresponse";
  responseDiv.appendChild(addresponse);
  makeAdd(responseDiv);
  createNameBox(responseDiv);
  createCommentBox(responseDiv);
  createResponseSubmitButton(addresponse, responseDiv, id);
}

function createNewQuestionButton(upperdiv) {
  let newque = document.createElement("button");
  newque.innerText = "Next Question Form";
  newque.style.float = "left";
  newque.style.height = "30px";
  newque.style.backgroundColor = "rgba(34, 51, 240, 1)";
  newque.style.color = "white";
  newque.style.border = "2px solid rgba(34, 51, 240, 1)";
  newque.style.marginLeft = "10px";
  newque.style.marginTop = "15px";
  newque.style.borderRadius = "3px";
  newque.onclick = () => {
    document.getElementById("rightdiv").innerHTML = "";
    createQuestionForm(rightdiv);
    document.getElementById("question-form").style.display = "block";
  };
  upperdiv.appendChild(newque);
}

function createSearchBar(upperdiv) {
  let search = document.createElement("input");
  search.placeholder = "Search questions...";
  search.style.height = "30px";
  search.style.marginLeft = "17px";
  search.style.marginTop = "15px";
  search.addEventListener("input",function()
  {
    let searchValue=search.value.toLowerCase();
    let found=false;
    let lowerdiv=document.getElementById("lowerdiv");
    for(i=0;i<lowerdiv.childNodes.length;i++)
    {
      let toBeSearched=lowerdiv.childNodes[i];
      let sub=(toBeSearched.getAttribute("data-subject")||"").toLowerCase();
      let que=(toBeSearched.getAttribute("data-question")||"").toLowerCase();
      if(sub.includes(searchValue)||que.includes(searchValue))
      {
        toBeSearched.style.display="block";
        found=true;
      }
      else{
        toBeSearched.style.display="none";
      }
    }
    if(searchValue==="")
    {
     document.getElementById("nomatch").style.display = "none";

    }
    else if(found==false)
    {
        document.getElementById("nomatch").style.display = "block";

    }   
    else{
        document.getElementById("nomatch").style.display = "none";

    }
  }); 
  if(search.value==="")
  {
        document.getElementById("nomatch").style.display = "none";
  }
  upperdiv.appendChild(search);
}

function createNewQuestions(subject, question, id, time) {
  let quediv = document.createElement("button");
  quediv.style.width = "350px";
  quediv.style.borderTop = "2px solid rgb(220, 220, 220)";
  quediv.style.borderLeft = "none";
  quediv.style.borderBottom = "2px solid rgb(220,220,220)";
  quediv.style.borderRight = "2px solid rgb(220,220,220)";
  quediv.setAttribute("data-id", id);
  quediv.setAttribute("data-subject", subject);
  quediv.setAttribute("data-question", question);
  quediv.style.overflowWrap = "break-word";
  quediv.innerHTML =
    `<span style="font-weight:bold;font-size:20px;">${subject}</span>` +
    "<br>" +
    question +
    "<br>" +
    `<span style="float:right;">${time}</span>`;
  quediv.onclick = () => {
    document.getElementById("rightdiv").innerHTML = "";
    createResponseForm(subject, question, id);
    for (i = 0; i < myResponses.length; i++) {
    let newresponse = myResponses[i];
    if (newresponse.questionId === id) {
     addNewResponse(addresponse,newresponse.newName,newresponse.newComment,id,newresponse.time);
    }
  }
    createQuestionForm(rightdiv);
    document.getElementById("question-form").style.display = "none";
  };
  return quediv;
}

function content1(formDiv) {
  let c1 = document.createElement("h2");
  c1.innerText = "Welcome To Discussion Portal!";
  c1.style.marginLeft = "40px";
  c1.id = "welcome";
  c1.style.fontFamily = "verdana";
  c1.style.marginBottom = "10px";
  formDiv.appendChild(c1);
}

function content2(formDiv) {
  let c2 = document.createElement("div");
  c2.innerText = "Enter a subject and questions to get started";
  c2.style.marginLeft = "40px";
  c2.style.fontFamily = "verdana";
  c2.id = "content";
  formDiv.appendChild(c2);
}

function createTextBox(formDiv) {
  let text = document.createElement("input");
  text.placeholder = "Subject";
  text.height = "50px";
  text.style.marginLeft = "40px";
  text.style.marginTop = "20px";
  text.style.float = "left";
  text.id = "text";
  formDiv.appendChild(text);
}

function createQueBox(formDiv) {
  let que = document.createElement("input");
  que.type = "textarea";
  que.style.height = "70px";
  que.style.width = "220px";
  que.placeholder = "Question";
  que.style.marginTop = "10px";
  que.style.float = "left";
  que.style.marginRight = "80px";
  que.style.marginLeft = "38px";
  que.id = "que";
  formDiv.appendChild(que);
}

function createSubmit(formDiv) {
  let submit = document.createElement("button");
  submit.innerText = "submit";
  submit.style.backgroundColor = "rgba(34, 51, 240, 1)";
  submit.style.color = "white";
  submit.style.border = "2px solid rgba(34, 51, 240, 1)";
  submit.style.float = "right";
  submit.style.marginTop = "150px";
  submit.style.marginRight = "20px";
  submit.style.height = "30px";
  submit.style.borderRadius = "5px";
  submit.id = "submit";
  submit.onclick = () => {
    subject = document.getElementById("text").value;
    question = document.getElementById("que").value;
    let date = new Date();
    let id=Date.now();    
    console.log(id)
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let time = hours + ":" + min + ":" + sec;
    if (subject === "" && question === "") {
      alert("Please fill subject and question");
    } else if (subject === "") {
      alert("Please fill subject");
    } else if (question === "") {
      alert("Please fill question");
    } else {
      let id = Date.now();
      document.getElementById("question-form").style.display = "none";
      let addQue = createNewQuestions(subject, question, id, time);
      document.getElementById("lowerdiv").appendChild(addQue);
      saveToStorage(subject, question, id,time);
    }
  };
  formDiv.appendChild(submit);
}

function saveToStorage(subject, question,id, time) {
  let que = {
    subject: subject,
    question: question,
    id: id,
    time: time,
  };
  myQuestions.push(que);
  localStorage.setItem("myQue", JSON.stringify(myQuestions));
}

for (i = 0; i < myQuestions.length; i++) {
  let myque = myQuestions[i];
  let appendAfterRefresh = createNewQuestions(
    myque.subject,
    myque.question,
    myque.id,
    myque.time
  );
  document.getElementById("lowerdiv").appendChild(appendAfterRefresh);
}

function makeque(responseDiv) {
  let que = document.createElement("div");
  que.innerText = "Question";
  que.style.fontFamily = "verdana";
  que.style.color = "rgb(70,70,70)";
  que.style.marginLeft = "60px";
  que.style.marginTop = "30px";
  responseDiv.appendChild(que);
}

function resolve(responseDiv,subject,question,id) {
  let resolve = document.createElement("button");
  resolve.innerText = "Resolve";
  resolve.style.backgroundColor = "rgba(34, 51, 240, 1)";
  resolve.style.color = "white";
  resolve.style.border = "2px solid rgba(34, 51, 240, 1)";
  resolve.style.float = "right";
  resolve.style.marginTop = "20px";
  resolve.style.marginLeft = "80px";
  resolve.style.height = "30px";
  resolve.style.borderRadius = "5px";
  resolve.onclick=()=>{
    
    let lowerdiv=document.getElementById("lowerdiv");
    let length=lowerdiv.childNodes.length;
    document.getElementById("rightdiv").innerHTML=null;
    for(i=0;i<length;i++)
    {
      let match=lowerdiv.childNodes[i];
      if(match.getAttribute("data-id")===id.toString())
      {
        let deleteId=match.getAttribute("data-id")
        lowerdiv.removeChild(match);
        removeFromStorage(deleteId);
        length=length-1;
      }
      

    }
    createQuestionForm(rightdiv);
  }
  responseDiv.appendChild(resolve);
}


function removeFromStorage(deleteId)
{
  let newQuestions=[];
  let length=myQuestions.length
  for(i=0;i<length;i++)
  {
    if(myQuestions[i].id.toString()!=deleteId)
    {
      newQuestions.push(myQuestions[i]);
    }
  }
   myQuestions=newQuestions;
  localStorage.setItem("myQue",JSON.stringify(myQuestions)); 
}

function makeres(responseDiv) {
  let res = document.createElement("div");
  res.innerText = "Responses";
  res.style.fontFamily = "verdana";
  res.style.color = "rgb(70,70,70)";
  res.style.marginLeft = "60px";
  res.style.marginTop = "50px";
  responseDiv.appendChild(res);
}

function makeAdd(responseDiv) {
  let addtext = document.createElement("div");
  addtext.innerText = " Add Response";
  addtext.style.fontFamily = "verdana";
  addtext.style.color = "rgb(70,70,70)";
  addtext.style.marginLeft = "60px";
  addtext.style.marginTop = "50px";
  responseDiv.appendChild(addtext);
}

function createNameBox(responseDiv) {
  let nameBox = document.createElement("input");
  nameBox.placeholder = "Enter name";
  nameBox.style.marginLeft = "60px";
  nameBox.style.marginTop = "25px";
  nameBox.style.height = "30px";
  nameBox.id = "name";
  responseDiv.appendChild(nameBox);
}

function createCommentBox(responseDiv) {
  let commentBox = document.createElement("input");
  commentBox.type = "textarea";
  commentBox.style.width = "420px";
  commentBox.style.marginLeft = "60px";
  commentBox.style.marginRight = "60px";
  commentBox.style.height = "80px";
  commentBox.style.marginTop = "15px";
  commentBox.placeholder = "Enter comment";
  commentBox.id = "comment";
  responseDiv.appendChild(commentBox);
}

function createResponseSubmitButton(addresponse, responseDiv, id) {
  let submit = document.createElement("button");
  submit.innerText = "submit";
  submit.style.backgroundColor = "rgba(34, 51, 240, 1)";
  submit.style.color = "white";
  submit.style.border = "2px solid rgba(34, 51, 240, 1)";
  submit.style.float = "right";
  submit.style.marginTop = "10px";
  submit.style.height = "30px";
  submit.style.borderRadius = "5px";
  submit.onclick = () => {
      console.log(id)
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;
     document.getElementById("name").value="";
     document.getElementById("comment").value="";
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let time = hours + ":" + min + ":" + sec;
    addNewResponse(addresponse, name, comment, id, time);
    saveResponses(name,comment,id,time);
  };
  responseDiv.appendChild(submit);
}


function saveResponses(name, comment, id, time) {
  let newR = {
    newName: name,
    newComment: comment,
    questionId: id,
    time: time,
  };
  myResponses.push(newR);
  localStorage.setItem("myresponses", JSON.stringify(myResponses));
}


function addNewResponse( addresponse,name, comment, id, time) {
  let ResponseDiv = document.createElement("div");
  ResponseDiv.style.width = "400px";
  ResponseDiv.style.overflowWrap = "break-word";
  ResponseDiv.style.backgroundColor = "rgb(240,240,240)";
  ResponseDiv.style.marginLeft = "60px";
  ResponseDiv.style.borderRight = "none";
  ResponseDiv.style.borderLeft = "none";
  ResponseDiv.style.borderTop = "none";
  ResponseDiv.id-=id;
  ResponseDiv.style.borderBottom = "2px solid rgb(180,180,180)";
  ResponseDiv.innerHTML =
    `<h2>${name}</h2>
  ` +
    comment +
    "<br>" +
    `<span style="float:right;margin-right:10px;">${time}</span>`;
  addresponse.appendChild(ResponseDiv);
}
