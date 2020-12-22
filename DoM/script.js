//Heading
var head=document.createElement("div");
head.setAttribute('class','header')
 
var doc=document.createElement("div");
var image=document.createElement("IMG")
image.setAttribute("src","img_avatar.png")
doc.append(image) 

var center=document.createElement("div");
center.setAttribute('class','center')
 
var names=document.createElement("div");
 
 var Strong=document.createElement("Strong")
 Strong.setAttribute('class','name');
 Strong.innerHTML="BRAIN DUDEY"
 names.append(Strong);

head.append(doc,center,names)
document.body.append(head)

var line=document.createElement("div");
line.setAttribute('class','head')
var ptag=document.createElement("P");
ptag.innerHTML="N.Damen Avanue,Chicago 99999|999-9999|hello@kickresume.com|www.kickresume.com";
line.append(ptag);

var center=document.createElement("div");
center.setAttribute('class','hline')

document.body.append(line,center)

//Heading --End--

//left-side-design
var clas=document.createElement("div")
clas.setAttribute('class','body-style')

var table=document.createElement("TABLE")
clas.append(table)

var tr=document.createElement("TR")
table.append(tr)
var td=document.createElement("TD")
tr.append(td)
var table1=document.createElement("TABLE")
td.append(table1)

var tr1=document.createElement("TR")
table1.append(tr1)
var td1=document.createElement("TD")
tr1.append(td1)

var tr2=document.createElement("TR")
td1.append(tr2)
var td2=document.createElement("TD")
tr2.append(td2)

var icon=Icon("fa fa-user fa icons")

var h=h21("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile")

var p=fun("Innovative optimized solution seeker.excited to be<br> at the deplyment phase of my new career as a<br>web developer. I am ambitious,adventurous,<br>assiduous,animated,and an alliteration advocate.")

td1.append(icon,h,p);

var tr3=document.createElement("TR")
var td3=document.createElement("TD")
tr3.append(td3);
td1.append(tr3);
var table2=document.createElement("TABLE")
td3.append(table2)
var icon1=Icon("fa fa-flask fa icons")

var h1=h21("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skills")

var b=document.createElement("B")
b.setAttribute("id","h1")
b.innerHTML="Technical Skills";
table2.append(icon1,h1,b)

var javaScript=tableElement("JavaScript")
table2.append(javaScript)

var CSS = tableElement("CSS")
table2.append(CSS)

var HTML=tableElement("HTML")
table2.append(HTML)

var React=tableElement("React")
table2.append(React)

var Redux=tableElement("Redux")
table2.append(Redux)

var Mongo=tableElement("Mongo")
table2.append(Mongo)

var Deployment=tableElement("Deployment")
table2.append(Deployment)

var add=document.createElement("th")
add.setAttribute('id',"h1")
add.innerHTML="Addititonal Skills";
table2.append(add)

var projectManagement=tableElement("Project Management")
table2.append(projectManagement)

var Recruitment=tableElement("Recruitment")
table2.append(Recruitment)

var Bussiness = tableElement("Business Developement")
table2.append(Bussiness)

var Edit=tableElement("Editing")
table2.append(Edit)

var fund= tableElement("Fundraising")
table2.append(fund)

var tr4=document.createElement("TR")
td3.append(tr4)
var td4=document.createElement("TD")
tr4.append(td4)

var icon2=Icon("fa fa-briefcase fa icons")

var h2=h21("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work experience")

td4.append(icon2,h2)

var table3=document.createElement("TABLE")
td4.append(table3)

var des=document.createElement("TD")
des.innerHTML="Event Manager<br>C3 Presents,Washington DC";
var des1=document.createElement("TD")
des1.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03/2014-02/2017";

table3.append(des,des1)

var ul=document.createElement("UL")
var li=document.createElement("LI")
ul.append(li)
li.setAttribute('id','align-list')
li.innerHTML="Lead and execute all phases of the event planning <br>and production spanning committe<br>recruitment,training,vendor relationship and <br>on-site facilitation.<li>Brought new business to the organisation<br>through relentless networking and stewardship<br>which helped the company win the bid for the<br>State Department Summnit on the Middle East<br>and, the companies largest civic event to the date,<br>the United Satate of Women.</li><li>Exercise fical control over the budget creation.<br>tracking and reporting.Collaboration with <br>employess at all organiational levels to<br> advance cohesive operations.</li>";
td4.append(ul)

var line= document.createElement("TD")
var div=document.createElement("div")
div.setAttribute('class','line')
line.append(div);
td3.append(line)

