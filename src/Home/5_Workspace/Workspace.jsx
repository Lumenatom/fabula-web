import React from "react";
import './Workspace.css'
import Smerta from "../../img/smerta.png"
const Workspace = () => {

    return (
        <div className='workspace'>
            <div className='workspace_wrapper'>
                <div className='container'>
                    <div className='workspace_content'>
                        <div className="description">
                            <h2>
                                Lore development <br /> workspace
                            </h2>
                            <ul>
                                <li>
                                    develop lor together with friends
                                </li>
                                <li>
                                    play the realization of your own dreams
                                </li>
                                <li>
                                    be a co-owner of the virtual world
                                </li>
                            </ul>
                            <a href="#">
                                Join DPC
                            </a>
                        </div>
                        <>
                            <img src={Smerta} alt="" />
                        </>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workspace;