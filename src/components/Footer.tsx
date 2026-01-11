import Link from "next/link"


const Foother = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-white/10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
    
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
      <p className="text-sm leading-relaxed">
        Music School is a premier institution dedicated to teaching the art and
        science of music. We nurture talent from the ground up, fostering a
        vibrant community of musicians.
      </p>
    </div>

    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:text-white transition-colors">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition-colors">Courses</a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </li>
      </ul>
    </div>

    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
      <div className="flex flex-col space-y-2">
        <a href="#" className="hover:text-white transition-colors">Facebook</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
      </div>
    </div>

    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
      <p className="text-sm">Multan, Pakistan</p>
      <p className="text-sm">232, This is wrong address</p>
      <p className="text-sm mt-2">Email: asshikrani66@gmail.com</p>
      <p className="text-sm">Phone: +92 333 2244333</p>
    </div>
  </div>
  <p className="text-center text-xs pt-8">Made with 🥴 by <Link target="_blank" className="text-green-500" href={'https://ahmadsiddique.vercel.app'}>Ahmad Siddique</Link></p>
</footer>
  )
}

export default Foother
