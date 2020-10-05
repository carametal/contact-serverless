import React from 'react';
import { Button, Form, Container, Row, Col, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import InfomationModal from './InfomationModal';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email: '',
      subject: '',
      content: '',
      isModalVisible: false,
      isLoading: false,
    };
  }

  handleClickSubmit() {
    let message = '';
    if (!this.IsValidName()) {
      message += "名前を入力してください。";
    }
    if (!this.IsValidEmail()) {
      message += message ? '\n' : '';
      message += "Eメールアドレスを入力してください。";
    }
    if (!this.IsValidSubject()) {
      message += message ? '\n' : '';
      message += "件名を入力してください。";
    }
    if (!this.IsValidContent()) {
      message += message ? '\n' : '';
      message += "内容を入力してください。";
    }
    if(message) {
      alert(message);
      return;
    }
    this.setState({isLoading: true}, ()=> {
      setTimeout(() => this.setState({isLoading: false}), 3000);
    });
  }

  IsValidName() {
    return this.state.name;
  }

  IsValidEmail() {
    return this.state.email;
  }

  IsValidSubject() {
    return this.state.subject;
  }

  IsValidContent() {
    return this.state.content;
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeSubject(event) {
    this.setState({ subject: event.target.value });
  }

  handleChangeContent(event) {
    this.setState({ content: event.target.value });
  }

  handleOpen() {
    this.setState({isModalVisible: true});
  }

  handleClose() {
    this.setState({isModalVisible: false});
  }

  render() {
    return (
      <header className="App-header">
        <InfomationModal
          visible={this.state.isModalVisible}
          handleClose={() => this.handleClose()}
        />
        {this.state.isLoading &&
          <div style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "#000", opacity: "0.5", zIndex: 9999}}>
            <Spinner animation="border" style={{position: "absolute", top: "50%"}}/>
          </div>
        }
        <Container>
          <Row>
            <div style={{ width: "100%", textAlign: "center", paddingBottom: "20px"}}>
              <h1>お問い合わせフォーム</h1>
              <Button
              variant="info"
                onClick={() => this.handleOpen()}
              >このサイトについて</Button>
            </div>
            <Col md={{ span: 6, offset: 3}}>
              <Form>
                <Form.Group>
                  <Form.Label>名前</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => this.handleChangeName(e)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Eメールアドレス</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) => this.handleChangeEmail(e)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>件名</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => this.handleChangeSubject(e)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>内容</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="8"
                    onChange={(e) => this.handleChangeContent(e)}
                  ></Form.Control>
                </Form.Group>
              </Form>
              <Button className="btn btn-primary" onClick={() => this.handleClickSubmit()}>送信</Button>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
};