export default function Footer() {
  return (
    <footer className="shadow bg-indigo-700 mt-32">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://Geu.ac.in/" className="flex items-center mb-4 sm:mb-0">
                <img src="https://lawbhoomi.com/wp-content/uploads/2022/03/Graphic-Era-Hill-University.jpg" className="rounded-full h-14 w-14 mr-4" alt="Graphic era Logo" />
                <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">Graphic Era</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Link 1</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Link 2</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Link 3</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Link 4</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">© 2023 <a href="https://geu.ac.in/" className="hover:underline">Graphic Era™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}