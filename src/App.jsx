import Counter from "./components/Counter"
import { Spotlight } from "./components/ui/Spotlight"
function App(){
  return(
    <> 
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="orange"
      />
        <Counter/>
    </>
  )
}

export default App