import TypedMain from "./components/TypedMain";


export default function Home() {

  return (
    <main>
      <div className="w-full h-screen text-center shadow-lg">
        <div className="max-w-[1250px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="py-1 md:py-2 uppercase text-[.8rem] md:text-xl tracking-widest text-gray-600">
              Welcome to our Banking Service,{" "}
            </p>
            <h1 className="py-1 md:py-2 text-gray-700 md:text-7xl">
              <span className="text-[#12b176]">GURKHA</span>FINANCE
            </h1>

            <TypedMain />

            <h2 className="py-1 md:py-2 text-gray-500 text-xl md:text-4xl">
              Nepal&apos;s Best C-Class Finance Company
            </h2>
            <p className="md:py-2 text-gray-600 m-auto">
              Your money is safe with us!
            </p>
            <p className="text-xl font-bold md:py-2 text-gray-600 m-auto">
              Developed by {process.env.DEVELOPER_NAME}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
