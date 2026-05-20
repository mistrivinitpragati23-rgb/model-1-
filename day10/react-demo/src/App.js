import Header from "./Header";
import Footer from "./Footer";
function Sidebar(){
  return (
    <h1>This is the Sidebar</h1>
  )
}
function App() {
  return (
    <div>
      <h1>hello welcome</h1>
      <Header></Header>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  )
}
export default App;
