import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Row, Col, Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class ConfirmationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }
  handleClickSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({isLoading: true}, this.postContact);
  }

  postContact() {
    const url = 'https://40ya180gf9.execute-api.ap-northeast-1.amazonaws.com/develop/contact';
    const body = {
      name: this.props.name,
      email: this.props.email,
      subject: this.props.subject,
      content: this.props.content
    };
    fetch(url, {
      method: 'post',
      body: JSON.stringify(body)
    })
      .then(response => {
        if(response.ok) {
          this.setState({isLoading: false}, this.moveToSubmittedView);
          return;
        }
        this.handleError(response);
      })
      .catch(error => this.handleError(error));
  }

  handleError(error) {
    console.log(error);
    const func = () => {
      alert("送信に失敗しました。入力内容を確認して再度お試しください。")
    };
    this.setState({isLoading: false}, func);
  }

  moveToSubmittedView() {
    this.props.history.push('/submitted');
  }

  render() {
    return(
      <Container>
        {this.state.isLoading &&
          <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "#000", opacity: "0.5", zIndex: 9999}}>
            <Spinner animation="border" style={{position: "absolute", top: "50%"}}/>
          </div>
        }
        <div className="py-5 text-center">
          <h1>確認フォーム</h1>
          <p>内容に間違いがなければ送信ボタンを押してください。</p>
          <Row>
            <Col md={{ span: 6, offset: 3}}>
              <Form onSubmit={(e) => this.handleClickSubmit(e)}>
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