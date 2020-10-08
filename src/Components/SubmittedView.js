import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button ,Container } from 'react-bootstrap';

class SubmittedView extends React.Component {
  render() {
    return(
      <Container>
        <div className="py-5 text-center">
          <h1>送信が完了しました。</h1>
          <Button
            variant="info"
            style={{marginTop: "15px"}}
          >
            <Link style={{color: "white"}} to="/">お問い合わせフォームに戻る</Link>
          </Button>

        </div>
      </Container>
    );
  }
}
export default withRouter(SubmittedView);