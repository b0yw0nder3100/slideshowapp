import './slideshow.css'
import react, { useReducer } from 'react'
import { reducer } from '../Store/reducer'
import { RESTART, NEXT, PREV } from '../Store/actions'
export const defaultstate = {
    slides: [
        {
            id: 0,
            title: 'Lets do something',
            text: 'get ready to start'
        },

        {
            id: 1,
            title: 'First, 20 squats',
            text: 'squats are good for your legs'

        },
        {
            id: 2,
            title: 'Next, jumping jacks 30 seconds',
            text: 'help whole body mantain balance'
        },
        {
            id: 2,
            title: 'Next, do 10 sit ups',
            text: 'helps your core muscles'
        },
        {
            id: 3,
            title: 'Finally, do 15 push ups',
            text: 'helps improve your upper body muscles'
        },
    ],
    count: 0
}

const Slideshow = () => {
    const [state, dispatch] = useReducer(reducer, defaultstate)
    const restart = () => {
        dispatch(RESTART)
    }
    const prev = () => {
        dispatch(PREV)
    }
    const next = () => {
        dispatch(NEXT)
    }

    return (
        <div>
            {
                state.count === 0 ? (
                    <div className='button-container'>
                        <button onClick={restart} className='restart' disabled data-testid="restart">Restart</button>
                        <button onClick={prev} name="prev" className='prev' disabled data-testid="prev">Prev</button>
                        <button onClick={next} data-testid="next" className='next'>Next</button>
                    </div>) : (
                    state.count > 3 ? (<div className='button-container'>
                        <button onClick={restart} className='restart' data-testid="restart">Restart</button>
                        <button onClick={prev} className='prev' data-testid="prev">Prev</button>
                        <button onClick={next} data-testid="next" className='next' disabled>Next</button>
                    </div>) : (
                        <div className='button-container'>
                            <button onClick={restart} className='restart' data-testid="restart">Restart</button>
                            <button onClick={prev} className='prev' data-testid="prev">Prev</button>
                            <button onClick={next} data-testid="next" className='next'>Next</button>
                        </div>
                    )
                )
            }

            <div className='slides'>
                <h1 data-testid="title">{state.slides[state.count].title}</h1>
                <p data-testid="text">{state.slides[state.count].text}</p>
            </div>
        </div>
    )
}

export default Slideshow;