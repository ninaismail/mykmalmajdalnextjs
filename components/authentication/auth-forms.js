import Login from "./login-form"
import Register from "./registration-form"

  function AuthForms() {
    return (
  <div dir='rtl' className="" style={{"margin-top": "-100px"}}>
      <h2 className="text-center font-Roboto font-bold md:text-4xl text-2xl"
        >تسجيل جديد للشركات و الأفراد</h2>
      <div className="w-3/4 mx-auto shadow-xl flex flex-wrap md:flex-nowrap items-start justify-center">
        <Login/>
        <Register/>
      </div>
  </div>
    );
  }
  
  export default AuthForms;