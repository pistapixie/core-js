/* ------------------- */
/* Logical Operators   */
/* ------------------- */

// let age = 20;
// if (age >= 14 && age <= 90) {
//   console.log('청소년 또는 성인입니다.');
// }

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB a || b;

// 부정 연산자
let reverseValue;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;


// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};



// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};


//간이 로그인 구현하기
let userName = prompt("사용자 이름을 입력해주세요.", '');

if (userName == 'Admin') {

  let pass = prompt('비밀번호:', '');

  if (pass == 'TheMaster') {
    alert( '환영합니다!' );
  } else if (pass == '' || pass == null) {
    alert( '취소되었습니다.' );
  } else {
    alert( '인증에 실패하였습니다.' );
  }

} else if (userName == '' || userName == null) {
  alert( '취소되었습니다.' );
} else {
  alert( "인증되지 않은 사용자입니다." );
}


function login(){

  let userName = prompt('누구십니까?');


  if(!userName) return;

  // 취소 버튼과 ESC 누르면 null 이뜸.
  // 어떤 값도 입력하지 않았을 경우 => 빈문자 '' 
  
  if(userName.toLowerCase() === 'admin'){
    
    let password = prompt('비밀번호는?');
  
    if(password.toLowerCase() === 'themaster'){
      console.log('로그인 성공 환영합니다!');
  
    }else{
      console.log('비밀번호를 잘못 입력하셨습니다.');
    }
  
  }else if(userName === null || userName.replace(/\s*/g,'') === ''){
  
    console.log('취소됐습니다.');
  
  }else{
  
    console.log('올바른 사용자가 아닙니다!');
  
  }
  
}




login();