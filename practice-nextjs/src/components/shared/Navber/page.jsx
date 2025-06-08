const NavberPage = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavberPage;
