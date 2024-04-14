import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Style from './Chat.module.css'
import SendUsMessage from '../../components/SendUsMessage/SendUsMessage'
import { useState } from 'react'

export default function Chat() {
    const [currentQuestion, setCurrentQuestion] = useState("Study Requirement");
    const [messages, setMessages] = useState([])
    const [systemQuestions, setSystemQuestions] = useState([])

    console.log("System questions", systemQuestions)

    const findQuery = (criteria) => {
        for (const key in queries) {
            // Check if the current key matches the criteria
            if (key === criteria) {
                // Return the matching query
                return queries[key];
            }
            // If the key doesn't match, check the options object
            const options = queries[key].options;
            if (options) {
                // Iterate over each option in the options object
                for (const option in options) {
                    // Check if the option matches the criteria
                    if (option === criteria) {
                        // Return the matching query
                        return options[option];
                    }
                }
            }
        }
        // If no matching query is found, return null or handle it as needed
        return null;
    };

    const handleOptionClick = (option) => {
        console.log("option is", option, findQuery(option))

        let queryObject = findQuery(option);
        let questions;
        if (queryObject == null) {
            // queryObject = ["our executive will get in touch with you"];
            questions = [{ "server": "our executive will get in touch" }]
        } else {
            questions = Object.keys(queryObject?.options)?.map((item) => {
                return { "server": item }
            });
        }

        // console.log("object is", Object.keys(queryObject?.options))
        setSystemQuestions((prev) => [...prev, { "user": option }])


        console.log('questions', questions)

        setSystemQuestions((prev) => [...prev, ...questions])

        console.log("System questions", systemQuestions)

    };

    const Message = (query) => {

        return (
            <div>

                {systemQuestions.map((item) => (
                    item?.server ? <div className='mt-5 flex justify-start' onClick={() => handleOptionClick(item?.server)}>
                        <div className=' ms-2 sm:ms-10 rounded ps-2 pe-2 text-cyan-400 border border-cyan-400 max-w-52'>{item?.server}</div>
                    </div> : <div className='mt-2 flex me-3 justify-end' onClick={() => handleOptionClick(item?.user)}>
                        <div className=' ms-2 sm:ms-10 rounded ps-2 pe-2 text-white border bg-slate-500 max-w-52'>{item?.user}</div>
                    </div>
                ))}

            </div>
        )
    }
    const queries = {
        "Study Requirement": {
            options: {
                "How to create new Study?": {
                    options: {

                        "You need contact our executive for this? Do you wnat to connect with our executive now?": {

                        }

                    }
                },
                "Update your study requirement": {
                    options: {
                        "Need further assistance": {
                            options: "our executive will connect to you!"
                        }
                    }
                }
            }
        },
        "Participants": {
            options: {
                "Need further assistance": {
                    options: "our executive will connect to you!"
                }
            }
        },
        "Pricing and Refund Policy": {
            options: {
                "Need further assistance": {
                    options: "our executive will connect to you!"
                }
            }
        },
        "Verification Process": {
            options: {
                "Need further assistance": {
                    options: "our executive will connect to you!"
                }
            }
        }
    }
    return (
        <div className={Style.chat}>
            <div className={Style.main}>
                <div className={Style.navbarContainer}>
                    <NavBar />
                </div>
                <div>
                    <h3 className='text-center text-3xl font-semibold text-slate-700'>Hello there!</h3>
                    <h3 className='text-center text-3xl font-semibold text-sky-600'>How can we help you today?</h3>
                </div>
                <div className={Style.content}>

                    <div className='sm:ms-28 sm:me-28'>
                        {queries[currentQuestion]?.options &&
                            Object?.keys(queries).map((option, index) => (
                                <div onClick={() => handleOptionClick(option)} className='mt-5 flex justify-start'>
                                    <div className=' ms-2 sm:ms-10 rounded ps-2 pe-2 text-cyan-400 border border-cyan-400 max-w-52'>{option}</div>
                                </div>
                            ))}

                        <Message />

                    </div>
                </div>
            </div>
            <div className='flex align-middle justify-center'>
                <span className='font-semibold mb-2 ms-3'>Please enter your concern queries.Our team will definitely try to help you out </span>
            </div>
            <div className='flex align-middle justify-center mb-2'>
                <SendUsMessage systemQuestions={systemQuestions} setSystemQuestions={setSystemQuestions} />
            </div>
            <div className={Style.footerContainer}>
                <Footer />
            </div>
        </div>
    )
}
