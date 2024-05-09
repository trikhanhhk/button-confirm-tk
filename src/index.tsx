import React, { useEffect, useRef, useState } from 'react'
import { Button, Overlay, Popover } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

type onCloseFunctionType = () => void;

interface Props {
  onConfirm?: onCloseFunctionType;
  onClose?: onCloseFunctionType;
  body?: string;
  okeTxt?: string;
  closeTxt?: string;
  header?: string;
  btnContent?: JSX.Element;
  btnClass?: string;
  zIndex?: number
}

const ButtonConfirm: React.FC<Props> = (props) => {
  const { onConfirm, onClose, body, btnContent, btnClass, header, zIndex, okeTxt, closeTxt } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const [target, setTarget] = useState<any>(null);

  useEffect(() => {
    //click ra ngoài thì đóng option
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    //gán sự khiện khi click ngoài
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  })

  const handleClick = (event: any) => {
    setShow(!show);
    setTarget(event.target);
  };

  const onConfirmClick = () => {
    setShow(!show);
    setTarget(null);
    onConfirm && onConfirm();
  }

  const onCloseClick = () => {
    setShow(!show);
    setTarget(null);
    onClose && onClose();
  }

  return (
    <div ref={ref}>
      <Button className={btnClass} onClick={handleClick}>
        {btnContent}
      </Button>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover style={{ zIndex: `${zIndex ? "" + zIndex : "800"}` }}>
          <Popover.Header as="h3"><FontAwesomeIcon icon={faWarning} /> {header ? header : "Warring"}</Popover.Header>
          <Popover.Body>
            <p>{body}</p>
            <hr />
            <div style={{
              flexGrow: "1",
              justifyContent: "space-between"
            }}
              className='d-flex'>
              <Button size='sm' onClick={onConfirmClick} className='btn btn-danger'>
                {okeTxt ? okeTxt : "Ok"}
              </Button>
              <Button size='sm' onClick={onCloseClick} className='btn btn-success'>
                {closeTxt ? closeTxt : "Close"}
              </Button>
            </div>
          </Popover.Body>
        </Popover>

      </Overlay>
    </div>
  )
}

export default ButtonConfirm
