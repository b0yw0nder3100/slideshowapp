/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import SlideShow, { defaultstate } from '../Slideshow'
import { render, fireEvent, } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

let getByTestId;
beforeEach(() => {
    const utils = render(<SlideShow />)
    getByTestId = utils.getByTestId
})

describe('When the page is rendered', () => {
    it('Default title and text should be shown in the slide', () => {
        const titleEl = getByTestId('title')
        const textEl = getByTestId('text')
        expect(titleEl.textContent).toEqual(defaultstate.slides[0].title)
        expect(textEl.textContent).toEqual(defaultstate.slides[0].text)
    })

    it('restart and prev button are disable, next button is enabled', () => {
        const prevbtn = getByTestId('prev')
        const restartbtn = getByTestId('restart')
        const nextbtn = getByTestId('next')
        expect(nextbtn).toBeEnabled()
        expect(prevbtn).toBeDisabled()
        expect(restartbtn).toBeDisabled()
    })

    it('Initial count value should be 0', () => {
        expect(defaultstate.count).toEqual(0)
    })
})



test('When the next button is clicked, the next title and text in the slide should be shown', () => {
    const nextbtn = getByTestId('next')
    const titleEl = getByTestId('title')
    const textEl = getByTestId('text')

    expect(titleEl.textContent).toEqual(defaultstate.slides[0].title)
    expect(textEl.textContent).toEqual(defaultstate.slides[0].text)
    fireEvent.click(nextbtn)
    expect(titleEl.textContent).toEqual(defaultstate.slides[1].title)
    expect(textEl.textContent).toEqual(defaultstate.slides[1].text)
})

test('when the next button is clicked on and there are no more elements to be displayed it should be disable', () => {
    const nextbtn = getByTestId('next')
    fireEvent.click(nextbtn)
    fireEvent.click(nextbtn)
    fireEvent.click(nextbtn)
    fireEvent.click(nextbtn)
    expect(nextbtn).toBeDisabled()
})

test('when the prev button is clicked, the prev title and text in the slide should be shown', () => {
    const nextbtn = getByTestId('next')
    const prevbtn = getByTestId('prev')
    const titleEl = getByTestId('title')

    expect(titleEl.textContent).toEqual(defaultstate.slides[0].title)
    fireEvent.click(nextbtn)
    fireEvent.click(nextbtn)
    fireEvent.click(prevbtn)
    expect(titleEl.textContent).toEqual(defaultstate.slides[1].title)
})

describe('When the restart button is clicked', () => {
    it('The default Title and text should be shown', () => {
        const nextbtn = getByTestId('next')
        const restartbtn = getByTestId('restart')
        const titleEl = getByTestId('title')
        fireEvent.click(nextbtn)
        fireEvent.click(nextbtn)
        fireEvent.click(restartbtn)
        expect(titleEl.textContent).toEqual(defaultstate.slides[0].title)
    })
    it('restart and prev button are disable, next button is enabled', () => {
        const nextbtn = getByTestId('next')
        const restartbtn = getByTestId('restart')
        const prevbtn = getByTestId('prev')
        fireEvent.click(nextbtn)
        fireEvent.click(nextbtn)
        fireEvent.click(restartbtn)
        expect(nextbtn).toBeEnabled()
        expect(prevbtn).toBeDisabled()
        expect(restartbtn).toBeDisabled()
    })

})