const add1 = document.getElementById('addend1');
const add2 = document.getElementById('addend2');
const btn = document.getElementById('addbtn');
const answ = document.getElementById('answer');
const add = document.getElementById('adder');
const mult = document.getElementById('mult');
const subt = document.getElementById('subt');
const divis = document.getElementById('divis');
const modetxt = document.getElementById('modetext');
const txt = document.getElementById('txt');
const clear = document.getElementById('clear');
var loggedin = false;
const loginhide = document.getElementById('pass');
const login = document.getElementById('login');
const user = document.getElementById('user');
const pass = document.getElementById('password');
const logintxt = document.getElementById('logintxt2');
const logintxt2 = document.getElementById('logintxt')
const hide1 = document.getElementById('thistoo');
const hide2 = document.getElementById('hidethis');
const cost = 5;
const circlea = document.getElementById('circle');
const circlev = document.getElementById('circlev');
const trianglea = document.getElementById('trianglea');
const squarea = document.getElementById('squarea');
var mode = 'Addition';
const container = document.getElementById('container');
const side = document.getElementById('side');
container.style.visibility = 'hidden';

function setnumberplaceholder(){
	add1.placeholder = 'Number 1';
	add2.placeholder = 'Number 2';
	add2.style.visibility = 'visible';
};

function setside(){
	add1.placeholder = 'Side 1';
	add2.placeholder = 'Side 2';
	add2.style.visibility = 'visible';
}

function setareaplaceholder(){
	add2.style.visibility = 'hidden';
	add1.placeholder = 'Radius';
};

function setvolumeplaceholder(){
	add2.style.visibility = 'visible';
	add1.placeholder = 'Radius';
	add2.placeholder = 'Height';
};

function settrianglea(){
	add2.placeholder = 'Height';
	add1.placeholder = 'Base';
	add2.style.visibility = 'visible';
};

function setsquarea(){
	add1.placeholder = 'Length';
	add2.placeholder = 'Width';
	add2.style.visibility = 'visible';
};

function settext(element, text){
	element.innerHTML = text;
};

function gettext(element){
	return element.innerHTML
};

login.onclick = function(){
	if (!pass.value == ''&& !user.value == ''){
		if (pass.value == 'duke6868' && user.value == 'Jaden' || pass.value == 'locked5' && user.value == 'Kishorth'){
			loggedin = true;
			logintxt2.innerHTML = `You are logged in as ${user.value}`;
			container.style.visibility = 'visible';
			document.getElementById('pass').remove()
		} else {
			logintxt.innerHTML = 'You have tried to log in using a invalid username/password, to get your own login, talk to Jaden.'
		};
	} else{
		logintxt.innerHTML = 'Please enter a username and password.'
	};
};

clear.onclick = function(){
	add1.value = '';
	add2.value = '';
	answ.innerHTML = '';
};

side.onclick = function(){
	if (mode == 'Side'){
		// Do nothing
	} else{
		mode = 'Side';
		modetxt.innerHTML = 'Pythagoreom Theorem';
		btn.innerHTML = 'Get Length Of Hypotenuse';
		settext(txt, 'Pythagoreom Theorem');
		setside();
	};
};

squarea.onclick = function(){
	if (mode == 'SquareA'){
		// Do nothing
	} else{
		mode = 'SquareA';
		modetxt.innerHTML = 'Area Of A Square';
		btn.innerHTML = 'Get Area';
		settext(txt, 'Area Of A Square');
		setsquarea();
	};
};

trianglea.onclick = function(){
	if (mode == 'TriangleA'){
		// Do nothing
	} else{
		mode = 'TriangleA';
		modetxt.innerHTML = 'Area Of A Triangle';
		btn.innerHTML = 'Get Area';
		settext(txt, 'Area Of A Triangle');
		settrianglea();
	};
};

circlea.onclick = function(){
	if (mode == 'CircleA'){
		// Do nothing
	} else {
		mode = 'CircleA';
		modetxt.innerHTML = 'Area Of A Circle';
		btn.innerHTML = 'Get Area';
		settext(txt, 'Area Of A Circle');
		setareaplaceholder();
	};
};

circlev.onclick = function(){
	if (mode == 'CircleV'){
		// Do nothing
	} else {
		mode = 'CircleV';
		modetxt.innerHTML = 'Volume Of A Cylinder';
		btn.innerHTML = 'Get Volume';
		settext(txt, 'Volume Of A Cylinder');
		setvolumeplaceholder();
	};
};

add.onclick = function(){
	if (mode == 'Addition'){
		// Do nothing
	} else {
		mode = 'Addition';
		modetxt.innerHTML = 'Addition';
		btn.innerHTML = 'Add';
		settext(txt, 'Addition');
		setnumberplaceholder();
	};
};

divis.onclick = function(){
	if (mode == 'Division'){
		// Do nothing
	} else {
		mode = 'Division';
		modetxt.innerHTML = 'Division';
		btn.innerHTML = 'Divide';
		settext(txt, 'Division');
		setnumberplaceholder();
	};
};

