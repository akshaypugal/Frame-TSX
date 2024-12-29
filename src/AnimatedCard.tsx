

const AnimatedCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ">
       <img
         className="w-full h-48 object-cover"
         src="https://tse1.mm.bing.net/th?id=OIP.YZF7_IYEguXaPCvpbTL3aQHaEK&pid=Api&P=0&h=180"
         alt="card image"
       />
       <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Card Title</h2>
          <p className="text-gray-700 mb-4">
            this is the trail wrong aoh 
          </p>
          <button className="px-4 py-2 bg-teal-500 text-white rounde hover:bg-teal-400 transition">Learn more</button>
       </div>
    </div>
  )
}

export default AnimatedCard
