import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicionar lógica para enviar os dados de cadastro ao servidor (ou localmente, dependendo das necessidades)
    navigate('/Home');
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <form method="get" onSubmit={handleSubmit}>
        <div className="txt_field">
          <input type="text" 
          name="username"
          value={formData.username}
          onChange={handleChange}
          required 
          />
          <span></span>
          <label>Nome do usuário</label>
        </div>
        <div className="txt_field">
          <input type="password" 
          name="password"
          value={formData.username}
          onChange={handleChange}
          required 
          />
          <span></span>
          <label>Senha</label>
        </div>
        <div className="pass">Esqueceu a senha?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Não é um membro? Inscreva-se
        </div>
      </form>
    </div>
  );
};

export default Login;