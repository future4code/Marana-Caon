import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { Post } from "./components/Post";

describe ('Adicionar post', () => {
    test('Adicionar post após digitar no input e clicar no botão adicionar', () => {
        const { getByText, getByPlaceholderText } = render(<App />)

        const addButton = getByText(/Adicionar/)
        const input = getByPlaceholderText('Novo post')

        fireEvent.change(input, {target: {value: 'Teste adicionar post'}})
        fireEvent.click(addButton)
    })
})

descbribe ('Curtir post e descurtir post', () => {
    test('Curtir post após clicar no botão curtir, trocando botão para descurtir', () => {
        const { getByText } = render(<App />)

        const addButton = getByText(/Adicionar/)
        const likeButton = getByText(/Curtir/)

        fireEvent.click(addButton)
        fireEvent.click(likeButton)
    })
})
