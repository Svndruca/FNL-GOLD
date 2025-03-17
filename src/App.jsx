import RouterMain from "./routes/RouterMain"
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
    <>
      <div> 
        <BrowserRouter>
          <RouterMain/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
