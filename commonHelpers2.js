import"./assets/modulepreload-polyfill-3cfb730f.js";const a="feedback-form-state",e=document.querySelector(".feedback-form"),s={email:"",message:""},o=()=>{s.email=e.elements.email.value.trim(),s.message=e.elements.message.value.trim(),localStorage.setItem(a,JSON.stringify(s))},n=()=>{const t=localStorage.getItem(a);if(t){const{email:m,message:l}=JSON.parse(t);e.elements.email.value=m,e.elements.message.value=l}};n();function r(t){t.preventDefault(),e.elements.message.value!==""&&e.elements.email.value!==""?(console.log(s),e.reset(),localStorage.removeItem(a)):alert("Не всі поля заповнені")}e.addEventListener("input",o);e.addEventListener("submit",r);
//# sourceMappingURL=commonHelpers2.js.map
