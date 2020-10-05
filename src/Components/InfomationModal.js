import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class InfomationModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.visible}
        onHide={() => this.props.handleClose()}
        animation={true}>
        <Modal.Header>
          <Modal.Title>このサイトについて</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>眞木敦史のポートフォリオです。</p>
            <p>AWS amplify + Reactで作られています。</p>
            <p>サーバーサイドはAWS Lambda + Go言語です。</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.handleClose()}>閉じる</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}
