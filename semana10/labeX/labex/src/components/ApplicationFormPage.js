import React, { useState } from 'react';
import Header from "./Header";
import styled from "styled-components";
import SelectCountrys from './SelectCountrys';

const PageContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`

const BodyContainer = styled.div`
    display: flex;
    height: 80vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

const Title = styled.h3 `
    color: white;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    display: flex;
    width: 300px;
    height: 30px;
    align-self: center;
    margin: 7px;
`
const InputApplication = styled.input`
    display: flex;
    width: 300px;
    height: 80px;
    align-self: center;
    margin: 7px;
`

const Button = styled.button `
    display: flex;
    width: 100px;
    align-self: center;
    justify-content: center;
    padding: 10px;
    border-radius: 15px;
    border: none;
    margin-top: 10px;

    :hover {
        border: 2px solid #C016A8;
    }
`

const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  return { form, onChange };
};

const ApplicationFormPage = () => {
  const { form, onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSave = event => {
    event.preventDefault();
    console.log("oi");
  };
  

return (
    <PageContainer>
      <Header /> 
      <BodyContainer>
      <Title>Formulário de inscrição</Title>
      <Form onSubmit={handleSave}>
      <Input
        name="nome"
        placeholder="Nome"
        pattern={"[A-Za-z]{3,}"}
        title="O nome deve ter no mínimo 3 letras"
        value={form.Nome}
        onChange={handleInputChange}
        required
      />
      <Input
        name="age"
        placeholder="Idade"
        type="number"
        min="18"
        value={form.age}
        onChange={handleInputChange}
        required
      />
      <InputApplication
        name="applicationText"
        placeholder="Por que você quer ir nessa viagem?"
        type="text"
        value={form.applicationText}
        onChange={handleInputChange}
        required
      />
      <Input
        name="profession"
        type="text"
        placeholder="Profissão"
        value={form.profession}
        onChange={handleInputChange}
        required
      />
      <SelectCountrys />
      <Button>Salvar</Button>
    </Form>
      </BodyContainer> 
    </PageContainer>
  );
}

export default ApplicationFormPage;