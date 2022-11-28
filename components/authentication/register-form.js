function Register() {
    return (
<div dir='rtl' className="h-full md:w-1/2 w-full px-8 py-6 mt-4">
        <h3 className="text-right text-2xl font-Roboto font-bold">تسجيل جديد للشركات و الأفراد</h3>
        <form action="" className="mt-4 p-4 border border-gray-200">
            <div>
                <div>
                    <label className="font-Roboto block" for="phone">الهاتف</label>
                    <input type="phone"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                        focus:ring-1 focus:ring-orange-700"/>
                </div>
                <div className="mt-4">
                    <label className="font-Roboto block" for="company">الشركة</label>
                    <input type="text" 
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                        focus:ring-1 focus:ring-orange-700"/>
                </div>                  
                <div className="mt-4">
                    <label className="font-Roboto block" for="username">اسم المستخدم *</label>
                    <input type="text"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                        focus:ring-1 focus:ring-orange-700"/>
                </div>               
                <div className="mt-4">
                    <label className="font-Roboto block" for="email">البريد الإلكتروني *</label>
                    <input type="text"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                        focus:ring-1 focus:ring-orange-700"/>
                </div>
                <div className="mt-4">
                    <label className="font-Roboto block">كلمة المرور *</label>
                    <input type="password" placeholder="Password"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                        focus:ring-1 focus:ring-orange-700"/>
                </div>
                <p className="font-Roboto mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                <span className="text-sm text-orange-500 hover:underline">سياسة الخصوصية.</span></p>
                <button className="px-6 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-700">تسجيل جديد للشركات و الأفراد</button>
            </div>
        </form>
</div>
    );
  }
  
  export default Register;