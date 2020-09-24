import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

let submitToBackend = (data) => axios.post("/api/posts", data);

const CreateWall = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [body, setBody] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")



    return (
        <div className="container">
            <div className='CreateWall'>
                <button className="button is-info" onClick={() => setModalIsOpen(true)}> Create Wall</button>
                <Modal className="create-modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <div className="column is-1"></div>
                    <div className="column is-10">
                        <form>
                            <div className="form-control">
                                <label> Select Study Course:
                                    <br />
                                    <select id="select-topic" onChange={e => setCategory(e.target.value)} >
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
                                <textarea id="description" rows="5" onChange={e => setBody(e.target.value)}></textarea>
                            </div>
                            <div className="form-control">
                                <label htmlFor="date">Study Date:</label>
                                <br />
                                <input type="datetime-local" id="date" onChange={e => setDate(e.target.value)}></input>
                            </div>
                        </form>
                    </div>
                    <br />
                    <div className="column is-11">
                        <div className="cw-submit">
                            <button className="button is-info" onClick={() => {submitToBackend({ date, body, category }); setModalIsOpen(false)}}>Submit</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
export default CreateWall;