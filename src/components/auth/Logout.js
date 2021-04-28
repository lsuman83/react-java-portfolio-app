import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/auth'
import { useHistory } from 'react-router-dom'


const Logout = ({ dispatchLogoutUser }) => {
    const history = useHistory()

    const handleClick = () => {
        dispatchLogoutUser().then(() => history.push('/login'))
    }

    return (
        <a href="/login" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6">
            <span class="inline-flex justify-center items-center ml-4 text-red-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </span>
            <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Logout</span>
        </a>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogoutUser: () => dispatch(logoutUser())
    }
}


export default connect(null, mapDispatchToProps)(Logout)