mult.onclick = function(){
	if (mode == 'Multiplication'){
		// Do nothing
	} else {
		mode = 'Multiplication';
		modetxt.innerHTML = 'Multiplication';
		btn.innerHTML = 'Multiply';
		settext(txt, 'Multiplication');
		setnumberplaceholder();
	};
};

subt.onclick = function(){
	if (mode == 'Subtraction'){
		// Do nothing
	} else {
		mode = 'Subtraction';
		modetxt.innerHTML = 'Subtraction';
		btn.innerHTML = 'Subtract';
		settext(txt, 'Subtraction');
		setnumberplaceholder();
	};
};

btn.onclick = function(){
	if (loggedin == true){
		if (mode == 'Addition'){
			if (add1.value != ""&&add2.value != ""){
				if (!isNaN(add1.value)&&!isNaN(add2.value)){
					answ.innerHTML = parseFloat(add1.value) + parseFloat(add2.value);
				} else{
					answ.innerHTML = `Error adding ${add1.value} + ${add2.value}`;
				};
			}else{
				answ.innerHTML = 'Value missing';
			};
		} else if (mode == 'Multiplication'){
			if (add1.value != ""&&add2.value != ""){
				if (!isNaN(add1.value)&&!isNaN(add2.value)){
					answ.innerHTML = parseFloat(add1.value) * parseFloat(add2.value);
				} else{
					answ.innerHTML = `Error multiplying ${add1.value} x ${add2.value}`;
				};
			} else{
				answ.innerHTML = 'Value missing';
			};
		} else if (mode == 'Division'){
			if (add1.value != ""&&add2.value != ""){
				if (!isNaN(add1.value)&&!isNaN(add2.value)){
					answ.innerHTML = parseFloat(add1.value) / parseFloat(add2.value);
				} else{
					answ.innerHTML = `Error dividing ${add1.value} ÷ ${add2.value}`;
				};
			} else{
				answ.innerHTML = 'Value missing';
			};
		} else if (mode == 'Subtraction'){
			if (add1.value != ""&&add2.value != ""){
				if (!isNaN(add1.value)&&!isNaN(add2.value)){
					answ.innerHTML = parseFloat(add1.value) - parseFloat(add2.value);
				} else{
					answ.innerHTML = `Error subtracting ${add1.value} − ${add2.value}`;
				};
			} else{
				answ.innerHTML = 'Value missing';
			};
		} else if (mode == 'CircleA'){ 
			if (add1.value != ""){
				if (!isNaN(add1.value)){
					var num1 = parseFloat(add1.value);
					var x = num1*num1;
					var area = x*3.14;
					answ.innerHTML = `The Area Of The Circle Is: ${area}units²`;
				} else{
					answ.innerHTML = `Error getting area of cirlce with radius ${add1.value}.`;
				};
			} else{
				answ.innerHTML = 'Value missing';
			};
		} else if (mode == 'CircleV'){
			if (add1.value != "" && add2.value != ""){
				if (!isNaN(add1.value) && !isNaN(add2.value)){
					var num1 = parseFloat(add1.value);
					var x = num1*num1;
					var area = x*3.14;
					var volume = area*parseFloat(add2.value)
					answ.innerHTML = `The Volume Of The Cylinder Is: ${volume}units³`;
				} else{
					answ.innerHTML = `Error getting volume of cylinder with radius '${add1.value}' and height '${add2.value}'.`;
				};
			} else{
				answ.innerHTML = 'Value missing';
			};
		} else if (mode == 'TriangleA'){
			if (add1.value != '' && add2.value != ''){
				if (!isNaN(add1.value)&&!isNaN(add2.value)){
					var base = parseFloat(add1.value);
					var height = parseFloat(add2.value);
					var e = base*height;
					var area = e/2;
					answ.innerHTML = `The area of the triangle is ${area}units²`;
				} else{
					answ.innerHTML = `Error getting area of triangle with height ${add2.value} and base ${add1.value}.`;
				}
			} else {
				answ.innerHTML = 'Value missing';
			}; 
		} else if (mode == 'SquareA'){
			if (add1.value != '' && add2.value != ''){
				if (!isNaN(add1.value)&&!isNaN(add2.value)){
					var length = parseFloat(add1.value);
					var width = parseFloat(add2.value);
					var area = length*width
					answ.innerHTML = `The area of the square is ${area}units².`
				} else{
					answ.innerHTML = `Error getting area of square with length ${add1.value} and width ${add2.value}.`
				};
			} else{
				answ.innerHTML = 'Value missing';
			};
		} else if (mode == 'Side'){
			if (add1.value != '' && add2.value != ''){
				if (!isNaN(add1.value)&&!isNaN(add2.value)){
					var side1 = parseFloat(add1.value);
					var side2 = parseFloat(add2.value);
					var squared = side1*side1;
					var squared2 = side2*side2;
					var hypo = squared + squared2;
					var final = Math.sqrt(hypo);
					answ.innerHTML = `The length of the hypotenuse is ${final}units.`
				} else{
					answ.innerHTML = `Error getting area of square with length ${add1.value} and width ${add2.value}.`
				};
			} else{
				answ.innerHTML = 'Value missing';
			};
		};
	} else{
		answ.innerHTML = 'You have not logged in, to get a username and password talk to Jaden';
	};
};