//Right side design.
var pos=document.createElement("TD")
pos.setAttribute('class','pos')
td3.append(pos)
var table4=document.createElement("TABLE")
pos.append(table4)

var tr6=document.createElement("TR")
table4.append(tr6)
var td6=document.createElement("TD")
tr6.append(td6)

var tr7=document.createElement("TR")
td6.append(tr7)
var td7=document.createElement("TD")
tr7.append(td7)

var tr8=document.createElement("TR")
td7.append(tr8)
var td8=document.createElement("TD")
tr8.append(td8)

var Icon4=Icon("fa fa-briefcase icons")
var h2=h21("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work experience")
td8.append(Icon4,h2)

var table5=document.createElement("TABLE")

var desc=document.createElement("TD")
desc.innerHTML="<b>Community Relations</b><br><b>Manager</b><br>Gay & Lesbian Elder Housing, Los Angeles";
var desc1=document.createElement("TD")
desc1.setAttribute('ID',"edu1");
desc1.innerHTML="06/2011-02/2014";
table5.append(desc,desc1)
td8.append(table5)

var ul3=document.createElement("UL")
var li3=document.createElement("LI")
ul3.append(li3)
li3.setAttribute('id','align-list')
li3.innerHTML="<li>Arranging presentations and pitch deck.</li><li>Designing a PR plan and establishing<br>important focus points.</li><li>Designing,creating and managing content<br>across multiple communication platforms.</li><li>Building relationships with keymedia players.</li> ";
td8.append(ul3)

var tr9=document.createElement("TR")
td6.append(tr9)
var td8=document.createElement("TD")
tr9.append(td8)

var icon3=Icon("fa fa-graduation-cap icons")

var h3=h21("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Education")

td8.append(icon3,h3)

var table4=document.createElement("TABLE")
td8.append(table4)

var dees=document.createElement("TD")
dees.innerHTML="<b>Engineering Immersion</b><br><b>Program</b><br>Thinkful,Chicago,IL<br>Project-focused intensive program with emphasis<br>on mongo,Expresss,React,and JavaScript(MERN)<br>technical stack</td>";
var dees1=document.createElement("TD")
dees1.setAttribute('id',"edu3")
dees1.innerHTML="11/2018-06/2018";

table4.append(dees,dees1)

var ul4=document.createElement("UL")
var li4=document.createElement("LI")
ul4.append(li4)
li4.innerHTML="Developed a full-stack web application<br>Renew using React that allow users to<br>explored vroius aspects of the meditation.Users<br>progress is stored on the backend created using <br>Node nad MongoDb.<li>Developed a Language learning app,foodie<br>Phonetics using spaced reptation and a linked<br>list data structure.React was used to create<br>the front end compononets while Node and <br>Mongo were used to create a backend that<br>stores user data.</li>Developed a concierge app,Pley, for<br>individuals looking for curated suggestions<br>when visiting a new place.React was used to<br>develope the front end which include real-time<br>char,drag and drop and veriety of advanced<br>features.The backend,built using Node,<br>Express,and Mongo,takes advantae of well-<br>developed RESTful API,Geospatial searching,<br>and user authenticatin with JWT..<li> ";
td8.append(ul4)


var table5=document.createElement("TABLE")
td8.append(table5)

var desk=document.createElement("TD")
desk.innerHTML="<b>BA, English</b><br>University of California,Los Angles";
var desk1=document.createElement("TD")
desk1.setAttribute('id',"edu2")
desk1.innerHTML="09/2001 - 09/2005";

table5.append(desk,desk1)

document.body.append(clas)

//functions
//To create element tr,td in the table
function tableElement(elementName){
    var tr=document.createElement("TR")

    var td1=document.createElement("TD")
    td1.innerHTML=elementName;

    var td2=document.createElement("TD")
    var Input=document.createElement("INPUT")
    Input.setAttribute('type','range');
    td2.append(Input);
    tr.append(td1,td2);
    return tr;
}

//To Create Table with two td element
function table(ele1,ele2){
    var tables=document.createElement("TABLE");
    var td1=document.createElement("TD")
    td1.innerHTML=ele1;

    var td2=document.createElement("TD")
    td2.innerHTML=ele2;
    tables.append(td1,td2)
    return tables;
}

//For Icon
function Icon(ele){
    var icons=document.createElement("I");
    icons.setAttribute('class',ele);
    return icons;
}
//for h2 element
function h21(iconName){
    var h=document.createElement("H2")
    h.innerHTML=iconName;
    return h;
}

//for paragraph
function fun(para){
    var p=document.createElement("P")
    p.innerHTML=para;
    return p;
}
