import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    render(<Button text="Load more posts" />)
    expect.assertions(1)
    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeInTheDocument();
    // expect(button).toHaveAttribute('class', 'button');
  })

  it('should call function on button click', () => {
    const fn = jest.fn()
    render(<Button text="Load more posts" onClick={fn} />)

    const button = screen.getByRole('button', { name: /load more/i })
    // fireEvent.click(button)
    userEvent.click(button)
    expect(fn).toHaveBeenCalledTimes(1);
  })

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more posts" disabled={true} />)
    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeDisabled();
  })

  it('should be enabled when disabled is false', () => {
    render(<Button text="Load more posts" disabled={false} />)
    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeEnabled();
    // expect(button).not.toBeDisabled();
  })
})