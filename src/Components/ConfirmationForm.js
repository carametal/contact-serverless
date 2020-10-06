import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

export default class ConfirmationForm extends React.Component {
  render() {
    return(
      <Container>
        <div className="py-5 text-center">
          <h1>確認フォーム</h1>
        </div>
        <Link to="/">
          <Button variant="secondary">戻る</Button>
        </Link>
      </Container>
    );
  }
}