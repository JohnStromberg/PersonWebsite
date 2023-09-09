import "./contacts.css"
import {AiOutlinePhone, AiOutlineMail, AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {useRef, useState, useEffect, useContext} from "react";
import emailjs from 'emailjs-com';
import {ThemeContext} from "../../context"
import Resume from "../../files/JohnStrombergResume.pdf"

const Contacts = () => {
    const scollToRef = useRef();
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_xsdlpxo', 'template_vkk1l09', formRef.current, '49vmkVZJ_RQ-O1Yfh')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                e.preventDefault();
            }, (error) => {
                console.log(error.text);
            });

    }
    useEffect(() => {
        if (done) {
            formRef.current.reset();
        }
        }, [handleSubmit])
    return (
        <div>
        <div className="c-first">
            <hr className="c-div"/>
        </div>
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me!</h1>
                    <div className="c-info">
                        <a href="tel:6519555238" target="_blank" className="c-info-item"><AiOutlinePhone size={42}/><div className="c-inside">(651)-955-5238</div></a>
                    </div>
                    <div className="c-info">
                        <a href="mailto:jes65764@bethel.edu" target="_blank" className="c-info-item"><AiOutlineMail size={42}/><div className="c-inside">jes65764@bethel.edu</div></a>
                    </div>
                    <div className="c-info">
                        <a href="https://github.com/JohnStromberg" target="_blank" className="c-info-item"><AiFillGithub size={42}/><div className="c-inside"></div></a>
                    </div>
                    <div className="c-info">
                        <a href="https://www.linkedin.com/in/john-stromberg-113a32256/" target="_blank" className="c-info-item"><AiFillLinkedin size={42}/><div className="c-inside"></div></a>
                    </div>
                    <div className="c-info">
                        <a href={Resume} download={Resume} style={{textDecoration:'none'}}><button>Download My Resume</button></a>
                    </div>

                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Fill out this quick form to <b>contact me</b>!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button >Submit</button>
                        <div className="c-thanks">{done && "Thank you!"}</div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contacts