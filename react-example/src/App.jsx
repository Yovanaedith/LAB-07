import { Button } from './components/Button'
import './App.css'
import { WapperList } from './components/WrapperList';
import { List } from './components/List';

function App() {

  const buttonText = "Count: ";

  return (
      <>
        <WapperList>
          <List/>
        </WapperList>
        <Button/>
      </> 
  )
}

export default App
