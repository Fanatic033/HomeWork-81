import './App.css'
import UrlShrinkForm from './features/urlShrink/components/UrlShrinkForm.tsx';
import Header from './UI/Header.tsx';

const App = () => (
  <>
    <header>
      <Header/>
    </header>
    <h1 style={{textAlign: 'center'}}>Enter your Link</h1>
    <UrlShrinkForm/>
  </>
);

export default App
