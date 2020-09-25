import React, { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';
import API from '../utils/API';
const Modal = () => {
    const { isModalVisible, toggleModal, body, category, start, end, addBody, addCategory, } = useContext(PostContext);
    return (

        <div className={`modal ${isModalVisible ? "is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Let's Study Together!</p>
                    <button className="delete" aria-label="close" onClick={toggleModal}></button>
                </header>
                <section className="modal-card-body">
                    <form>
                        <div className="form-control">
                            <label> Select Study Course:
                                    <br />
                                <select id="select-topic" onChange={e => addCategory(e.target.value)}>
                                    <option value="HTML">Week 1 : HTML</option>
                                    <option value="CSS">Week 2 : CSS</option>
                                    <option value="JavaScript">Week 3 : Java Script</option>
                                    <option value="WebAPIs">Week 4 : Web APIs</option>
                                    <option value="ThirdPartyAPIs">Week 5 : Third Party APIs</option>
                                    <option value="ServerSideAPIs">Week 6 : Server Side APIs</option>
                                    <option value="Project1">Week 7 : Project 1</option>
                                    <option value="Project1Contd">Week 8 : Project 1 Continued</option>
                                    <option value="NodeJS">Week 9 : Node.JS</option>
                                    <option value="OOP">Week 10 : OOP</option>
                                    <option value="Express">Week 11 : Express</option>
                                    <option value="MySQL">Week 12 : MySQL</option>
                                    <option value="MVC">Week 13 : MVC</option>
                                    <option value="FullStack">Week 14 : Full Stack</option>
                                    <option value="Project2">Week 15 : Project 2</option>
                                    <option value="Project2Contd">Week 16 : Project 2 Continued</option>
                                    <option value="NoSQL">Week 17 : NoSQL</option>
                                    <option value="PWA">Week 18 : PWA</option>
                                    <option value="React">Week 19 : React</option>
                                    <option value="State">Week 20 : State</option>
                                    <option value="MERN">Week 21 : MERN</option>
                                    <option value="ComputerScience">Week 22 : Computer Science</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control">
                            <label htmlFor="description">Description:</label>
                            <br />
                            <textarea id="description" rows="5" onChange={e => addBody(e.target.value)}></textarea>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-info"onClick={() => API.savePost({body, category, start, end})}>Submit</button>
                </footer>
            </div>
        </div>

    );
}

export default Modal;
