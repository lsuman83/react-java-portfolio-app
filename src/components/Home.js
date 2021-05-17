import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

class Home extends React.Component {

    state={
        search: ''
    }

    handleChange = (event) => {

        this.setState({
            search: event.target.value
        })

    }
    render(){
        return(
            <div className="flex min-h-screen">  
                <Navbar />
                <div className='flex flex-col w-full'>
                    <header className='flex justify-end bg-blue-300 p-2'>
                        <Header />
                    </header>
                    <div className='text-center'>
                        Welcome!
                    </div>
                </div>
            </div>
        )
    }
}


export default Home