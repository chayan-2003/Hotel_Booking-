import React from 'react'

const MailList = () => {
    return (
        <div className="Mail bg-sky-950 h-48">
            <h1 className="mailTtile flex justify-center text-3xl font-bold mt-4 text-white pt-10">Save Time , Save Money!</h1>
            <span className="mailDesc flex justify-center text-white pt-4">Sign up and we will send the best deals to you</span>
            <div className="mailInputContainer   flex justify-center pt-4">
                <input type="text" placeholder="your email" className="p-2"/>
                <button className="kl bg-blue-500 text-white ml-3 px-2">subscribe</button>
            </div>
        </div>
    )
}

export default MailList