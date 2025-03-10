export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1> 
      <div className="bg-gray-100 p-6 rounded-1g">
        <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div> 
        <h2 className="text-xl font-semibold">Username</h2>
        <p className="text-gray-600"> Choeying24</p>
        <div className="mt-4 flex space-x-4">
          <div>
            <span className="font-bold">1M</span> Following
          </div>
          <div>
            <span className="font-bold">356</span> Followers
          </div>
          <div>
            <span className="fAyt-bold">1B</span> Likes
          </div>
        </div>
      </div>
    </div>
  );
}