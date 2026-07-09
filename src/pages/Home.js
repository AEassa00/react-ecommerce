


export default function Home() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <h1 className="text-start">
        Welcome{currentUser ? `, ${currentUser.name}` : " to Abdallah commerce"}
      </h1>
      
    </div>
  );
}
