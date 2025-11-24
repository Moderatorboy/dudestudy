const mentors = [
  { name: "Anurag Sir", image: "/mentors/anurag.jpg" },
  { name: "Ravi Sir", image: "/mentors/ravi.jpg" },
  // Add more mentors here
];

export default function MentorGallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {mentors.map((mentor, index) => (
        <div key={index} className="text-center">
          <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full mx-auto shadow-md" />
          <p className="mt-2 text-white font-semibold">{mentor.name}</p>
        </div>
      ))}
    </div>
  );
}
