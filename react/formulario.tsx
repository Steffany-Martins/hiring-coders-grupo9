import './formulario.css';
import axios from 'axios';
import * as React from 'react';

var testeData = Date()

var cad = 'cadastrado'
interface IForm {
  id: string;
  name: string;
  empresa: string;
  number: string;
  date: string;
  leds: string;
  recado: string;
}

class formulario extends React.Component<any, any> {
  state:IForm
  constructor(props:IForm) {
    super(props);
    this.state = { id: '', name: '', empresa: '', number: '' , date: '', leds:'', recado:''};

    this.handleChangeI = this.handleChangeI.bind(this);
    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeM = this.handleChangeM.bind(this);
    this.handleChangeU = this.handleChangeU.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeR = this.handleChangeR.bind(this);

  }
  

  handleChangeI(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ id: event.target.value });
  }
  handleChangeN(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: event.target.value });
  }
  handleChangeM(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ empresa: event.target.value });
  }
  handleChangeU(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ number: event.target.value });
  }
  handleChangeR(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ recado: event.target.value });
  }
  


  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = this.state.name;
    const id = this.state.id;
    const number = this.state.number;
    const empresa = this.state.empresa;
    const date = testeData;
    const leds = cad;
    const recado = this.state.recado;
    axios({
      method: 'put',
      url: 'https://lqbi4t23pj.execute-api.us-west-2.amazonaws.com/items',
      data: {
        id: id,
        name: name,
        number: number,
        empresa: empresa,
        date: date,
        leds: leds,
        recado : recado
      }
    });
    let content = document.getElementById('area');

    let carregando = `<p>CARREGANDO...</p>`

    let pronto = `<p class="cadastrado">CADASTRADO</p>`

    content!.innerHTML = carregando


    setTimeout(() => {
        content!.innerHTML = pronto
    }, 1000)
  }

  render() {
    return (
      <section className="contact-area">
      <div id ="area">
        <fieldset>
        <h3>Cadastro de clientes</h3>
        <form onSubmit={this.handleSubmit} id="formulario">

          <label>
            E-mail:
            <input type="text" value={this.state.id} onChange={this.handleChangeI} />
          </label>
          <label>
            Nome:
            <input type="text" value={this.state.name} onChange={this.handleChangeN} />
          </label>
          <label>
            Telefone:
            <input type="number" value={this.state.number} onChange={this.handleChangeU} />
          </label>
          <label>
            Empresa:
            <input type="text" value={this.state.empresa} onChange={this.handleChangeM} />
          </label>
          <label>
            Recado:
            <input type="recado" value={this.state.recado} onChange={this.handleChangeR} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
        </fieldset>
      </div>
      </section>
    );
  }
}


export default formulario
