import Login from "./login-form"
import Register from "./registration-form"

  function AuthForms() {
    return (
  <div dir='rtl' className="" style={{"margin-top": "-100px"}}>
      <h2 className="text-center font-Roboto font-bold md:text-4xl text-2xl">
      لطلب الكميات بسعر الجملة للمصانع والشركات يرجى تعبئة بياناتك وسيتم التواصل معك قريباً!
      </h2>
      <div className="md:w-5/6 w-full mx-auto shadow-xl flex flex-wrap md:flex-nowrap items-start justify-center">
        <Login/>
        <Register/>
      </div>
  </div>
    );
  }
  
  export default AuthForms;