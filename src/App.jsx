
import './App.css'

function App() {
  

  return (
    <>
      <h2>Cadastro de pessoa</h2>
      <form className="row g-3">
        <div className='col-md-6'>
          <label htmlFor="email" className='form-label' placeholder="EMAIL">NOME COMPLETO</label>
          <input type="text"  id="email" className="form-control"/>
        </div>
    
        <div className='col-md-6'>
          <label htmlFor="senha" className='form-label' placeholder="SENHA">NOME DA MÃE</label>
          <input type="password"  id="senha" className="form-control"/>
        </div>
        
        <div className='col-md-2'>
          <label htmlFor="date" className='form-label'>DATA DE NASC.</label>
          <input type="date" className="form-control"/>
        </div>

        <div className='col-md-5'>
          <label htmlFor="CEP" className='form-label' placeholder="CEP">CEP</label>
          <input type="text"  id="senha" className="form-control"/>
        </div>

        <div className='col-md-5'>
          <label htmlFor="bairro" className='form-label' placeholder="bairro">BAIRRO</label>
          <input type="text"  id="senha" className="form-control"/>
        </div>

        <div className='col-md-1'>
          <label htmlFor="número" className='form-label' placeholder="número">Nº</label>
          <input type="number"  id="senha" className="form-control"/>
        </div>

        <div className='col-md-11'>
          <label htmlFor="complemento" className='form-label' placeholder="complemento">COMPLEMENTO</label>
          <input type=" text"  id="senha" className="form-control"/>
        </div>

        <div className='col-md-4'>
          <label htmlFor="bairro" className='form-label' placeholder="bairro">BAIRRO</label>
          <input type="text"  id="senha" className="form-control"/>
        </div>

       <div className="col-md-4">
       <label htmlFor="estado" className='form-label' placeholder="bairro">ESTADO</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>ESCOLHA</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div> 
        
      <div className="col-md-4">
       <label htmlFor="bairro" className='form-label' placeholder="bairro">CIDADE</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>ESCOLHA</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div> 

      </form>
    </>
  )
}

export default App
