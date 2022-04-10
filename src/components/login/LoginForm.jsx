export default function LoginForm() {

    return (

        <>
            <form action="/login" method="POST" className="container mx-auto flex flex-col rounded-[0.5rem] mt-20 p-5 bg-gray-200 shadow-2xl shadow-slate-500 w-1/4">
                <h1 className="font-black text-2xl py-7">Login</h1>
                <div className="flex flex-col py-5">
                    <label >
                        Email:
                    </label>
                    <input type="text" name="username"/>
                </div>
                <div className="flex flex-col py-5">
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password"/>

                </div>
                <input className="bg-blue-400 rounded-[0.3rem]  text-white font-bold px-3 mt-6 w-1/4" type="submit" value="Enviar"/>  

                <a className=" mt-20 text-blue-500" href="/register">No tengo cuenta</a>
            </form>


        </>
    );
  }