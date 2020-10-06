import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ContactForm from './Components/ContactForm';
import { Route, useHistory } from 'react-router-dom';
import ConfirmationForm from './Components/ConfirmationForm';

function App() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/"
            render={() =>
              <ContactForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                subject={subject}
                setSubject={setSubject}
                content={content}
                setContent={setContent}
                history={history}
              />
            }
          />
          <Route path="/confirmation" component={ConfirmationForm} />
        </BrowserRouter>
      </div>
  );
}

export default App;
