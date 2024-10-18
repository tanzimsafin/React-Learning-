import { Component, useEffect, useState } from "react";

function App() {
  const [count, setRenderState] = useState(0);
  useEffect(()=>{
    console.log(`Count has change ${count}`);
  },[count]);
  
  function SetState() {
    setRenderState(count=>count+1);
  }

  return (
    <div>
      <button onClick={SetState}>Addtodo</button>
      {console.log("reRender")}
      {Array.from({ length: count }, (_, i) => (
        <Addtodo key={i} />
      ))}
    </div>
  );
}

function Addtodo() {
  const data=[{
    title:"Hi there!",
    message:"Hey folk you good to go?"
 },{
  title:"Bye There!",
  message:"sorry you have to go folk?"
 }];
  return (
    <div>
    <ErrorBoundary>
      <Card>
        <Todo Component={data}/>
        <GetDate />
        <div style={{ display: "flex" }}>
          <img
            style={{ borderRadius: "50%", height: "70px", width: "70px" }}
            src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
            alt="100xDevs Logo"
          />
          <h2 style={{ marginLeft: "20px", color: "#1E90FF" }}>100xDevs</h2>
        </div>
        <p>Hi there ! welcome to Web dev cohot-3 React Module</p>
       </Card>
      </ErrorBoundary>
    </div>
  );
}
function Todo({Component}){
   return <div>
     {Component.map(elem=>{
      return <div>
      {elem.title}
      {elem.message}
     </div>
   })}
  </div>
}
function GetDate() {
  return (
    <div style={{ display: "flex", justifyContent: "start", padding: "10px" }}>
      {new Date().toDateString()}
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#D3D3D3",
        padding: "20px",
        margin: "30px auto",
        height: "20vh",
        borderRadius: "5px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        width: "50%",
        textAlign: "center",
        fontFamily: "sans-serif",
        height:"50%"
      }}
    >
      {children}
    </div>
  );
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default App;
