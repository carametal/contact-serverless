import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class ConfirmationForm extends React.Component {
  handleClickSubmit() {
    alert("Submit!!");
  }

  render() {
    return(
      <Container>
        <div className="py-5 text-center">
          <h1>確認フォーム</h1>
          <Row>
            <Col md={{ span: 6, offset: 3}}>
              <Form onSubmit={() => this.handleClickSubmit()}>
                <Form.Group>
                  <Form.Label>名前</Form.Label>
                  <Form.Control defaultValue={this.props.name} disabled />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Eメールアドレス</Form.Label>
                  <Form.Control defaultValue={this.props.email} disabled />
                </Form.Group>

                <Form.Group>
                  <Form.Label>件名</Form.Label>
                  <Form.Control defaultValue={this.props.subject} disabled />
                </Form.Group>

                <Form.Group>
                  <Form.Label>内容</Form.Label>
                  <Form.Control defaultValue={this.props.content} disabled />
                </Form.Group>
                <Link to="/">
                  <Button variant="secondary">戻る</Button>
                </Link>
                <Button type="submit" variant="primary" style={{ marginLeft: "10px"}}>送信</Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default withRouter(ConfirmationForm);