import Login from "./login-form";
import Register from "./register-form";

function AuthForm() {

    return (
<div dir='rtl' className="" style={{"margin-top": "-100px"}}>
  <h2 className="text-center font-Roboto font-bold md:text-4xl text-2xl">
  لطلب الكميات بسعر الجملة للمصانع والشركات يرجى تعبئة بياناتك وسيتم التواصل معك قريباً!
  </h2>
  <div dir='rtl' className="flex justify-between items-start mx-auto h-full lg:w-6/7 w-full px-8 py-6 mt-4 shaddow-lg">
  <Login/>
  <Register/>
  </div>
</div>
    );
  }
  
  export default AuthForm;