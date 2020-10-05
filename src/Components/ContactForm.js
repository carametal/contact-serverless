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
      validated: false,
      isModalVisible: false,
      isLoading: false,
    };
  }

  handleClickSubmit(event) {
    const form = event.currentTarget;
    if(form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({validated: true}, () => {
      if(form.checkValidity() === true) {
        this.setState({isLoading: true}, ()=> {
          this.setState({isLoading: false}, () => this.props.history.push("/confirmation"));
        });
      }
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
              <Form noValidate validated={this.state.validated} onSubmit={(event) => this.handleClickSubmit(event)}>
                <Form.Group>
                  <Form.Label>名前</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => this.handleChangeName(e)}
                  />
                  <Form.Control.Feedback type="invalid">名前を入力してください。</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Eメールアドレス</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    onChange={(e) => this.handleChangeEmail(e)}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">Eメールアドレスを入力してください。</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>件名</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => this.handleChangeSubject(e)}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">件名を入力してください。</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>内容</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows="8"
                    onChange={(e) => this.handleChangeContent(e)}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">件名を入力してください。</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">送信</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
};