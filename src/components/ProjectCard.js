import React, {useState} from 'react'
import CustomModal from './CustomModal';


function ProjectCard({name, img, tech, enabled, sequence, detail, github, liveUrl}) {
    const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button onClick={onOpenModal}>click</button>
        {/* <div className="card card--alt" data-direction="bottom">
          <div className="card__img" style="background-image: url(&quot;img/18.jpg&quot;); filter: grayscale(0%); translate: none; rotate: none; scale: none; transform: scale(1.3, 1.3);"></div>
          <div className="card__box card__box--b" style="translate: none; rotate: none; scale: none; transform: translate(0%, 20%) rotate(-10deg); opacity: 0;">
            <span className="card__box-number words chars splitting" data-splitting="" style="--word-total: 1; --char-total: 2;"><span className="word" data-word="30" style="--word-index: 0;"><span className="char" data-char="3" style="--char-index: 0; opacity: 1;">3</span><span className="char" data-char="0" style="--char-index: 1; opacity: 1;">0</span></span></span>
            <span className="card__box-tags">#breakbeat #bigbeat</span>
          </div>
          <div className="card__box card__box--c" style="translate: none; rotate: none; scale: none; transform: translate(0%, 20%) rotate(-10deg); opacity: 0;">
            <span className="card__box-category words chars splitting" data-splitting="" style="--word-total: 2; --char-total: 14;"><span className="word" data-word="BeatBunker" style="--word-index: 0;"><span className="char" data-char="B" style="--char-index: 0; opacity: 1;">B</span><span className="char" data-char="e" style="--char-index: 1; opacity: 1;">e</span><span className="char" data-char="a" style="--char-index: 2; opacity: 1;">a</span><span className="char" data-char="t" style="--char-index: 3; opacity: 1;">t</span><span className="char" data-char="B" style="--char-index: 4; opacity: 1;">B</span><span className="char" data-char="u" style="--char-index: 5; opacity: 1;">u</span><span className="char" data-char="n" style="--char-index: 6; opacity: 1;">n</span><span className="char" data-char="k" style="--char-index: 7; opacity: 1;">k</span><span className="char" data-char="e" style="--char-index: 8; opacity: 1;">e</span><span class="char" data-char="r" style="--char-index: 9; opacity: 1;">r</span></span><span class="whitespace"> </span><span class="word" data-word="Hall" style="--word-index: 1;"><span class="char" data-char="H" style="--char-index: 10; opacity: 1;">H</span><span class="char" data-char="a" style="--char-index: 11; opacity: 1;">a</span><span class="char" data-char="l" style="--char-index: 12; opacity: 1;">l</span><span class="char" data-char="l" style="--char-index: 13; opacity: 1;">l</span></span></span>
          </div>
        </div> */}
      <CustomModal open={open} onCloseModal={onCloseModal} name={name} img={img} tech={tech} detail={detail} liveUrl={liveUrl} github={github} enabled-={enabled} sequence={sequence}/>
    </div>
  )
}

export default ProjectCard