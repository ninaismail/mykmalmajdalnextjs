
function Login() {
  return (
<div dir='rtl' className="h-full md:w-1/2 w-full px-8 py-6 mt-4">
    <h3 className="text-right text-2xl font-Roboto font-bold">تسجيل الدخول</h3>
    <form action="" className="mt-4 p-4 border border-gray-200">
        <div>
            <div>
                <label className="font-Roboto block" for="email">اسم المستخدم أو البريد الإلكتروني *</label>
                <input type="text"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                    focus:ring-1 focus:ring-orange-700"/>
            </div>
            <div className="mt-4">
                <label className="font-Roboto block">كلمة المرور *</label>
                <input type="password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                    focus:ring-1 focus:ring-orange-700"/>
            </div>
            <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-white bg-orange-500 border-gray-300 
                focus:ring-orange-700 focus:ring-2"/>
                <label for="default-checkbox" className="ml-2 text-sm font-medium">تذكرني</label>
            </div>
                <button className="px-6 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-700">تسجيل الدخول</button>
                <a href="#" className="text-sm text-orange-500 hover:underline">نسيت كلمة مرورك؟</a>
        </div>
    </form>
</div>
  );
}

export default Login;