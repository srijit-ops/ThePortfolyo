import React, {useState} from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function ProjectCard({name, img, tech, enabled, sequence, detail, github, liveUrl}) {
    const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
        <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <p>gdgdgdgdgdgdggdgdgdgdgdgdgdgdgdgdg</p>
      </Modal>
    </div>
  )
}

export default ProjectCard