import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ContactForm from './Components/ContactForm';
import { Route, Link} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ContactForm} />
          <Route path="/confirmation">
            <h1>確認フォーム</h1>
            <Link to="/">お問い合わせフォームへ</Link>
          </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
