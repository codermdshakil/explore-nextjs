

export const metadata = {
  title:"Home page",
  description:"This is layout descriptions"
}


export default function Home() {
  return (
    <div>
      <h2>This is root file</h2>
      <div className="avatar">
        <div className="w-32 rounded">
          <img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" />
        </div>
      </div>
      <button className="btn btn-primary">Primary</button>
    </div>
  );
}
