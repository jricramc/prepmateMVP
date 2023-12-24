import { FarzaaContext } from '@/context/FarzaaContext'
import React, { useContext } from 'react'
import { Modal, ModalHeader } from 'react-bootstrap'

const VideoModal = () => {
    const {
        showVideo,
        handleVideoClose,
    } = useContext(FarzaaContext)
  return (
    <Modal show={showVideo} onHide={handleVideoClose} size='lg' centered className="modal-video" id="LKQIY6EGFR9TU">
        <Modal.Header className='vidoe-modal-header' closeButton></Modal.Header>
        <Modal.Body className="modal-video-body">
            <div className="modal-video-inner" id="modal-video-inner-LKQIY6EGFR9TU" >
            <div className="modal-video-movie-wrap">
                <iframe 
                className='video-modal-iframe'
                src="//www.youtube.com/embed/SwZynNzqBys?autoplay=1&amp;cc_load_policy=1&amp;color=null&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;end=null&amp;fs=1&amp;h1=null&amp;iv_load_policy=1&amp;loop=0&amp;modestbranding=null&amp;mute=0&amp;origin=null&amp;playsinline=null&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;nocookie=false" 
                frameBorder="0" 
                tabIndex="-1" 
                allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
                />
            </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default VideoModal