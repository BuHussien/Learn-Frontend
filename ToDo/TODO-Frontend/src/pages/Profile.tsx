interface IProps {}
function getUserData() {
  const userString = localStorage.getItem("loggedInUser");
  const user = userString ? JSON.parse(userString) : null;
  const email = user["email"];

  return email;
}
const ProfilePage = ({}: IProps) => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-4">
        <img src="/public/Profile.jpg" alt="" className="w-28 h-28 rounded-full border-2 border-sky-400"/>
        <h1 className="text-lg from-neutral-700 font-mono ">{getUserData()}</h1>
      </div>

      <h1 className="text-center pt-20 text-7xl text-gray-600 mb-7">Gallery</h1>

      <div className="bg-rose-100 grid grid-cols-5 m-2 p-5 gap-7">
        <img src="/public/pics/8.jpg"  alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/7.jpg"  alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/6.jpg"  alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/2.jpg"  alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/3.jpg"  alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/10.jpg" alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/11.jpg" alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/12.jpg" alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/13.jpg" alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/14.jpg" alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/15.jpg" alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/16.jpg" alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/18.jpg" alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/4.jpg"  alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
        <img src="/public/pics/20.jpg" alt="" className="rounded-2xl border-fuchsia-700 border-b-4 border-l-2" />
      </div>
    </div>
  );
};

export default ProfilePage;
