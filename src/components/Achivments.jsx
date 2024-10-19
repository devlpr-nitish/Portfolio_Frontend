import React from 'react'

const Achivments = () => {
  const achivmentsList = [
    {
      title: "GeeksforGeeks Campus Mantri",
      description: "I've served as a campus mantri for GeeksforGeeks, where I've had the opportunity to engage deeply with tech communities and foster learning environments."
    },
    
  ];

  return (
    <div className="bg-transparent py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <h1 className=" text-3xl font-bold text-center text-gray-300 mb-8 border-b-2 border-blue-500 pb-4">Achievements</h1>
        <ul className="space-y-6">
          {achivmentsList.map((achivement, index) => (
            <li key={index} className="bg-gray-700 shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-300 mb-2">{achivement.title}</h2>
              <p className="text-gray-300">{achivement.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Achivments
