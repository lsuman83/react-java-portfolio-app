import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const  options = [
    {value: 'Old School', label: 'Old School', name: 'genre', id: 1},
    {value: 'Neo Traditional', label: 'Neo Traditional', name: 'genre', id: 2},
    {value: 'Realism', label: 'Realism', name: 'genre', id: 3},
    {value: 'Portrait', label: 'Portrait', name: 'genre', id: 4},
    {value: 'Watercolor', label: 'Watercolor', name: 'genre', id: 5},
    {value: 'Nu Skool', label: 'Nu Skool', name: 'genre', id: 6}
]

class Portfolio extends React.Component {


    state = {
        portfolios: {
            genre: '',
            list: [{
            artist: '',
            filepath: ''
        }]},
        dropdownOpen: false
    }

    handleClick = (event) => {
        debugger
        this.setState({
            ...this.state,
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {
        debugger
        return(
            <div className="flex min-h-screen">
                <Navbar />
                <div className='flex flex-col w-full'>
                    <header className='flex justify-end bg-blue-300 p-2'>
                        <Header />
                    </header>
                    <div class="absolute right-0 my-16">
                        <button onClick={this.handleClick} class="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                            <div class="relative my-10">
                                Filter by Genre
                                    <svg class="inline-flex h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                {this.state.dropdownOpen ? (
                                    <div class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                                        {options.map(option => 
                                            <a href="#" name={option.name} class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                                {option.label}
                                            </a>
                                        )}
                                    </div>) 
                                : null }
                            </div>
                        </button>
                    </div>
                    <div onClick class='card flex justify-center h-56 w-56 ml-10 mt-32' style={{backgroundColor: 'transparent', border: '1px solid #f1f1f1', perspective: '1000'}}>
                        <img src='https://tse1.mm.bing.net/th?id=OIP.1UOdYcY0fb3wZtGBcyLcIgHaHa&pid=Api&P=0' alt='Avatar'  />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio