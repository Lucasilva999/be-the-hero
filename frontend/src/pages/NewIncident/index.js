import React, { useState } from "react";
import "./styles.css";

import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from '../../services/api';

import Logo from "../../assets/logo.svg";

export default function NewIncident() {

	const ongId = localStorage.getItem('ongId');

	const history = useHistory();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [value, setValue] = useState("");

	async function handleNewIncident(e) {
		e.preventDefault();

		const data = {
			title,
			description,
			value,
		};

		try {
			await api.post('/incidents/', data, {
				headers: {
					Authorization: ongId,
				}
			});

			history.push('/profile');
		}
		catch(err) {
			alert('Erro ao cadastrar caso , tente novamente' + err);
		}

	}

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={Logo} alt="Be The Hero" />
          <h1>Cadastrar Novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form>
					<input 
						placeholder="Título do Caso" 
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<textarea 
						placeholder="Descrição" 
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<input 
						placeholder="Valor em Reais" 
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
          <button className="button" type="submit" onClick={e => handleNewIncident(e)}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
