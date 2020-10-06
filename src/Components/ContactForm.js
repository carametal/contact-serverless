import React from 'react';
import { Button, Form, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import InfomationModal from './InfomationModal';
import { withRouter } from 'react-router-dom';

class ContactForm extends React.Component {
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
          this.setState({isLoading: false}, this.moveConfirmation);
        });
      }
    });
  }

  moveConfirmation() {
    this.props.history.push('/confirmation');
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

  handleOpen() {
    this.setState({isModalVisible: true});
  }

  handleClose() {
    this.setState({isModalVisible: false});
  }

  render() {
    return (
      <Container>
        <div className="py-5 text-center">
          <h1>お問い合わせフォーム</h1>
          <Button
            variant="info"
            style={{marginTop: "15px"}}
            onClick={() => this.handleOpen()}
          >このサイトについて</Button>
        </div>
        <Row>
          <Col md={{ span: 6, offset: 3}}>
            <Form noValidate validated={this.state.validated} onSubmit={(event) => this.handleClickSubmit(event)}>
              <Form.Group>
                <Form.Label>名前</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => this.props.setName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">名前を入力してください。</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Eメールアドレス</Form.Label>
                <Form.Control
                  required
                  type="email"
                  onChange={(e) => this.props.setEmail(e.target.value)}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">Eメールアドレスを入力してください。</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>件名</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => this.props.setSubject(e.target.value)}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">件名を入力してください。</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>内容</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows="8"
                  onChange={(e) => this.props.setContent(e.target.value)}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">件名を入力してください。</Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">送信</Button>
            </Form>
          </Col>
        </Row>
        <InfomationModal
          visible={this.state.isModalVisible}
          handleClose={() => this.handleClose()}
        />
      </Container>
    );
  }
};

export default withRouter(ContactForm);