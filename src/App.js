import Data from './api/data.json'
import Card from './component/Card';


function App() {
  return (
    <div>
      <Card cards = { Data.data } />
    </div>
  );
}

export default App;
